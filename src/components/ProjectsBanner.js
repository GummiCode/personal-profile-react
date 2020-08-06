import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaPencilRuler as ProjectsIcon } from "react-icons/fa"
import FullWidthContainer from './FullWidthContainer';
import SectionArrow from './SectionArrow';

const ProjectsContainer = styled(FullWidthContainer)`
  background: #FFFFFF;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const ProjectsHeading = styled.h1`
  color: #000000;
  font-size: 5em;
  font-weight: bold;
`;

const StyledProjectsIcon = styled(ProjectsIcon)`
  height: 7.5vh; 
  width: auto;
  margin: 0 1vw 0 2vw;
`

const ProjectsBanner = ({ nextSection }) => {
  return (
    <ProjectsContainer
      data-testid="projects-banner"
      id="projects-banner"
    >
      <StyledProjectsIcon/>
      <ProjectsHeading>
        Projects
      </ProjectsHeading> 
      <SectionArrow
        nextSectionId={nextSection}
      />
    </ProjectsContainer>
  )
};

ProjectsBanner.propTypes = {
  nextSection: PropTypes.string
}

export default ProjectsBanner;