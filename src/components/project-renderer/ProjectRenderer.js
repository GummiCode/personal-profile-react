import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import projectData from "../../assets/projectData";

const ProjectRenderer = () => {
  const determineLast = (index) => {
    if (index === 0) {
      return "projects-banner";
    }
    return `project${index - 1}`;
  };

  const determineNext = (index, max) => {
    if (index === max - 1) {
      return "contact";
    }
    return `project${index + 1}`;
  };

  const renderProjects = () => {
    const max = projectData.length;

    return projectData.map((project, index) => {
      return (
        <ProjectTemplate
          key={`${project.key}-render`}
          projectData={project}
          projectId={`project${index}`}
          lastSection={determineLast(index)}
          nextSection={determineNext(index, max)}
        />
      );
    })
  };

  return <>{renderProjects(projectData)}</>;
};

export default ProjectRenderer;
