import { Link } from "gatsby";
import React from "react";
import Logo from "../images/footer/bar_dannalc.png";
import Concept from "../images/footer/concept.png";
import Menu from "../images/footer/menu.png";
import News from "../images/footer/news.png";
import Store from "../images/footer/store.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <Link to="/concept">
                <img src={Concept} alt="concept" />
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <img src={Menu} alt="menu" />
              </Link>
            </li>
            <li>
              <Link to="/news">
                <img src={News} alt="news" />
              </Link>
            </li>
            <li>
              <Link to="/store">
                <img src={Store} alt="store" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
