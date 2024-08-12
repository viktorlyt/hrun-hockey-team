import { useContext } from "react";
import { Link } from "react-router-dom";
import { LuTrash2 } from "react-icons/lu";
import Wrapper from "../assets/wrappers/ProductDetailCard";
import { CartContext } from "../context/CartContext";

const ProductDetailCard = ({ product, cartItem }) => {
  const { dispatch } = useContext(CartContext);

  const variant = product.variants.find(
    (v) =>
      v.color === cartItem.variant.color && v.size === cartItem.variant.size
  );

  const updateQuantity = (newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: cartItem.id,
        quantity: Math.max(1, Math.min(newQuantity, variant.stockQuantity)),
      },
    });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: cartItem });
  };

  return (
    <Wrapper>
      <div className="left-part">
        <Link to={`/shop/${product.productId}`}>
          <img src={cartItem.image} alt={product.name} />
        </Link>
        <div className="details-section">
          <div className="top-part">
            <h4 className="product-name">
              {product.name} - {product.category}
            </h4>
            <p className="b4 size-wrapper">
              <span className="size-title">Size: </span>
              <span className="size-name">{cartItem.variant.size}</span>
            </p>
            <p className="b4 color-wrapper">
              <span className="color-title">Color: </span>
              <span className="color-name">{cartItem.variant.color}</span>
            </p>
          </div>
          <h4 className="price">${variant.price}</h4>
        </div>
      </div>
      <div className="actions-section">
        <LuTrash2 className="trash-icon" onClick={removeFromCart} />
        <div className="quantity-selector">
          <button
            onClick={() => updateQuantity(cartItem.quantity - 1)}
            disabled={cartItem.quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            value={cartItem.quantity}
            onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
            min={1}
            max={variant.stockQuantity}
            className="b3"
          />
          <button
            onClick={() => updateQuantity(cartItem.quantity + 1)}
            disabled={cartItem.quantity >= variant.stockQuantity}
          >
            +
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetailCard;
