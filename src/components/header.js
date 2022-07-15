import React from "react";
import Logo from "../images/header/logo.png";
import Menu from "../images/header/menu.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__menu">
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
