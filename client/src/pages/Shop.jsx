import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Shop";
import ProductCardShop from "../components/ProductCardShop";
import ContactFormSection from "../components/ContactFormSection";
import customFetch from "../utils/customFetch";
import { categories, types } from "../utils/clientConstants";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/products");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const productsArrayJson = [
  {
    _id: "66835bfec6ea5908733b4e83",
    productId: 1,
    name: "Pro Crested Jersey",
    category: "Adults",
    type: "Jersey",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [],
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
  },
  {
    _id: "66835cfdc6ea5908733b4e8d",
    productId: 2,
    name: "Pro Crested Hoodie",
    category: "Adults",
    type: "Hoodie",
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
        color: "Black",
        size: "Small",
        price: 220,
        stockQuantity: 4,
        _id: "6686bc87c985ca7e4c3b67d8",
      },
      {
        color: "Black",
        size: "Large",
        price: 200,
        stockQuantity: 1,
        _id: "6686bc87c985ca7e4c3b67d9",
      },
      {
        color: "Black",
        size: "XX-Large",
        price: 220,
        stockQuantity: 2,
        _id: "6686bc87c985ca7e4c3b67da",
      },
      {
        color: "Black",
        size: "X-Large",
        price: 230,
        stockQuantity: 5,
        _id: "6686bc87c985ca7e4c3b67db",
      },
      {
        color: "Red",
        size: "Large",
        price: 215,
        stockQuantity: 1,
        _id: "6686bc87c985ca7e4c3b67dc",
      },
      {
        color: "Red",
        size: "Small",
        price: 210,
        stockQuantity: 2,
        _id: "6686bc87c985ca7e4c3b67dd",
      },
      {
        color: "White",
        size: "Large",
        price: 215,
        stockQuantity: 2,
        _id: "6686bc87c985ca7e4c3b67de",
      },
      {
        color: "White",
        size: "Medium",
        price: 220,
        stockQuantity: 6,
        _id: "6686bc87c985ca7e4c3b67df",
      },
    ],
    createdAt: "2024-07-02T01:50:53.940Z",
    updatedAt: "2024-07-04T15:15:19.446Z",
    __v: 0,
  },
  {
    _id: "66835dafc6ea5908733b4e97",
    productId: 3,
    name: "Pro Crested Hoodie",
    category: "Kids",
    type: "Hoodie",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Black",
        size: "Small",
        price: 180,
        stockQuantity: 2,
        _id: "6686bda1c985ca7e4c3b681f",
      },
      {
        color: "Black",
        size: "Large",
        price: 170,
        stockQuantity: 3,
        _id: "6686bda1c985ca7e4c3b6820",
      },
      {
        color: "Black",
        size: "Medium",
        price: 175,
        stockQuantity: 3,
        _id: "6686bda1c985ca7e4c3b6821",
      },
      {
        color: "Black",
        size: "X-Large",
        price: 185,
        stockQuantity: 3,
        _id: "6686bda1c985ca7e4c3b6822",
      },
      {
        color: "Red",
        size: "Large",
        price: 215,
        stockQuantity: 1,
        _id: "6686bda1c985ca7e4c3b6823",
      },
      {
        color: "Red",
        size: "Small",
        price: 210,
        stockQuantity: 2,
        _id: "6686bda1c985ca7e4c3b6824",
      },
      {
        color: "Green",
        size: "Large",
        price: 180,
        stockQuantity: 1,
        _id: "6686bda1c985ca7e4c3b6825",
      },
      {
        color: "Green",
        size: "Medium",
        price: 175,
        stockQuantity: 5,
        _id: "6686bda1c985ca7e4c3b6826",
      },
    ],
    createdAt: "2024-07-02T01:53:51.023Z",
    updatedAt: "2024-07-04T15:20:01.738Z",
    __v: 0,
  },
  {
    _id: "66836da4a893e61bdbf45486",
    productId: 4,
    name: "Pro Crested T-Shirt",
    category: "Women",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Green",
        size: "Small",
        price: 30,
        stockQuantity: 5,
        _id: "6686be10c985ca7e4c3b683b",
      },
      {
        color: "Green",
        size: "Medium",
        price: 30,
        stockQuantity: 4,
        _id: "6686be10c985ca7e4c3b683c",
      },
      {
        color: "Green",
        size: "Large",
        price: 30,
        stockQuantity: 5,
        _id: "6686be10c985ca7e4c3b683d",
      },
      {
        color: "Red",
        size: "X-Large",
        price: 35,
        stockQuantity: 6,
        _id: "6686be10c985ca7e4c3b683e",
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 5,
        _id: "6686be10c985ca7e4c3b683f",
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 4,
        _id: "6686be10c985ca7e4c3b6840",
      },
      {
        color: "White",
        size: "Large",
        price: 30,
        stockQuantity: 4,
        _id: "6686be10c985ca7e4c3b6841",
      },
      {
        color: "White",
        size: "X-Large",
        price: 35,
        stockQuantity: 0,
        _id: "6686be10c985ca7e4c3b6842",
      },
      {
        color: "White",
        size: "Medium",
        price: 30,
        stockQuantity: 3,
        _id: "6686be10c985ca7e4c3b6843",
      },
      {
        color: "White",
        size: "Small",
        price: 30,
        stockQuantity: 6,
        _id: "6686be10c985ca7e4c3b6844",
      },
    ],
    createdAt: "2024-07-02T03:01:56.831Z",
    updatedAt: "2024-07-04T15:21:52.209Z",
    __v: 0,
  },
  {
    _id: "66836f45a893e61bdbf4549f",
    productId: 5,
    name: "Pro Crested T-Shirt",
    category: "Boys",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Black",
        size: "Small",
        price: 25,
        stockQuantity: 6,
        _id: "6686bea0c985ca7e4c3b687f",
      },
      {
        color: "Black",
        size: "Medium",
        price: 30,
        stockQuantity: 0,
        _id: "6686bea0c985ca7e4c3b6880",
      },
      {
        color: "Black",
        size: "Large",
        price: 30,
        stockQuantity: 2,
        _id: "6686bea0c985ca7e4c3b6881",
      },
      {
        color: "Black",
        size: "X-Large",
        price: 35,
        stockQuantity: 4,
        _id: "6686bea0c985ca7e4c3b6882",
      },
      {
        color: "Red",
        size: "X-Large",
        price: 35,
        stockQuantity: 4,
        _id: "6686bea0c985ca7e4c3b6883",
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 1,
        _id: "6686bea0c985ca7e4c3b6884",
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 2,
        _id: "6686bea0c985ca7e4c3b6885",
      },
      {
        color: "Green",
        size: "Large",
        price: 30,
        stockQuantity: 4,
        _id: "6686bea0c985ca7e4c3b6886",
      },
      {
        color: "Green",
        size: "X-Large",
        price: 35,
        stockQuantity: 0,
        _id: "6686bea0c985ca7e4c3b6887",
      },
      {
        color: "Green",
        size: "Medium",
        price: 30,
        stockQuantity: 3,
        _id: "6686bea0c985ca7e4c3b6888",
      },
      {
        color: "Green",
        size: "Small",
        price: 25,
        stockQuantity: 1,
        _id: "6686bea0c985ca7e4c3b6889",
      },
    ],
    createdAt: "2024-07-02T03:08:53.590Z",
    updatedAt: "2024-07-04T15:24:16.086Z",
    __v: 0,
  },
  {
    _id: "66836ff1a893e61bdbf454ac",
    productId: 6,
    name: "Pro Crested T-Shirt",
    category: "Girls",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Blue",
        size: "Small",
        price: 25,
        stockQuantity: 0,
        _id: "6686beefc985ca7e4c3b68c2",
      },
      {
        color: "Blue",
        size: "Medium",
        price: 30,
        stockQuantity: 0,
        _id: "6686beefc985ca7e4c3b68c3",
      },
      {
        color: "Blue",
        size: "Large",
        price: 30,
        stockQuantity: 2,
        _id: "6686beefc985ca7e4c3b68c4",
      },
      {
        color: "Blue",
        size: "X-Large",
        price: 30,
        stockQuantity: 4,
        _id: "6686beefc985ca7e4c3b68c5",
      },
      {
        color: "Red",
        size: "X-Large",
        price: 30,
        stockQuantity: 5,
        _id: "6686beefc985ca7e4c3b68c6",
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 2,
        _id: "6686beefc985ca7e4c3b68c7",
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 3,
        _id: "6686beefc985ca7e4c3b68c8",
      },
      {
        color: "Green",
        size: "Large",
        price: 30,
        stockQuantity: 0,
        _id: "6686beefc985ca7e4c3b68c9",
      },
      {
        color: "Green",
        size: "X-Large",
        price: 35,
        stockQuantity: 0,
        _id: "6686beefc985ca7e4c3b68ca",
      },
      {
        color: "Green",
        size: "Medium",
        price: 30,
        stockQuantity: 3,
        _id: "6686beefc985ca7e4c3b68cb",
      },
      {
        color: "Green",
        size: "Small",
        price: 25,
        stockQuantity: 4,
        _id: "6686beefc985ca7e4c3b68cc",
      },
      {
        color: "White",
        size: "Large",
        price: 30,
        stockQuantity: 3,
        _id: "6686beefc985ca7e4c3b68cd",
      },
      {
        color: "White",
        size: "X-Large",
        price: 35,
        stockQuantity: 4,
        _id: "6686beefc985ca7e4c3b68ce",
      },
      {
        color: "White",
        size: "Medium",
        price: 30,
        stockQuantity: 1,
        _id: "6686beefc985ca7e4c3b68cf",
      },
      {
        color: "White",
        size: "Small",
        price: 25,
        stockQuantity: 3,
        _id: "6686beefc985ca7e4c3b68d0",
      },
    ],
    createdAt: "2024-07-02T03:11:45.885Z",
    updatedAt: "2024-07-04T15:25:35.229Z",
    __v: 0,
  },
  {
    _id: "668370e7a893e61bdbf454bd",
    productId: 7,
    name: "Pro Crested Hat",
    category: "Kids",
    type: "Hat",
    description:
      "This graphic hat which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Blue",
        size: "One Size",
        price: 25,
        stockQuantity: 0,
        _id: "6686bf23c985ca7e4c3b68e6",
      },
      {
        color: "Red",
        size: "One Size",
        price: 30,
        stockQuantity: 5,
        _id: "6686bf23c985ca7e4c3b68e7",
      },
      {
        color: "Green",
        size: "One Size",
        price: 30,
        stockQuantity: 6,
        _id: "6686bf23c985ca7e4c3b68e8",
      },
      {
        color: "White",
        size: "Large",
        price: 25,
        stockQuantity: 7,
        _id: "6686bf23c985ca7e4c3b68e9",
      },
    ],
    createdAt: "2024-07-02T03:15:51.503Z",
    updatedAt: "2024-07-04T15:26:27.034Z",
    __v: 0,
  },
  {
    _id: "6683714da893e61bdbf454c3",
    productId: 8,
    name: "Pro Crested Hat",
    category: "Adults",
    type: "Hat",
    description:
      "This graphic hat which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Blue",
        size: "One Size",
        price: 25,
        stockQuantity: 0,
        _id: "6686bf50c985ca7e4c3b68f4",
      },
      {
        color: "Brown",
        size: "One Size",
        price: 25,
        stockQuantity: 3,
        _id: "6686bf50c985ca7e4c3b68f5",
      },
      {
        color: "Red",
        size: "One Size",
        price: 30,
        stockQuantity: 5,
        _id: "6686bf50c985ca7e4c3b68f6",
      },
      {
        color: "Green",
        size: "One Size",
        price: 30,
        stockQuantity: 1,
        _id: "6686bf50c985ca7e4c3b68f7",
      },
    ],
    createdAt: "2024-07-02T03:17:33.317Z",
    updatedAt: "2024-07-04T15:27:12.562Z",
    __v: 0,
  },
  {
    _id: "6685f07b2796f797e0455ac6",
    productId: 9,
    name: "Pro Crested T-Shirt",
    category: "Men",
    type: "T-Shirt",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images: [
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
      "/assets/images/logo.jpg",
    ],
    variants: [
      {
        color: "Black",
        size: "Small",
        price: 30,
        stockQuantity: 5,
        _id: "6686be4bc985ca7e4c3b685c",
      },
      {
        color: "Black",
        size: "Medium",
        price: 30,
        stockQuantity: 4,
        _id: "6686be4bc985ca7e4c3b685d",
      },
      {
        color: "Black",
        size: "Large",
        price: 30,
        stockQuantity: 0,
        _id: "6686be4bc985ca7e4c3b685e",
      },
      {
        color: "Black",
        size: "X-Large",
        price: 35,
        stockQuantity: 5,
        _id: "6686be4bc985ca7e4c3b685f",
      },
      {
        color: "Red",
        size: "X-Large",
        price: 35,
        stockQuantity: 6,
        _id: "6686be4bc985ca7e4c3b6860",
      },
      {
        color: "Red",
        size: "Medium",
        price: 30,
        stockQuantity: 5,
        _id: "6686be4bc985ca7e4c3b6861",
      },
      {
        color: "Red",
        size: "Large",
        price: 30,
        stockQuantity: 4,
        _id: "6686be4bc985ca7e4c3b6862",
      },
      {
        color: "Blue",
        size: "Large",
        price: 30,
        stockQuantity: 4,
        _id: "6686be4bc985ca7e4c3b6863",
      },
      {
        color: "Blue",
        size: "X-Large",
        price: 35,
        stockQuantity: 3,
        _id: "6686be4bc985ca7e4c3b6864",
      },
      {
        color: "Blue",
        size: "Medium",
        price: 30,
        stockQuantity: 0,
        _id: "6686be4bc985ca7e4c3b6865",
      },
      {
        color: "Blue",
        size: "Small",
        price: 25,
        stockQuantity: 2,
        _id: "6686be4bc985ca7e4c3b6866",
      },
    ],
    createdAt: "2024-07-04T00:44:43.255Z",
    updatedAt: "2024-07-04T15:22:51.568Z",
    __v: 0,
  },
];

