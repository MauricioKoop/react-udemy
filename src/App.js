import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Titulo do post 1",
        description: "Descrição do post 1",
      },
      {
        id: 2,
        title: "Titulo do post 2",
        description: "Descrição do post 2",
      },
      {
        id: 3,
        title: "Titulo do post 3",
        description: "Descrição do post 3",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
