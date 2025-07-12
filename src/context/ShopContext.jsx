import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({}); // Initialize as an object

  const addToCart = (itemId, quality) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][quality]) {
        cartData[itemId][quality] += 1;
      } else {
        cartData[itemId][quality] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][quality] = 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]); // Correct dependency array

  const value = {
    products,

    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
