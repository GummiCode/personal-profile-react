import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";

const ProjectsContainer = styled.div`
  height: fit-content;
  width: 100vw;
  margin: 80px 0 80px 0;
  background: #ffffff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${up("md")} {
    height: fit-content;
  }
`;

const StyledProjectsIcon = styled(ProjectsIcon)`
  height: 75px;
  width: 75px;
  border-radius: 5px;

`;

const ProjectsHeading = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

const Projects = ({ nextSection }) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <ProjectsContainer data-testid="projects" id="projects">

          <StyledProjectsIcon />
          <ProjectsHeading>Projects</ProjectsHeading>
      </ProjectsContainer>
    </ThemeProvider>
  );
};

Projects.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Projects;
