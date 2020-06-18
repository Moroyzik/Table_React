import React from 'react';
import './App.css';
import {SimpleTable} from "./containers/Table/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

          <SimpleTable/>
       
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
