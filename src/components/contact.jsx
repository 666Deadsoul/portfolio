import React from "react";
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import HandleEmailClick from "./emailhandle";

const Contact =()=>{
    return(
        <section id="contact">
         <div id="contact_sec">
            <h1>Contact Me 👇</h1>
            <div id="cLinks">
                <div className="li">
                    <a href="https://www.linkedin.com/in/sarina-maharjan-b29609244/" className="links"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <div className="emailme">
                    <a onClick={HandleEmailClick} className="links"><FontAwesomeIcon icon={faEnvelope}/></a>
                </div>
            </div>
            <div id="em_con">
                <p>sarinamaharjan234@gmail.com</p>
                <p>Kirtipur, Kathmandu</p>
            </div>
           
        </div>
        </section>
       
    );
}
export default Contact; 