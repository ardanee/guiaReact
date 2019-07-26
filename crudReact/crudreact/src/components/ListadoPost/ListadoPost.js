import React, { Component } from "react";
import Post from '../Post/Post';
class ListadoPost extends Component {
  mostrarPost = () => {
    const posts = this.props.posts;

    if (posts.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
        {Object.keys(posts).map(post => (
          <Post 
          key={post} 
          info={this.props.posts[post]} 
          borrarPost = {this.props.borrarPost}
          />
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Título</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>{this.mostrarPost()}</tbody>
      </table>
    );
  }
}
export default ListadoPost;
