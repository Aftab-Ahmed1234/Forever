import React, { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency='$';
    const delivery_fee=10;
    const[search,setSearch]=useState('');
    const[showSearch,setshowSearch
  const value = {
    products: products,
    currency:currency,
    delivery_fee:delivery_fee
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
}
export default ShopContextProvider;