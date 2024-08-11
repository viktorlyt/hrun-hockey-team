import { useState } from "react";
import { Link } from "react-router-dom";
import { LuTrash2 } from "react-icons/lu";
import Wrapper from "../assets/wrappers/ProductDetailCard";

const ProductDetailCard = ({
  id,
  name,
  imageSrc,
  category,
  price,
  size,
  color,
  stockQuantity,
  initialQuantity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const incrementQuantity = () =>
    setQuantity((prev) => (prev < stockQuantity ? prev + 1 : prev));
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Wrapper>
      <div className="left-part">
        <Link to={`/shop/${id}`}>
          <img src={imageSrc} alt="Product Picture" />
        </Link>
        <div className="details-section">
          <div className="top-part">
            <h4 className="product-name">
              {name} - {category}
            </h4>
            <p className="b4 size-wrapper">
              <span className="size-title">Size: </span>
              <span className="size-name">{size}</span>
            </p>
            <p className="b4 color-wrapper">
              <span className="color-title">Color: </span>
              <span className="color-name">{color}</span>
            </p>
          </div>
          <h4 className="price">${price}</h4>
        </div>
      </div>
      <div className="actions-section">
        <LuTrash2 className="trash-icon" />
        <div className="quantity-selector">
          <button onClick={decrementQuantity} disabled={!stockQuantity}>
            -
          </button>
          <input
            type="number"
            value={quantity}
            name="quantity"
            onChange={(e) =>
              setQuantity(
                Math.min(
                  stockQuantity,
                  Math.max(1, parseInt(e.target.value) || 1)
                )
              )
            }
            min={stockQuantity > 0 ? 1 : 0}
            max={stockQuantity}
            disabled={!stockQuantity}
            className="b3"
          />
          <button
            onClick={incrementQuantity}
            disabled={quantity >= stockQuantity || !stockQuantity}
          >
            +
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductDetailCard;
