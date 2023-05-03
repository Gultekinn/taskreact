import React, { useState } from "react";
import List from "../List";

const Content = () => {
  const [bestSeller, setBestSeller] = useState();
  const products = [
    {
      id: 1,
      name: "Product1",
      price: 10,
      model: "Model1",
      brand: "Brand1",
    },
    {
      id: 2,
      name: "Product2",
      price: 20,
      model: "Model2",
      brand: "Brand2",
    },
    {
      id: 3,
      name: "Product3",
      price: 30,
      model: "Model3",
      brand: "Brand3",
    },
    {
      id: 4,
      name: "Product4",
      price: 40,
      model: "Model4",
      brand: "Brand4",
    },
    {
      id: 5,
      name: "Product5",
      price: 50,
      model: "Model5",
      brand: "Brand5",
    },
  ];
  const Click = (id) => {
    setBestSeller(id);
  };
  return (
    <main>
      <h1>Products</h1>
      <List
        products={products}
        onProductClick={Click}
        bestSeller={bestSeller}
      />
    </main>
  );
};

export default Content;
