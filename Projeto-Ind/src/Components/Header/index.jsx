import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Imagem/logo.png";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo do site" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
