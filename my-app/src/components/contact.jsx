import React from "react";
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Contact =()=>{
    return(
        <div id="contact">
            <h1>Contact Me 👇</h1>
            <div id="cLinks">
                <div className="li">
                    <a href="https://www.linkedin.com/in/sarina-maharjan-b29609244/" className="links"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <div className="emailme">
                    <a href="#" className="links"><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
            </div>
           
        </div>
    );
}
export default Contact; 