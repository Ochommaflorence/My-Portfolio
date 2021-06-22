import React from "react";
import { projects } from "./ProjectData";

const Projects = () => {
  return (
    <section className="container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <div>
          {projects.map((project)=> {
              const {title, image, technology, description, siteLink, id} = project;
              return(
              <div className="single-box">
              <img src={image} alt="projectPic" />
              <span className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <a>{siteLink}</a>
              </span>
                

              </div>
              )
          })}
      </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
