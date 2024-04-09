import React from "react";
import './home.css';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Profile from '../images/profile.jpg';

const Home=()=>{
    return(
      <div className="Home_section">
         <div id="welcome-section">
          <div id="me_section">
              <span id="ani_text">I am a Front-End Developer.</span>
              <p>Hello! I am Sarina Maharjan. A student and a passionate Frontend Developer.😁</p>
          </div>
          <div className="Smedia">
            <a href="https://github.com/666Deadsoul"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/sarina-maharjan-b29609244/"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div id="Profile">
        <img src={Profile} id="ppic"/>
        </div>
      </div>
     
    );
}
export default Home;