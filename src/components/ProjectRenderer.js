import React from "react";
import ProjectTemplate1 from "./ProjectTemplate1";
import ProjectTemplate2 from "./ProjectTemplate2";
import projectData from "../assets/projectData";

const ProjectRenderer = () => {

  const determineFinal = (index, max) => {
    if (index === (max - 1)) {
      return "contact"
    } else {
      return `project${index + 1}`
    }
  };

  const renderProjects = (projectData) => {

    const max = projectData.length;

    return projectData.map((project, index) => {
      if(index%2 === 0) {
        console.log(determineFinal(index, max));
        return (
          <ProjectTemplate1
            key={`${project.key}-render`}
            projectData={project}
            projectId={`project${index}`}
            nextSection={determineFinal(index, max)}
        />
        )
      } else {
        
        return (
          <ProjectTemplate2
            key={`${project.key}-render`}
            projectData={project}
            projectId={`project${index}`}
            nextSection={determineFinal(index, max)}
        />
        )
      }    
    })
  };

  return (
    <>
      {renderProjects(projectData)}
    </>
  )
};

export default ProjectRenderer;
