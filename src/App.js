import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import MyChatBot from './components/ChatBot';
import "./index.css"

class App extends Component {
  render() {
    return (
      <div className="App">
     <Navbar/>
     <MyChatBot/>
      </div>
    );
  }
}

export default App;
