import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import ProjectRenderer from "./project-renderer/ProjectRenderer";
import desktop from "../assets/images/desktop.png";

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
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${up("md")} {
    height: fit-content;
    width: fit-content;
    padding: 30px 10px 30px 10px;
    background: url(${desktop}) fixed;
    background-size: cover;
  }
`;

const ProjectsHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .25);  
  backdrop-filter: blur(5px);

  ${up("md")} {
    height: 180px;
    width: 200px;
    margin: 10px 0;
    border-radius: 20px;
}

`;

const StyledProjectsIcon = styled(ProjectsIcon)`
  height: 60px;
  width: 60px;
  border-radius: 5px;


  ${up("md")} {
    margin: 20px 0 0 0;
  }
`;

const ProjectsText = styled.h1`
  font-size: 2em;
  font-weight: normal;

  ${up("md")} {
    margin: 0 0 20px 0;
  }
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
          <ProjectsHeader>
            <StyledProjectsIcon />
            <ProjectsText>Projects</ProjectsText>
          </ProjectsHeader>
          <ProjectsGrid>
            <ProjectRenderer />
          </ProjectsGrid>
        </ProjectsCard>
      </ProjectsContainer>
    </ThemeProvider>
  );
};
export default Projects;
