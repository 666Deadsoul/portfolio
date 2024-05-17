import React from "react";
import './about.css';
import Av from '../images/s_av.png';
import Resume from '../images/resume.pdf';
const About=()=>{
    return(
        <section id="about">
        <div id="main_ab">
            <div id="about_sec">
                <div className="av">
                    <img src={Av} id="S_av"/>
                </div>
                <div id="detail">
                    <h1>About Me</h1>
                    <p>
                    Hi, I am Sarina Maharjan, currently a student and my specific interest lies in Frontend Development as well as UI/UX Designing.
                    I am a proactive person with a genuine eagerness to learn and expand my knowledge. 
                    </p>
                    <a href={Resume} download="SarinaMaharjan"><button>Download Resume</button></a>
                </div>
            </div>
        </div>
        </section>
        
        
    );
}
export default About;