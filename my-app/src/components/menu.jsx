import React from "react";
import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Menu=()=>{
    return(
        <div id="navbar">
        <input type="checkbox" id="checkbtn"/>
            <label htmlFor="checkbtn" className="check-logo">
            <FontAwesomeIcon icon={faBars} />
            </label>
        <div>
          <p id="logo">Sarina.io</p>
        </div>
        <div id="m_items">
          <a href="#welcome-section">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
      </div>
    );
}
export default Menu;