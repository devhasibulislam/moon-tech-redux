import React from "react";
import { BiListPlus, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
      key={product?._id}
    >
      <div className="h-52 w-52 mx-auto">
        <img src={product?.image} alt={product?.model} />
      </div>
      <h1
        className="font-bold text-left overflow-hidden text-ellipsis whitespace-nowrap"
        title={product?.model}
      >
        {product?.model}
      </h1>
      <p className="text-center font-semibold mb-3 text-purple-500">
        Rating: {product?.rating}
      </p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product?.keyFeature.map((feature, index) => {
            return (
              <li key={index} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {/* cart credentials */}
        <button
          className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>

        {/* wishlist credentials */}
        <button
          title="Add to wishlist"
          className="bg-indigo-500  py-1 px-2 rounded-full"
          onClick={() => dispatch(addToWishlist(product))}
        >
          <BiListPlus className="text-white" />
        </button>

        {/* remove button */}
        {(pathname.includes("cart") || pathname.includes("wishlist")) && (
          <button
            title="Remove product"
            className="bg-red-500  py-1 px-2 rounded-full"
            onClick={() =>
              dispatch(
                (pathname.includes("cart") && removeFromCart(product)) ||
                  (pathname.includes("wishlist") && removeFromWishlist(product))
              )
            }
          >
            <BiTrash className="text-white" />
          </button>
        )}
      </div>

      {/* quantity */}
      <div className="absolute bg-indigo-500 px-3 py-1 font-medium text-white rounded-full">
        {product.quantity}
      </div>
    </div>
  );
};

export default ProductCard;
