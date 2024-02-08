import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Ecommerce App</h1>
        <Link to="/checkout">Cart</Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
