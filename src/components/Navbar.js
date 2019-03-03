import React, { Component } from "react";

class Navbar extends Component {
  render() {
      return (
         <nav className="container navbar-wrapper">
             <a href="#" className="brand-logo">
                 <i className="material-icons">chat</i>Chat Bot</a>
         </nav>
      )
  }
}

export default Navbar;
