import React from 'react';
import './App.css';
import SimpleTable from "./table";
import Post from './post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <SimpleTable/>
        </p>
        
        <div>
          <Post/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
