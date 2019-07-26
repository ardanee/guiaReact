import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Productos from "./Productos/Productos.js";
import Nosotros from "./Nosotros/Nosotros.js";
import infoProductos from "../datos/datos.json";
import SingleProducto from "./SingleProducto/SingleProducto";
import Header from "./Header/Header.js";
import Navegacion from "./Navegacion/Navegacion.js";
import Error from "./Error/Error.js";

class Enrutador extends Component {
  state = {
    productos: [],
    terminoBusqueda: ""
  };

  componentWillMount() {
    this.setState({
      productos: infoProductos
    });
  }

  //búsqueda de producto
  search = busqueda => {
    if (busqueda.length > 3) {
      this.setState({ terminoBusqueda: busqueda });
    } else {
      this.setState({ terminoBusqueda: "" });
    }
  };


  render() {
    //realiza filtro
let productos = [...this.state.productos];
let termino = this.state.terminoBusqueda;
let resultado;

if (termino !== ""){
 resultado = productos.filter(producto=>(
   producto.nombre.toLowerCase().indexOf(termino.toLowerCase()) !==-1
 ))
}else{
  resultado =  productos;
}


    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />

          <Switch>
            <Route exact path="/nosotros" component={Nosotros} />

            <Route
              exact
              path="/productos"
              render={() => {
                return (
                  <Productos
                    productos={resultado}
                    busquedaProducto={this.search}
                  />
                );
              }}
            />

            <Route
              exact
              path="/producto/:productoId"
              render={props => {
                let idProducto = props.location.pathname.replace(
                  "/producto/",
                  ""
                );
                return (
                  <SingleProducto producto={this.state.productos[idProducto]} />
                );
              }}
            />

            <Route
              exact
              path="/"
              render={() => (
                <Productos
                  productos={resultado}
                  busquedaProducto={this.search}
                />
              )}
            />

            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Enrutador;
