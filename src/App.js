import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Index from './admin/Index/index.js'
import Login from './admin/Login/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login} />
        <Route path="/index" component={Index} />
      </div>
    );
  }
}

export default App;
