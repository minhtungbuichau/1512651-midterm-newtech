import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Signin from './component/auth/signin';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Signin/>
      </BrowserRouter>
    );
  }
}

export default App;
