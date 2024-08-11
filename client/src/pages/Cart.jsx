import { useState, useEffect, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import { GoTag } from "react-icons/go";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Cart";
import ProductDetailCard from "../components/ProductDetailCard";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";
import { shouldUseMockData } from "../utils/environment";
import { mockProducts } from "../data/mockData";

const productIdsInCart = [9, 2, 5];

export const loader = async ({ request }) => {
  try {
    if (shouldUseMockData) {
      return {
        data: {
          products: mockProducts.filter((p) =>
            productIdsInCart.some((id) => p.productId === id)
          ),
        },
      };
    }
    const { data } = await customFetch.get("/products");

    const filteredProducts = data.products.filter((p) =>
      productIdsInCart.includes(p.productId)
    );

    return {
      data: filteredProducts,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Cart = () => {
  const { data } = useLoaderData();
  const productsArray = data.products || [];

  const [formData, setFormData] = useState({
    subtotal: 160,
    discount: 20,
    deliveryFee: 15,
    total: 143,
    promoCode: "",
  });

  const handleInputChange = (e) => {
    const { subtotal, discount, deliveryFee, total, promoCode } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (productsArray.length === 0) {
    return (
      <Wrapper>
        <h2>No products in the cart...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1>Your Cart</h1>
      <div className="cart-wrapper">
        <div className="products-container">
          {productsArray.map((p) => (
            <ProductDetailCard
              key={p.productId}
              id={p.productId}
              name={p.name}
              imageSrc={p.images[0]}
              category={p.category}
              price={p.variants[0].price}
              size={p.variants[0].size}
              color={p.variants[0].color}
              stockQuantity={p.variants[0].stockQuantity}
              initialQuantity={1}
            />
          ))}
        </div>
        <div className="form-section">
          <form>
            <h3>Order Summary</h3>
            <div className="subtotal-section">
              <p className="b1">Subtotal</p>
              <h4>${formData.subtotal}</h4>
            </div>
            <div className="discount-section">
              <p className="b1">
                Discount
                {formData.discount > 0 ? ` (-${formData.discount}%)` : ""}
              </p>
              <h4 className={`${formData.discount > 0 ? "red" : ""}`}>
                {formData.discount > 0 ? "-" : ""}$
                {(formData.discount / 100) * formData.subtotal}
              </h4>
            </div>
            <div className="delivery-section">
              <p className="b1">Delivery Fee</p>
              <h4>${formData.deliveryFee}</h4>
            </div>
            <div className="total-section">
              <h3>Total</h3>
              <h3>${formData.total}</h3>
            </div>
            <div className="promo-code-section">
              <FormRow
                type="text"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleInputChange}
                placeholder={
                  <>
                    <GoTag /> Add promo code
                  </>
                }
              />
              <button>Apply</button>
            </div>
            <button className="checkout-btn selected">Go to checkout</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
