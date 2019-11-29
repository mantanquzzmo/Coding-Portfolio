import React from "react";

const ProjectCard = props => {
  let project = props.project;
  return (
    <>
      <div class="ui card">
        <div class="image">
          <a href={project.link} target="_blank">
            <img src={project.image} width="260" height="260" />
          </a>
        </div>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>
          <div class="description">{project.description}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
