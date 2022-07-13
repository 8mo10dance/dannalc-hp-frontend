import React from "react";
import "modern-css-reset";
import "../scss/base.scss";

const Header = () => {
  return <header>header</header>;
};

const Footer = () => {
  return <footer>footer</footer>;
};

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
