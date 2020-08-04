import React from "react";
import ProjectTemplate1 from "./ProjectTemplate1";
import ProjectTemplate2 from "./ProjectTemplate2";

const ProjectRenderer = ({ projectData }) => {

  
  const renderProjects = (projectData) => {
    return projectData.map((project, index) => {
      if(index%2 === 0) {
        return (
          <ProjectTemplate1
            projectData={project}
            projectId={`project${index}`}
            nextSection={`project${++index}`}
        />
        )
      } else {
        return (
          <ProjectTemplate2
            projectData={project}
            projectId={`project${index}`}
            nextSection={`project${++index}`}
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
