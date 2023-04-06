import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div class="mx-auto bg-black">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
