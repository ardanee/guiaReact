import React,{Component} from 'react';
import './SingleProductos.css';

class SingleProducto extends Component{

    render(){

        const {imagen,nombre,precio,descripcion} = this.props.producto;
        if(!imagen){
            return null;
        }
        return(
            <div className="info-producto">
                <div className="imagen">
            <img src={`/img/${imagen}.png`} alt={nombre}/>
                </div>

                <div className="info">
                    <h2>{nombre}</h2>
                    <p className="precio">Q.{precio} </p>
                    <p>{descripcion}</p>
                </div>
            </div>
        );
    }
}

export default SingleProducto;