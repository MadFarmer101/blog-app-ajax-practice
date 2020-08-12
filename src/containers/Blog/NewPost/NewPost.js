import React, { Component } from "react";
import axios from "axios";
import "./NewPost.css";
import { Redirect } from "react-router-dom"

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    submitted: false
  };

  newPostHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
    };
    axios.post("/", post)
    .then(response => console.log(response))
    this.setState({ submitted: true })
  };

  render() {
    let redirect
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
          <option value="Mad S. Farmer">Mad S. Farmer</option>
        </select>
        <button onClick={this.newPostHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
