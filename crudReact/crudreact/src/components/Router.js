import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import Header from "./Header";
import Navegacion from "./Navegacion/Navegacion";
import Posts from "./Posts/Posts";
import PostViewer from "./PostViewer/PostViewer";
import FormularioPost from "./Formulario/FormularioPost";
import PostEdit from "./PostEdit/PostEdit";


class Router extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.obtenerPosts();
  }

  obtenerPosts = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      this.setState({ posts: res.data });
      console.log(res.data);
    });
  };

  borrarPost = id => {
    //endpoint para eliminar
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if (res.status === 200) {
          //se elimina del state el array de post por ser un ejemplo, pero en realidad debería volver a hacer get para obtener los existentes
          const post = [...this.state.posts];
          let resultado = post.filter(post => post.id !== id);
          this.setState({ posts: resultado });
        }
      });
  };

  insertPost = post => {
    console.log(post);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts/`, { post })
      .then(res => {
        if (res.status === 201) {
          let postId = { id: res.data.id };
          const nuevoPost = Object.assign({}, res.data.post, postId);

          this.setState(prevState => ({
            posts: [...prevState.posts, nuevoPost]
          }));

          Swal.fire("Éxito", "Registro creado exitosamente", "success");
        }
      });
  };

  editarPost = (postActualizado)=>{
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postActualizado.id}`, { postActualizado }).then(res=>{
      if(res.status===200){
        
        Swal.fire("Éxito", "Registro creado exitosamente", "success");
        //Aqui debería ir el código para recargar los datos de la api, pero jsonplaceholder es un fake api 
        //de ejemplo nada más y no actualiza, por eso es necesario cambiar el listado de registros manualmente
        let postId =  res.data.id;
        const postsCopy = [...this.state.posts];
        const indexPostEditar = postsCopy.findIndex(post=>postId===post.id);
       postsCopy[indexPostEditar] = postActualizado;
        this.setState({posts:postsCopy})
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row justify-content-center">
            <Header />
            <Navegacion />

            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Posts
                      posts={this.state.posts}
                      borrarPost={this.borrarPost}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/post/:postId"
                render={props => {
                  let idPost = props.location.pathname.replace("/post/", "");
                  idPost = Number(idPost);
                  const posts = this.state.posts;
                  let filtro;
                  filtro = posts.filter(post => post.id === idPost);
                  return <PostViewer post={filtro[0]} />;
                }}
              />

              <Route
                exact
                path="/crear"
                render={() => {
                  return <FormularioPost insertPost={this.insertPost} />;
                }}
              />
              <Route
                exact
                path="/editar/:postId"
                render={props => {
                  let idPost = props.location.pathname.replace("/editar/", "");
                  idPost = Number(idPost);
                  const posts = this.state.posts;
                  let filtro;
                  filtro = posts.filter(post => post.id === idPost);
                  return <PostEdit
                  post = {filtro[0]}
                  editarPost={this.editarPost} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
