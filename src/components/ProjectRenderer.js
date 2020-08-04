import React from "react";
import Project from "./Project";

const ProjectRenderer = ({ projectData }) => {

  
  const renderProjects = (projectData) => {
    return projectData.map((project, index) => {
      return (
        <Project
          projectData={project}
          projectId={`project${index}`}
          nextSection={`project${++index}`}
        />
      )
    })
  };

  return (
    <>
      {renderProjects(projectData)}
    </>
  )
};

export default ProjectRenderer;
