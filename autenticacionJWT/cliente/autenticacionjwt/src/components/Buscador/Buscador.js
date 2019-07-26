import React,{Component} from 'react';
import "./Buscador.css";


class Buscador extends Component{

//lee datos del formulario
leerDatos=(e)=>{
    //término de busqueda
    const termino = e.target.value;

    //enviamos por prop
    this.props.busqueda(termino);
}



    render(){

        return(
<form className="buscador">
    <input type="text" placeholder="busqueda" onChange={this.leerDatos}/>
</form>

        );
    }
}

export default Buscador;