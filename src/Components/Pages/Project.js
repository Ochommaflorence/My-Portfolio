import React from "react";
import { projects } from "./ProjectData";

const Projects = () => {
  console.log(projects);
  const me = projects.map(project => {
    const { title, image, technology, description, siteLink, id } = project;
    return (
      <div className="col-md-6" key={id}>
        <div className="box">
        
            <div className="container">
                <div className="single-box">
              <img src={image.default} alt={title} className="img-fluid" id="projectImg" />
            </div>
            <span className="project-contents">
              <h2>{title}</h2>
              <h3>{technology}</h3>
              <p>{description}</p>
              <div className="">
                <a
                  href={siteLink}
                  className="project-btn"
                  target="blank"
                  rel="noopener noreferre"
                >
                  View site
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="box">{me}</div>
    </section>
  );
};

export default Projects;
