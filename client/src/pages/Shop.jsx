import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Wrapper from "../../public/assets/wrappers/Shop";
import ProductCardShop from "../components/ProductCardShop";
import ContactFormSection from "../components/ContactFormSection";

const productsArray = [
  {
    id: 1,
    name: "Green Pro Crested Jersey",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Adult",
    type: "Jersey",
    minPrice: 190,
    maxPrice: 195,
    description: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Green"],
  },
  {
    id: 2,
    name: "Green Pro Crested Jersey",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Men",
    type: "Jersey",
    minPrice: 190,
    maxPrice: 195,
    description: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
  },
  {
    id: 3,
    name: "Pro Crested Jersey",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Women",
    type: "Jersey",
    minPrice: 190,
    maxPrice: 195,
    description: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Red"],
  },
  {
    id: 4,
    name: "Green Pro Crested Jersey",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Girls",
    type: "Jersey",
    minPrice: 190,
    maxPrice: 195,
    description: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Blue"],
  },
  {
    id: 5,
    name: "Green Pro Crested Jersey",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Boys",
    type: "Jersey",
    minPrice: 190,
    maxPrice: 195,
    description: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Blue"],
  },
  {
    id: 6,
    name: "Green Pro Crested Jersey",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Youth",
    type: "Jersey",
    minPrice: 190,
    maxPrice: 195,
    description: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Red", "White"],
  },
  {
    id: 7,
    name: "Pro Crested Hat",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Adult",
    type: "Hat",
    minPrice: 25,
    maxPrice: 25,
    description: "",
    sizes: ["One Size"],
    colors: ["Green", "Blue", "Red"],
  },
  {
    id: 8,
    name: "Pro Crested Hat",
    imageSrc: "../../public/assets/images/logo.jpg",
    category: "Kids",
    type: "Hat",
    minPrice: 15,
    maxPrice: 15,
    description: "",
    sizes: ["One Size"],
    colors: ["Black", "Blue", "White"],
  },
];

const categories = ["Women", "Men", "Youth", "Kids"];
const types = ["Jersey", "Hoodie", "Hat", "Novelty"];

const Shop = () => {
  const [products, setProducts] = useState(productsArray);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilters = searchParams.getAll("type");
  const categoryFilters = searchParams.getAll("category");
  // const [typeFilters, setTypeFilters] = useState([]);
  // const [categoryFilters, setCategoryFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsArray);

  useEffect(() => {
    let result = productsArray;
    const typeFilter = searchParams.get("type");
    const categoryFilter = searchParams.get("category");

    if (typeFilters.length > 0) {
      result = result.filter((p) => typeFilters.includes(p.type));
    }
    if (categoryFilters.length > 0) {
      result = result.filter((p) => {
        if (p.category === "Adult") {
          return (
            categoryFilters.includes("Women") ||
            categoryFilters.includes("Men") ||
            categoryFilters.includes("Adult")
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
  }, [typeFilters, categoryFilters]);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      const currentValues = prevParams.getAll(key);
      if (currentValues.includes(value)) {
        // Remove the value if it's already there
        return {
          ...Object.fromEntries(prevParams.entries()),
          [key]: currentValues.filter((v) => v !== value),
        };
      } else {
        // Add the value if it's not there
        return {
          ...Object.fromEntries(prevParams.entries()),
          [key]: [...currentValues, value],
        };
      }
    });
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
                categoryFilters.includes(c) ||
                (categoryFilters.includes("Adult") &&
                  (c === "Women" || c === "Men")) ||
                (c === "Adult" &&
                  (categoryFilters.includes("Women") ||
                    categoryFilters.includes("Men"))) ||
                (categoryFilters.includes("Kids") &&
                  (c === "Girls" || c === "Boys")) ||
                (c === "Kids" &&
                  (categoryFilters.includes("Girls") ||
                    categoryFilters.includes("Boys")))
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
                  typeFilters.includes(t) ? "selected" : ""
                }`}
              >
                {t}
              </button>
            ))}
            {(typeFilters.length > 0 || categoryFilters.length > 0) && (
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
                key={p.id}
                id={p.id}
                name={p.name}
                imageSrc={p.imageSrc}
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
