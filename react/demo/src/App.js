import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p classname="app-intro">
          to get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
  
}

/**
 * JSX 1: 显示静态数据
*/
class App2 extends Component {

  render() {
    var title = "JSX In Depth";
    var data = [{ 
        "when": "2 minutes ago",
        "who": "Jill Dupre",
        "description": "Created new account"
      }, {
        "when": "1 hour ago",
        "who": "Lose White",
        "description": "Added fist chapter"
      }, {
        "when": "2 hours ago",
        "who": "Jordan Whash",
        "description": "Created new account"
      }];
    return (
      <div className="App">
        <div className="App-header">
          <h2>{title}</h2>
        </div>
        <table>
        <thead><tr><th>When</th><th>Who</th><th>DESC</th></tr></thead>
        {data.map(function(row) {
          return (
            <tr><td>{row.when}</td><td>{row.who}</td><td>{row.description}</td></tr>
            );
        })}
        </table>
      </div>
    );
  }
  
}

/* if/else */



export default App2;
