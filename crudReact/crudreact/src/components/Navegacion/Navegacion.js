import React from "react";
import { Link } from "react-router-dom";

import "./Navegacion.css";

const Navegacion = () => {
  return (
    <nav className="col-12 col-md-8">
      <Link to={"/"} className="btn btn-primary">Todos los posts</Link>
      <Link to={"/crear"} className="btn btn-primary">Nuevo post</Link>
    </nav>
  );
};

export default Navegacion;
