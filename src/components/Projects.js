import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";

const ProjectsContainer = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  width: 100vw;
  background: url("./images/textures/concrete.png");
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${up("md")} {
    height: fit-content;
  }
`;

const FilterLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const StyledProjectsIcon = styled(ProjectsIcon)`
  height: 7.5vh;
  width: auto;
  margin: 0 0 0 1vw;

  ${up("md")} {
    margin: 6vh 0 3vh 1vw;
  }
`;

const ProjectsHeading = styled.h1`
  font-size: 3em;
  font-weight: bold;

  ${up("md")} {
    margin: 0 0 7vh 0;
  }
`;

const Projects = ({ nextSection }) => {
  return (
    <ThemeProvider theme={breakpoints}>
    <ProjectsContainer data-testid="projects-banner" id="projects-banner">
      <FilterLayer>
        <StyledProjectsIcon />
        <ProjectsHeading>Projects</ProjectsHeading>
      </FilterLayer>
      <SectionArrowDown nextSectionId={nextSection} color="#000000" />
    </ProjectsContainer>
    </ThemeProvider>
  );
};

Projects.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Projects;
