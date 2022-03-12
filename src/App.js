import React, { useState } from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.scss";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import BlogScreen from "./Screens/BlogScreen";
import SampleProductScreen from "./Screens/SampleProductScreen";
import ProductsScreen from "./Screens/ProductsScreen";
import FAQ from "./Screens/FAQ";
import WhatWeAre from "./Screens/WhatWeAre";
import ProductDetails from "./Screens/ProductDetails";
import BlogDetails from "./Screens/BlogDetails";

export default function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <>
      {isSignIn ? <SignIn setIsSignIn={setIsSignIn} /> : null}
      <Header setIsSignIn={setIsSignIn} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/sample-product" element={<SampleProductScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/what-we-are" element={<WhatWeAre />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}
