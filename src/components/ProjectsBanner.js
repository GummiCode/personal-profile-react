import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa";
import SectionArrowDown from "./section-arrows/SectionArrowDown";

const ProjectsContainer = styled.div`
  position: relative;
  height: 90vh;
  width: 100vw;
  background: url("./images/textures/concrete.png");
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
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
  margin: 0 1vw 0 2vw;
`;

const ProjectsHeading = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

const ProjectsBanner = ({ nextSection }) => {
  return (
    <ProjectsContainer data-testid="projects-banner" id="projects-banner">
      <FilterLayer>
      <StyledProjectsIcon />
      <ProjectsHeading>Projects</ProjectsHeading>
      </FilterLayer>
      <SectionArrowDown nextSectionId={nextSection} />
    </ProjectsContainer>
  );
};

ProjectsBanner.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default ProjectsBanner;
