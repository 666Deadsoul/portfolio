import React from "react";
import './about.css';
import Av from '../images/s_p.png';
import Resume from '../images/resume.pdf';
const About=()=>{
    return(
        <section id="about">
        <h1>About Me</h1>
        <div id="main_ab">
            <div id="about_sec">
                <div className="av">
                    <img src={Av} id="S_av"/>
                </div>
                <div id="detail">

                    <p>
                    Hi, I am Sarina Maharjan, currently a student and my specific interest lies in Frontend Development as well as UI/UX Designing.
                    I am a proactive person with a genuine eagerness to learn and expand my knowledge. 
                    </p>
                    <a href={Resume} download="SarinaMaharjan"><button>Download Resume</button></a>
                </div>
            </div>
            <div id="ab_next">
                <div id="skills">
                <h3>My Skills</h3>
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>Figma</li>
                    </ol>
                </div>
                <div id="services">
                <h3>Services</h3>
                    <ol>
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>Single Page Application</li>
                        <li>API Integration</li>
                    </ol>
                </div>
            </div>
        </div>
        </section>
        
        
    );
}
export default About;