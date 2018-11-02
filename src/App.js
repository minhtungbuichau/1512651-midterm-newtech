import React, { Component } from 'react';
import './App.css';
import Signin from './component/auth/signin';
import Chatform from './component/chatform';
class App extends Component {
  render() {
    return (
        <div>
          <Signin/>  
          
        </div>
        
    );
  }
}

export default App;
