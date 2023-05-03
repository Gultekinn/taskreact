import React from "react";
import Card from "../Card";

const List = ({ products, onProductClick, bestSeller }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Card
            product={product}
            onClick={() => onProductClick(product.id)}
            isBestSeller={bestSeller === product.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
