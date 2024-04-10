import React from "react";
import './menu.css';

const Menu=()=>{
    return(
        <div id="navbar">
        <div>
          <p id="logo">Sarina.io</p>
        </div>
        <div>
          <a href="#welcome-section">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
      </div>
    );
}
export default Menu;