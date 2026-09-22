import { useState, useEffect } from "react";
import ChildComponent from "./child-component";

const ParentComponent = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ChildComponent product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ParentComponent;
