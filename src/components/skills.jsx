import React from "react";
import './skills.css';

const Skills =()=>{
    return (
        <div className="Skills">
        <h1>My Skills</h1>
        <div className="container">
       
        <div className="progress" style={{'--i':75, '--clr':'blue'}}>
            <h3>75%</h3>
            <h4>HTML/CSS</h4>
        </div>
        <div className="progress"  style={{'--i':65, '--clr':'pink'}}>
            <h3>65%</h3>
            <h4>JS</h4>
        </div>
        <div className="progress less"  style={{'--i':45, '--clr':'red'}}>
            <h3>45%</h3>
            <h4>React</h4>
        </div>
        <div className="progress"  style={{'--i':60, '--clr':'orange'}}>
            <h3>60%</h3>
            <h4>Figma</h4>
        </div>
        <div className="progress"  style={{'--i':55, '--clr':'green'}}>
            <h3>55%</h3>
            <h4>Java</h4>
        </div>
    </div>
    </div>
    );
}

export default Skills;