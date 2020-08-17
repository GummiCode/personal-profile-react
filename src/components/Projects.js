import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import ProjectRenderer from "./project-renderer/ProjectRenderer";

const ProjectsContainer = styled.div`
  height: fit-content;
  width: 100vw;
  margin: 70px 0 70px 0;
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
  border-radius: 25px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${up("md")} {
    height: fit-content;
    width: fit-content;
    padding: 30px 10px 30px 10px;
    background: #e1e8ec;
  }
`;

const StyledProjectsIcon = styled(ProjectsIcon)`
  height: 60px;
  width: 60px;
  border-radius: 5px;
`;

const ProjectsHeading = styled.h1`
  font-size: 2em;
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

const Projects = () => {
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
export default Projects;
