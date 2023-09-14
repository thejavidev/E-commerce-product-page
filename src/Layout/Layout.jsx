import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../Home";

const Layout = () => {
  return (
    <>
      <Header />
        <Home />
      <Footer />
    </>
  );
};

export default Layout;
