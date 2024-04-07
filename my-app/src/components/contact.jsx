import React from "react";
import './contact.css';

const Contact =()=>{
    return(
        <div id="contact">
        <h1>Contact Me</h1>
        <a href="#" id="profile-link" target="_blank">LinkedIn</a>
        <p>Or</p>
        <form id="cont_f">
        <div>
            <textarea name="comments" id="comments" placeholder="Leave a Message">
            </textarea>
        </div>
        <input type="submit" value="Send" id="s_btn"/>
        </form>
        </div>
    );
}
