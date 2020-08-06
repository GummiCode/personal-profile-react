import React from "react";
import PropTypes from "prop-types";
import ProjectTemplate1 from "./ProjectTemplate1";
import ProjectTemplate2 from "./ProjectTemplate2";

const ProjectRenderer = ({ projectData }) => {

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
            projectData={project}
            projectId={`project${index}`}
            nextSection={determineFinal(index, max)}
        />
        )
      } else {
        
        return (
          <ProjectTemplate2
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

ProjectRenderer.propTypes = {
  projectData: PropTypes.string
}

export default ProjectRenderer;
