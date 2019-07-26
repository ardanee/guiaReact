import React from "react";
import { Link } from "react-router-dom";
//la carpeta img debe ir en el directorio public
const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src="/img/logo.png" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
