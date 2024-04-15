import React from "react";
import './project.css';

const Project=()=>{
    return(
        <div id="projects">
          <h1>Projects</h1>
          <div id="proj_grid">
            <div className="project_card">
              <div className="proj_img">
              <img src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"/>
              </div>
              <div className="proj_title">
                <h3>Speedy</h3>
              </div>
              <div className="proj_desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum aliquid placeat doloribus itaque vero dolore asperiores assumenda!</p>
              </div>
              <div className="proj_tech">
                <h3>Tech:  <span>HTML, CSS, JS, React</span></h3>
               
              </div>
            </div>
            <div className="project_card">
              <div className="proj_img">
              <img src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"/>
              </div>
              <div className="proj_title">
                <h3>Draw</h3>
              </div>
              <div className="proj_desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum aliquid placeat doloribus itaque vero dolore asperiores assumenda!</p>
              </div>
            </div>
            <div className="project_card">
              <div className="proj_img">
              <img src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"/>
              </div>
              <div className="proj_title">
                <h3>Recipe</h3>
              </div>
              <div className="proj_desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum aliquid placeat doloribus itaque vero dolore asperiores assumenda!</p>
              </div>
            </div>
          </div>
      </div>
    );
}
export default Project;