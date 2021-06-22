import React from "react";
import { projects } from "./ProjectData";

const Projects = () => {
  return (
    <section className="container" id="projects">
      <h2 className="title">Projects</h2>
      <div>
          {projects.map((project)=> {
              const {title, image, technology, description, siteLink, id} = project;
              return(
              <h1>{title}</h1>
              )
          })}
      </div>
    </section>
  );
};

export default Projects;
