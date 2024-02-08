import React from "react";
import products from "../data/products.json";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const catProducts = products.filter((prod) => prod.categoryId === categoryId);

  return (
    <div>
      <h1>Category</h1>
      <ul>
        {catProducts.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.name} />
            <p>{product.name}</p>
            <p>
              {product.price} {product.currency}
            </p>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
