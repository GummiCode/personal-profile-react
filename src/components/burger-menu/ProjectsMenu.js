import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { bool } from "prop-types";
import breakpoints from "../../styles/breakpoints";
import ProjectLinks from "./ProjectLinks";

const StyledMenu = styled.nav`
  position: absolute;
  top: -10vh;
  left: 50vw;
  height: fit-content;
  min-height: calc(50vh - 60px);
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
  z-index: 6;

  ${up("sm")} {
    left: 212.5px;
    width: 190px;
    padding: 0 0 0 24px;
  }
`;

const ProjectsMenu = ({ projectsOpen }) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <StyledMenu open={projectsOpen}>
        <ProjectLinks />
      </StyledMenu>
    </ThemeProvider>
  );
};

ProjectsMenu.propTypes = {
  projectsOpen: bool.isRequired,
};

export default ProjectsMenu;
