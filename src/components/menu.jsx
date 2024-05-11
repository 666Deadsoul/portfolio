import React from "react";
import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {HashLink as Link} from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
const Menu=()=>{
    return(
      <BrowserRouter>
        <div id="navbar">
        <input type="checkbox" id="checkbtn"/>
            <label htmlFor="checkbtn" className="check-logo">
            <FontAwesomeIcon icon={faBars} />
            </label>
        <div>
          <p id="logo">Sarina.tech</p>
        </div>
        <div id="m_items">
          <Link to="#home" smooth>Home</Link>
          <Link to="#about" smooth>About</Link>
          <Link to="#project" smooth>Projects</Link>
          <Link to="#contact" smooth>Contact</Link>
        </div>
        
      </div>
      </BrowserRouter>
    );
}
export default Menu;