import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <section className="px-10">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Main;
