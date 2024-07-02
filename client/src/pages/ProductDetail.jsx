import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import Wrapper from "../../public/assets/wrappers/ProductDetail";

const product = {
  id: 1,
  name: "Green Pro Crested Jersey",
  // mainImage: "../../public/assets/images/logo.jpg",
  images: [
    "../../public/assets/images/logo.jpg",
    "../../public/assets/images/logo.jpg",
    "../../public/assets/images/logo.jpg",
    "../../public/assets/images/logo.jpg",
    "../../public/assets/images/logo.jpg",
  ],
  category: "Men",
  type: "Jersey",
  minPrice: 190,
  maxPrice: 195,
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from" +
    " a soft and breathable fabric, it offers superior comfort and style.",
  sizes: ["Small", "Medium", "Large", "X-Large"],
  colors: ["White", "Red", "Black"],
};

const Breadcrumb = ({ category, type }) => (
  <nav className="breadcrumb">
    <Link to="/">Home</Link> &gt;
    <Link to="/shop">Shop</Link> &gt;
    <Link to={`/shop?category=${category}`}>{category}</Link> &gt;
    <Link to={`/shop?category=${category}&type=${type}`}>{type}</Link> &gt;
    <span>
      <b>{product.name}</b>
    </span>
  </nav>
);

const ProductDetail = () => {
  const price = 190;
  const inStock = 4;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const imagesContainerRef = useRef(null);

  const getColorValue = (colorName) => {
    const colorMap = {
      White: "#FFFFFF",
      Red: "#c23404",
      Black: "#000000",
      Blue: "#0a3683",
      Green: "green",
      Brown: "#53432c",
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
        top: direction === "up" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    console.log("Selected color:", selectedColor);
    console.log("Selected size:", selectedSize);
    console.log("Selected size:", quantity);
  };

  return (
    <Wrapper>
      <h1>Our Products</h1>
      <Breadcrumb category={product.category} type={product.type} />
      <div className="product-container">
        <div className="images-container-wrapper">
          <button className="scroll-button" onClick={() => handleScroll("up")}>
            <RxDoubleArrowUp />
          </button>
          <div className="images-container" ref={imagesContainerRef}>
            {product.images.map((img, index) => (
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
            <RxDoubleArrowDown />
          </button>
        </div>
        <img
          src={product.images[selectedImageIndex]}
          alt={product.name}
          className="chosen-image"
        />{" "}
        <div className="details">
          <h3>
            {product.name} - {product.category}
          </h3>
          <h5>{price} $CAD</h5>
          <p className="details-section">{product.description}</p>
          <div className="details-section colors">
            <p>Select Color</p>
            <div className="colors-container">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`color-option ${
                    selectedColor === color ? "selected" : ""
                  }`}
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
          </div>
          <div className="details-section sizes">
            <p>Select Size</p>
            <div className="sizes-container">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size ${selectedSize === size ? "selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="add-to-cart-section">
              <div className="left-side">
                <div className="quantity-selector">
                  <button onClick={decrementQuantity}>-</button>
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
                    min="1"
                    max={inStock}
                  />
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= inStock}
                  >
                    +
                  </button>
                </div>
                {/* {quantity >= inStock && (
                  <p className="max-quantity-reached">Max quantity reached</p>
                )} */}
                <p className="more-details">Shipping and returns</p>
              </div>
              <div className="right-side">
                <input
                  type="hidden"
                  name="selectedColor"
                  value={selectedColor}
                />
                <input
                  type="hidden"
                  name="selectedSize"
                  value={selectedSize || ""}
                />
                <button type="submit" className="add-to-cart">
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
