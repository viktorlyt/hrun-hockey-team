import ProductCardHome from "./ProductCardHome";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomePageSections";

const ProductsSection = ({ topProducts }) => {
  return (
    <Wrapper>
      <div className="home-page-section products">
        <div className="section-title-container">
          <h1 className="section-title">Top products in our listing</h1>
          <p className="b1 section-description">
            Explore our top products. Discover our selection quality
          </p>
        </div>
        <div className="home-page-section-container">
          {topProducts.map((p) => (
            <ProductCardHome
              key={p.productId}
              id={p.productId}
              imageSrc={p.images[0]}
              price={p.mostPopularVariantPrice}
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
