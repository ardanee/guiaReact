import React, { Component } from "react";

class PostEdit extends Component {
  //Crea refs
  tituloRef = React.createRef();
  cuerpoRef = React.createRef();

  cargarDatosFormulario = () => {
    if (!this.props.post) return null;
    
    const {title,id,body} = this.props.post;
   
    return (
      <form onSubmit={this.editar} className="col-8">
        <legend className="text-center">Editar Post</legend>
        <div className="form-group">
          <label>Título del post</label>
          <input
            type="text"
            ref={this.tituloRef}
            className="form-control"
            placeholder="Tíulo del post"
            defaultValue={title}
          />
        </div>

        <div className="form-group">
          <label>Contenido del post</label>
          <textarea
            ref={this.cuerpoRef}
            className="form-control"
            placeholder="Contenido del post"
            defaultValue = {body}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Modificar
        </button>
      </form>
    );
  };

  editar = (e) => {
    {
      
      e.preventDefault();

      //leer los refs
      const post = {
          title:this.tituloRef.current.value,
          body:this.cuerpoRef.current.value,
          userId:1,
          id:this.props.post.id
      }

      console.log(post);
      this.props.editarPost(post);

    }
  };

  render() {
    return <React.Fragment>{this.cargarDatosFormulario()}</React.Fragment>;
  }
}

export default PostEdit;
