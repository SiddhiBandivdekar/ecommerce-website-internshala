import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Checkout from "./components/Checkout";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartContextProvider>
  );
};

export default App;
