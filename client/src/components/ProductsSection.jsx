import React from "react";
import ProductCardHome from "./ProductCardHome";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomePageSections";
import img from "../assets/images/logo.jpg";

const topProducts = [
  {
    id: 1,
    imageSrc: img,
    price: 45,
    name: "Men's Edmonton Oilers Fantastics Gray/White Hat",
  },
  {
    id: 2,
    imageSrc: img,
    price: 90,
    name: "Men's Edmonton Oilers Fantastics Sweatshirt ",
  },
  {
    id: 3,
    imageSrc: img,
    price: 70,
    name: "Unisex Edmonton Oilers Fantastics T-shirt ",
  },
];

const ProductsSection = () => {
  return (
    <Wrapper>
      <div className="home-page-section">
        <h2 className="section-title">Top products in our listing</h2>
        <p>Explore our top products.</p>
        <p>Discover our selection quality</p>
        <div className="home-page-section-container">
          {topProducts.map((p) => (
            <ProductCardHome
              key={p.id}
              id={p.id}
              imageSrc={p.imageSrc}
              price={p.price}
              name={p.name}
            />
          ))}
        </div>
        <div className="button-container">
          <button>
            <Link to="/shop">Explore All</Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsSection;
