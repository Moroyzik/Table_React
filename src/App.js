import React, {Component} from 'react';
import './App.css';
import { SimpleTable } from "./containers/Table/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let url = 'http://localhost:3001/posts'
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let posts = data.map((post, index) => {
          return (
            <div key={index}>
              <h3>{post.name}</h3>
              <p>Age: {post.age}</p>
            </div>
          )
        })
        this.setState({posts: posts});
      })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleTable />
      </header>
      {this.state.posts}
    </div>
  );
  }
}

export default App;
