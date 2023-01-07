import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div class="mx-auto">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
