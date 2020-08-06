import React, { useState, useRef } from "react";
import ProjectsBurger from "./ProjectsBurger";
import ProjectsMenu from "./ProjectsMenu";
import useOnClickOutside from "../../hooks/hooks";

const ProjectsBurgerMenu = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  const node = useRef();

  useOnClickOutside(node, () => setProjectsOpen(false));

  return (
    <div ref={node}>
      <ProjectsBurger
        projectsOpen={projectsOpen}
        setProjectsOpen={setProjectsOpen}
      />
      <ProjectsMenu
        projectsOpen={projectsOpen}
        setProjectsOpen={setProjectsOpen}
      />
    </div>
  );
};

export default ProjectsBurgerMenu;
