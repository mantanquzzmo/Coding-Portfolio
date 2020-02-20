import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("./src/data/projects.json").then(response => {
      setProjects(response.data);
    });
  }, []);

  let projectsList;

  if (projects.length > 0) {
    projectsList = projects.reverse().map(project => {
      return (
        <div class="padcard" key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });
  }

  return (
    <div className="ui main container">
      <div className="ui stackable four column grid">{projectsList}</div>
      {projects.length > 0 ? (
        <h3 id="github-message">
          <a href="https://github.com/mantanquzzmo">
            For many more visit my GitHub!
          </a>
        </h3>
      ) : null}
    </div>
  );
};

export default Projects;
