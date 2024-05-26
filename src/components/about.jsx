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
            <div id="services">
                <h3>Services</h3>
                <div id="service_section">
                    <div class="card">
                        <h3>Web Development</h3>
                        <p>
                        I offer comprehensive web development services by providing 
                        user-friendly websites that leave a lasting impression.
                        </p>
                    </div>
                    <div class="card">
               
                        <h3>UI/UX Design</h3>
                        <p>
                            Purchase a new new keyboard for smooth typing.
                            Start by typing slowly to avoid mistakes.
                        </p>
                    </div>
                    <div class="card">
                       
                        <h3>Single Page Application</h3>
                        <p>
                            Purchase a new new keyboard for smooth typing.
                            Start by typing slowly to avoid mistakes.
                        </p>
                    </div>
                     <div class="card">
                       
                        <h3>API Integration</h3>
                        <p>
                            Purchase a new new keyboard for smooth typing.
                            Start by typing slowly to avoid mistakes.
                        </p>
                    </div>
                </div>
    
            </div>
        </div>
        </section>
        
        
    );
}
export default About;