const Shop = () => {
  const { data } = useLoaderData();
  const productsArray = data.products || productsArrayJson || [];

  const processedProducts = useMemo(() => {
    return productsArray.map((product) => {
      const variants = product.variants;
      const prices = variants.map((v) => v.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const colors = [...new Set(variants.map((v) => v.color))];
      const sizes = [...new Set(variants.map((v) => v.size))];

      return {
        ...product,
        minPrice,
        maxPrice,
        colors,
        sizes,
      };
    });
  }, [productsArray]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(processedProducts);

  useEffect(() => {
    const typeFilters = searchParams.getAll("type");
    const categoryFilters = searchParams.getAll("category");

    let result = processedProducts;

    if (typeFilters.length > 0) {
      result = result.filter((p) => typeFilters.includes(p.type));
    }
    if (categoryFilters.length > 0) {
      result = result.filter((p) => {
        if (p.category === "Adults") {
          return (
            categoryFilters.includes("Women") ||
            categoryFilters.includes("Men") ||
            categoryFilters.includes("Adults")
          );
        }
        if (p.category === "Girls" || p.category === "Boys") {
          return (
            categoryFilters.includes("Kids") ||
            categoryFilters.includes("Youth")
          );
        }
        return categoryFilters.includes(p.category);
      });
    }
    setFilteredProducts(result);
  }, [searchParams, processedProducts]);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      const currentValues = prevParams.getAll(key);
      if (currentValues.includes(value)) {
        // Remove the value if it's already there
        const newValues = currentValues.filter((v) => v !== value);
        if (newValues.length === 0) {
          prevParams.delete(key);
        } else {
          prevParams.set(key, newValues);
        }
      } else {
        // Add the value if it's not there
        prevParams.append(key, value);
      }
      return prevParams;
    });
  }

  if (productsArray.length === 0) {
    return (
      <Wrapper>
        <h2>No products to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>Our Products</h1>
      <div className="product-section">
        <div className="product-category-filter">
          {categories.map((c) => (
            <li
              key={c}
              onClick={() => handleFilterChange("category", c)}
              className={`category ${c} ${
                searchParams.getAll("category").includes(c) ||
                (searchParams.getAll("category").includes("Adults") &&
                  (c === "Women" || c === "Men")) ||
                (c === "Adults" &&
                  (searchParams.getAll("category").includes("Women") ||
                    searchParams.getAll("category").includes("Men"))) ||
                (searchParams.getAll("category").includes("Kids") &&
                  (c === "Girls" || c === "Boys")) ||
                (c === "Kids" &&
                  (searchParams.getAll("category").includes("Girls") ||
                    searchParams.getAll("category").includes("Boys")))
                  ? "selected"
                  : ""
              }`}
            >
              {c}
            </li>
          ))}
        </div>

        <div className="product-section-right">
          <div className="product-type-filter">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => handleFilterChange("type", t)}
                className={`type ${t} ${
                  searchParams.getAll("type").includes(t) ? "selected" : ""
                }`}
              >
                {t}
              </button>
            ))}

            {(searchParams.has("type") || searchParams.has("category")) && (
              <button
                onClick={() => {
                  setSearchParams({});
                }}
                className="clear-filters"
              >
                Clear filters
              </button>
            )}
          </div>
          <div className="products-container">
            {filteredProducts.map((p) => (
              <ProductCardShop
                key={p.productId}
                id={p.productId}
                name={p.name}
                imageSrc={p.images[0]}
                category={p.category}
                type={p.type}
                minPrice={p.minPrice}
                maxPrice={p.maxPrice}
                description={p.description}
                sizes={p.sizes}
                colors={p.colors}
              />
            ))}
          </div>
        </div>
      </div>
      <ContactFormSection />
    </Wrapper>
  );
};

export default Shop;
