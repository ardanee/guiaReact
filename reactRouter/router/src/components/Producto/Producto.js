import React from 'react';
import {Link} from 'react-router-dom';

const Producto = (props)=>{
    const {id, imagen, nombre, precio} = props.informacion;
    console.log(precio);
    return (
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre}</p>
            <span>{`Q. ${precio}`}</span>
            <Link to={`/producto/${id}`}>
                Más información
                </Link>
        </li>
    )
}

export default Producto;