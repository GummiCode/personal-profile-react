import React from "react";
import ProjectTemplate1 from "./ProjectTemplate1";

const ProjectRenderer = ({ projectData }) => {

  
  const renderProjects = (projectData) => {
    return projectData.map((project, index) => {
      return (
        <ProjectTemplate1
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
