import React from "react";
import { bool } from "prop-types";
import styled from "styled-components";
import ProjectLinks from "./ProjectLinks";

const StyledMenu = styled.nav`
  position: absolute;
  top: -10vh;
  left: 50vw;
  height: 52vh;
  width: 45vw;
  padding: 0 0 0 5vw;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: pointer;
  transform: ${({ open }) => (open ? "translateY(10vh)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

const ProjectsMenu = ({ projectsOpen }) => {
  return (
    <StyledMenu open={projectsOpen}>
      <ProjectLinks />
    </StyledMenu>
  );
};

ProjectsMenu.propTypes = {
  projectsOpen: bool.isRequired,
};

export default ProjectsMenu;
