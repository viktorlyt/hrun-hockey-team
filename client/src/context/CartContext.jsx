import React, { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.variant.color === action.payload.variant.color &&
          item.variant.size === action.payload.variant.size
      );

      if (existingItemIndex !== -1) {
        const updatedState = [...state];
        const existingItem = updatedState[existingItemIndex];

        const newQuantity = existingItem.quantity + action.payload.quantity;

        if (newQuantity > action.payload.variant.stockQuantity) {
          toast.error("Cannot add more than available stock.");
          return state;
        }

        updatedState[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
        };

        return updatedState;
      } else {
        if (action.payload.quantity > action.payload.variant.stockQuantity) {
          toast.error("Cannot add more than available stock.");
          return state;
        }

        return [...state, action.payload];
      }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATE_QUANTITY":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.quantity > item.variant.stockQuantity) {
            return item; // Quantity exceeds stock, return the current item without changes
          }
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });

    case "LOAD_CART":
      return action.payload;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
