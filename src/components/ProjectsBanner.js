import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import SectionArrowUp from "./section-arrows/SectionArrowUp";
import SectionArrowDown from "./section-arrows/SectionArrowDown";

const ProjectsContainer = styled(FullWidthContainer)`
  background: #ffffff;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const ProjectsHeading = styled.h1`
  font-size: 5em;
  font-weight: bold;
`;

const StyledProjectsIcon = styled(ProjectsIcon)`
  height: 7.5vh;
  width: auto;
  margin: 0 1vw 0 2vw;
`;

const ProjectsBanner = ({ lastSection, nextSection }) => {
  return (
    <ProjectsContainer data-testid="projects-banner" id="projects-banner">
      <StyledProjectsIcon />
      <ProjectsHeading>Projects</ProjectsHeading>
      <SectionArrowUp lastSectionId={lastSection} />
      <SectionArrowDown nextSectionId={nextSection} />
    </ProjectsContainer>
  );
};

ProjectsBanner.propTypes = {
  lastSection: PropTypes.string.isRequired,
  nextSection: PropTypes.string.isRequired,
};

export default ProjectsBanner;
