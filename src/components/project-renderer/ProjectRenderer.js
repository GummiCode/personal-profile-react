import React from "react";
import ProjectTemplate1 from "./ProjectTemplate1";
import ProjectTemplate2 from "./ProjectTemplate2";
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
        <ProjectTemplate1
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
