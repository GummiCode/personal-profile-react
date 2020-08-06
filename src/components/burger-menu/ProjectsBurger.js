import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const ProjectsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  span {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

const ProjectsBurger = ({ projectsOpen, setProjectsOpen }) => {
  return (
    <ProjectsButton
      open={projectsOpen}
      onClick={() => setProjectsOpen(!projectsOpen)}
    >
      <span>Projects</span>
    </ProjectsButton>
  );
};

ProjectsBurger.propTypes = {
  projectsOpen: bool.isRequired,
  setProjectsOpen: func.isRequired,
};

export default ProjectsBurger;
