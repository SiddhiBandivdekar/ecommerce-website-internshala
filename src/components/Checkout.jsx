import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const itemsInCart = cartItems.length > 0;

  return (
    <div>
      <h1>Checkout</h1>
      {itemsInCart ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>
                {item.quantity} x {item.price} {item.currency}
              </p>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Add items in your cart</p>
      )}
    </div>
  );
};

export default Checkout;
