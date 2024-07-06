import { useState, useRef, useMemo, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import {
  RxDoubleArrowDown,
  RxDoubleArrowUp,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import customFetch from "../utils/customFetch";
import { PRODUCT_COLORS } from "../utils/clientConstants";
import Wrapper from "../assets/wrappers/ProductDetail";

export const loader = async ({ params }) => {
  const productId = params.id;

  try {
    const { data } = await customFetch.get(`/products/${productId}`);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return { error };
  }
};

const Breadcrumb = ({ category, type, name }) => (
  <nav className="breadcrumb">
    <Link to="/">Home</Link> &gt;
    <Link to="/shop">Shop</Link> &gt;
    <Link to={`/shop?category=${category}`}>{category}</Link> &gt;
    <Link to={`/shop?category=${category}&type=${type}`}>{type}</Link> &gt;
    <span>
      <b>{name}</b>
    </span>
  </nav>
);

const productJson = {
  _id: "66835bfec6ea5908733b4e83",
  productId: 1,
  name: "Pro Crested Jersey",
  category: "Adults",
  type: "Jersey",
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  images: [
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
    "/assets/images/logo.jpg",
  ],
  variants: [
    {
      color: "Green",
      size: "Small",
      price: 190,
      stockQuantity: 3,
      _id: "66835bfec6ea5908733b4e84",
    },
    {
      color: "Green",
      size: "Large",
      price: 185,
      stockQuantity: 2,
      _id: "66835bfec6ea5908733b4e85",
    },
    {
      color: "Blue",
      size: "Small",
      price: 195,
      stockQuantity: 2,
      _id: "66835bfec6ea5908733b4e86",
    },
    {
      color: "Blue",
      size: "X-Large",
      price: 200,
      stockQuantity: 4,
      _id: "66835bfec6ea5908733b4e87",
    },
    {
      color: "Red",
      size: "X-Large",
      price: 185,
      stockQuantity: 1,
      _id: "66835bfec6ea5908733b4e88",
    },
    {
      color: "Red",
      size: "Medium",
      price: 195,
      stockQuantity: 5,
      _id: "66835bfec6ea5908733b4e89",
    },
    {
      color: "White",
      size: "Large",
      price: 195,
      stockQuantity: 4,
      _id: "66835bfec6ea5908733b4e8a",
    },
    {
      color: "White",
      size: "Medium",
      price: 190,
      stockQuantity: 6,
      _id: "66835bfec6ea5908733b4e8b",
    },
  ],
  createdAt: "2024-07-02T01:46:38.598Z",
  updatedAt: "2024-07-02T01:46:38.598Z",
  __v: 0,
};

const ProductDetail = () => {
  const sizeOrder = [
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "XXX-Large",
  ];
  const { data, error } = useLoaderData();
  const product = data.product || productJson || null;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isHorizontalScroll = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const processedProduct = useMemo(() => {
    if (!product) return null;

    const colors = [...new Set(product.variants.map((v) => v.color))].sort();
    const sizes = [...new Set(product.variants.map((v) => v.size))].sort(
      (a, b) => {
        return sizeOrder.indexOf(a) - sizeOrder.indexOf(b);
      }
    );

    const getPrice = (color, size) => {
      const variant = product.variants.find(
        (v) => v.color === color && v.size === size
      );
      return variant ? variant.price : null;
    };

    const getInStock = (color, size) => {
      const variant = product.variants.find(
        (v) => v.color === color && v.size === size
      );
      return variant ? variant.stockQuantity : 0;
    };

    return {
      ...product,
      colors,
      sizes,
      getPrice,
      getInStock,
    };
  }, [product]);

  const [selectedColor, setSelectedColor] = useState(
    processedProduct.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState(processedProduct.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imagesContainerRef = useRef(null);

  useEffect(() => {
    setQuantity(1);
  }, [selectedColor, selectedSize]);

  const inStock =
    selectedColor && selectedSize
      ? processedProduct.getInStock(selectedColor, selectedSize)
      : 0;
  const price =
    inStock > 0 ? processedProduct.getPrice(selectedColor, selectedSize) : null;
  // const price =
  //   selectedColor && selectedSize
  //     ? processedProduct.getPrice(selectedColor, selectedSize)
  //     : null;

  const getColorValue = (colorName) => {
    const colorMap = {
      Black: "#000000",
      White: "#FFFFFF",
      Red: "#c23404",
      Blue: "#0a3683",
      Brown: "#53432c",
      Multicolor:
        "linear-gradient(to right, #c23404, #0a3683, #53432c, #009688, #e91e63)",
    };
    return colorMap[colorName] || colorName;
  };

  const isLightColor = (color) => {
    const hex = getColorValue(color).replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  };

  const incrementQuantity = () =>
    setQuantity((prev) => (prev < inStock ? prev + 1 : prev));
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleScroll = (direction) => {
    if (imagesContainerRef.current) {
      imagesContainerRef.current.scrollBy({
        left: isHorizontalScroll ? (direction === "up" ? -100 : 100) : 0,
        top: !isHorizontalScroll ? (direction === "up" ? -100 : 100) : 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    console.log("Selected color:", selectedColor);
    console.log("Selected size:", selectedSize);
    console.log("Quantity:", quantity);
  };

  if (error) return <div>Error loading product: {error.message}</div>;
  if (!processedProduct) return <div>Loading...</div>;

  return (
    <Wrapper>
      <h1>Our Products</h1>
      <Breadcrumb
        category={processedProduct.category}
        type={processedProduct.type}
        name={processedProduct.name}
      />
      <div className="product-container">
        <div className="images-container-wrapper">
          <button className="scroll-button" onClick={() => handleScroll("up")}>
            {windowWidth <= 768 ? <RxDoubleArrowLeft /> : <RxDoubleArrowUp />}
          </button>
          <div className="images-container" ref={imagesContainerRef}>
            {processedProduct.images.map((img, index) => (
              <div key={index} className="image-preview-container">
                <img
                  src={img}
                  alt=""
                  className={`image-preview ${
                    selectedImageIndex === index ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              </div>
            ))}
          </div>
          <button
            className="scroll-button"
            onClick={() => handleScroll("down")}
          >
            {windowWidth <= 768 ? (
              <RxDoubleArrowRight />
            ) : (
              <RxDoubleArrowDown />
            )}
          </button>
        </div>
        <img
          src={processedProduct.images[selectedImageIndex]}
          alt={processedProduct.name}
          className="chosen-image"
        />
        <div className="details">
          <h3>
            {processedProduct.name} - {processedProduct.category}
          </h3>
          <h5>{price ? `${price} $CAD` : "Out of stock"}</h5>
          <p className="details-section">{processedProduct.description}</p>
          <div className="details-section colors">
            <p>Select Color</p>
            {windowWidth <= 992 && windowWidth > 768 ? (
              <select
                className="color-dropdown"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {processedProduct.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            ) : (
              <div className="colors-container">
                {processedProduct.colors.map((color) => (
                  <div
                    key={color}
                    className={`color-option ${
                      selectedColor === color ? "selected" : ""
                    } ${color === "Multicolor" ? "multi-color" : ""}`}
                    style={{ backgroundColor: getColorValue(color) }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && (
                      <span
                        className="checkmark"
                        style={{
                          color: isLightColor(color) ? "black" : "white",
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="details-section sizes">
            <p>Select Size</p>
            {windowWidth <= 992 && windowWidth > 768 ? (
              <select
                className="size-dropdown"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {processedProduct.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            ) : (
              <div className="sizes-container">
                {processedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="add-to-cart-section">
              <div className="left-side">
                <div className="quantity-selector">
                  <button onClick={decrementQuantity} disabled={!inStock}>
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    name="quantity"
                    onChange={(e) =>
                      setQuantity(
                        Math.min(
                          inStock,
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      )
                    }
                    min={inStock > 0 ? 1 : 0}
                    max={inStock}
                    disabled={!inStock}
                  />
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= inStock || !inStock}
                  >
                    +
                  </button>
                </div>
                <p className="more-details">Shipping and returns</p>
              </div>
              <div className="right-side">
                <input
                  type="hidden"
                  name="selectedColor"
                  value={selectedColor || ""}
                />
                <input
                  type="hidden"
                  name="selectedSize"
                  value={selectedSize || ""}
                />
                <button
                  type="submit"
                  className="add-to-cart"
                  disabled={!inStock}
                >
                  Add to Cart
                </button>
                <p className="more-details">Product details</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
