import React, { useContext, useState } from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Category = () => {
  const { categoryId } = useParams();
  const catProducts = products.filter((prod) => prod.categoryId === categoryId);
  const { addToCart } = useContext(CartContext);

  const [deliveryOnly, setDeliveryOnly] = useState(false);

  const toggleDeliveryFilter = () => {
    setDeliveryOnly(!deliveryOnly);
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  return (
    <div>
      <h1>Category</h1>
      <label>
        <input
          type="checkbox"
          checked={deliveryOnly}
          onChange={toggleDeliveryFilter}
        />
        Delivery Only
      </label>
      <ul>
        {catProducts
          .filter((product) => !deliveryOnly || product.delivery)
          .map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.name} />
              <p>{product.name}</p>
              <p>
                {product.price} {product.currency}
              </p>
              <button onClick={() => handleAddToCart(product.id)}>
                Add to cart
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
