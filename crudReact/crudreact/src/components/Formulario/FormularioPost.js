import React, { Component } from "react";

class FormularioPost extends Component {
  //crear los rest
  tituloRef = React.createRef();
  entradaRef = React.createRef();

  crearPost = (e) => {
e.preventDefault();

//leer los refs
const post = {
    title:this.tituloRef.current.value,
    body:this.entradaRef.current.value,
    userId:1 //id del usuario autenticado, en este ejemplo se hardcodea.
}

this.props.insertPost(post);


  };

  render() {
    return (
      <form onSubmit={this.crearPost} className="col-8">
        <legend className="text-center">Crear nuevo post</legend>
        <div className="form-group">
          <label>Título del post</label>
          <input
            type="text"
            ref={this.tituloRef}
            className="form-control"
            placeholder="Tíulo del post"
          />
        </div>

        <div className="form-group">
          <label>Contenido del post</label>
          <textarea
            ref={this.entradaRef}
            className="form-control"
            placeholder="Contenido del post"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    );
  }
}
export default FormularioPost;
