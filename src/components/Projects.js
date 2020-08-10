import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import ProjectRenderer from "./project-renderer/ProjectRenderer";
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

const ProjectsCard = styled.div`
  height: fit-content;
  width: fit-content;
  border-radius: 30px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${up("md")} {
    height: fit-content;
    width: fit-content;
    padding: 40px 10px 40px 10px;
    background: whitesmoke;
  }
`;

const StyledProjectsIcon = styled(ProjectsIcon)`
  height: 75px;
  width: 75px;
  border-radius: 5px;

`;

const ProjectsHeading = styled.h1`
  font-size: 2.5em;
  font-weight: normal;
`;

const ProjectsGrid = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;



const Projects = ({ nextSection }) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <ProjectsContainer data-testid="projects" id="projects">
        <ProjectsCard>

          <StyledProjectsIcon />
          <ProjectsHeading>Projects</ProjectsHeading>
          <ProjectsGrid>
            <ProjectRenderer />

          </ProjectsGrid>
          </ProjectsCard>

      </ProjectsContainer>
    </ThemeProvider>
  );
};

Projects.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Projects;
