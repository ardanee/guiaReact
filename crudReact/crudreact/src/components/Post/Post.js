import React, { Component } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

export default class Class extends Component {
  eliminar = () => {
    const { id } = this.props.info;
    Swal.fire({
      title: "Confirmar eliminación",
      text: "¿ que desea eliminar el registro?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        this.props.borrarPost(id);
        Swal.fire("Borrado!", "El registro ha sido eliminado.", "success");
      }
    });
  };

  render() {
    const { id, title } = this.props.info;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>
          <Link to={`/post/${id}`} className="btn btn-primary">
            Ver
          </Link>
          <Link to={`/editar/${id}`} className="btn btn-warning">
            Editar
          </Link>
          <button onClick={this.eliminar} className="btn btn-danger">
            Borrar
          </button>
        </td>
      </tr>
    );
  }
}
