import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-8 my-10">
      {cart
        .sort((a, b) => a._id - b._id)
        .map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default Cart;
