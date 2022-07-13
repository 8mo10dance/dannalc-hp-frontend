import React from "react";
import "modern-css-reset";
import "../scss/base.scss";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
