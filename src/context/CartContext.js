import { createContext, useState } from "react";
import products from "../data/products.json";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const productsToAdd = products.find((product) => product.id === productId);
    const existingCartItem = cartItems.find((item) => item.id === productId);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...productsToAdd, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
