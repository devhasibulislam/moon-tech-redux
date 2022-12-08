import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <section>
      <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
        <ul className="h-full  mx-auto flex lg:flex-row md:flex-row flex-col lg:overflow-hidden md:overflow-hidden overflow-y-scroll justify-between items-center gap-3 font-semibold text-indigo-900">
          <h1 className="flex-1 text-left">Moon Tech</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <Link to="/wishlist">
            <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
              <IoIosListBox className="text-white" />
            </li>
          </Link>
          <Link to="/cart">
            <li title="Cart" className="bg-indigo-500 p-2 rounded-full">
              <BsFillCartFill className="text-white " />
            </li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
