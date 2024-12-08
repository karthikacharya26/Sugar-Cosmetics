import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import PrivateRoutes from "./PrivateRoutes";
import CartPage from "../pages/CartPage";
import Signup from "../pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
