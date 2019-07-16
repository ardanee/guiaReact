import React, { Component } from "react";
import Header from "./Header.js";
import Formulario from "./Formulario.js";
import Resumen from "./Resumen.js";

//importar clase con helpers (helpers.js)
import {
  obtenerDiferenciaAnio,
  calcularMarca,
  obtenerPlan
} from "./../helper.js";

class App extends Component {
  //Objeto de estado
  state = {
    resultado: "",
    datos: ""
  };

  cotizarSeguro = datos => {
    //Destructuring
    const { marca, year, plan } = datos;

    //agregae una base de cada seguro sea de 2000
    let resultado = 2000;

    //obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restar el 3% al valor del seguro
    resultado -= (diferencia * 3 * resultado) / 100;

    //Americano 15%, Asiatico 5% y europeo 30% del incremento
    resultado = calcularMarca(marca) * resultado;

    let incrementoPlan = obtenerPlan(plan);

    //le pone formato al número resultante.
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //Lo coloca en el objeto estado  (EN ESTE EJEMPLO SE ASIGNAN LOS OBJETOS DE ESTADO POR SEPARADO CON FINES DIDÁCTICOS)
    this.setState({
      resultado: resultado
    });

    //crear objeto para el state datos
    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    };

    //setea el objeto datosAuto en el state datos por separado
    this.setState({
      datos: datosAuto
      
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador." />

        <div className="contenedorFormulario" />
        <Formulario cotizarSeguro={this.cotizarSeguro} />
        <Resumen datos={this.state.datos} resultado={this.state.resultado} />
      </div>
    );
  }
}

export default App;
