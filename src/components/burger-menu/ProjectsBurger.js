import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const ProjectsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4vh 0;

  &:focus {
    outline: none;
  }
`;

const ProjectsLabel = styled.span`
  font-size: 1.1em;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0.25em;
  text-decoration: none;
  transition: color 0.3s linear;

  ${ProjectsButton}:hover & {
    color: #ffd400;
    transition: 0.2s;
  }
`;

const ProjectsBurger = ({ projectsOpen, setProjectsOpen }) => {
  return (
    <ProjectsButton
      open={projectsOpen}
      onClick={() => setProjectsOpen(!projectsOpen)}
    >
      <ProjectsLabel>Projects</ProjectsLabel>
    </ProjectsButton>
  );
};

ProjectsBurger.propTypes = {
  projectsOpen: bool.isRequired,
  setProjectsOpen: func.isRequired,
};

export default ProjectsBurger;
