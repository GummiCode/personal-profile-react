import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaGlobe, FaGithub } from "react-icons/fa";

import Banner from "./Banner";
import FullWidthContainer from "../FullWidthContainer";
import SectionArrowDown from "../section-arrows/SectionArrowDown";

const ProjectContainer = styled(FullWidthContainer)`
  height: 83vh;
  width: 84vw;
  padding: 4.5vh 8vw;
  background-color: ${(props) => props.backgroundColor};
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  color: ${(props) => props.featureTextColor};
  margin: 2vh 0 0 0;
`;

const SummaryText = styled.h2`
  width: 75vw;
  font-size: 1em;
  color: ${(props) => props.featureTextColor};
  margin: 1vh 0 2vh 0;
  text-align: center;
`;

// Insert a banner here composed of two long thin rounded divs and a FA astronaut. Think about how to pass that in! React Font Awesome Props

const ImageContainer = styled.div`
  height: 50vh;
  width: 75vw;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 4px;
  box-shadow: 3px 3px 3px 3px rgba(80, 40, 60, 0.2);
`;

/*

const LinkBanner = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 0 10vh 0;
  height: 10vh;
  width: 30vw;
  border-radius: 5vh;
  background-color: rgba(255, 237, 237, 0.9);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const LinkBannerText = styled.span`
  font-size: 3em;
  font-weight: bold;
  font-style: italic;
`;

const LinkBannerLink = styled.a`
  height: 8vh;
  width: 8vh;
  border-radius: 45%;
`;

const StyledFaGithub = styled(FaGithub)`
  ${LinkBanner}:hover & {
    fill: #c9512f;
    transition: 0.5s;
  }
`;

const StyledFaGlobe = styled(FaGlobe)`
  ${LinkBanner}:hover & {
    fill: #f6a65d;
    transition: 0.5s;
  }
`;

*/

const ProjectTemplate1 = ({ projectData, projectId, nextSection }) => {
  const {
    title,
    summary,
    gitHub,
    url,
    image,
    featureTextColor,
    backgroundColor,
    Icon,
  } = projectData;

  /*
  const mapAspects = () => {
    return aspects.map((aspect) => {
      return <Item key={aspect}>{aspect}</Item>;
    });
  };
*/
  return (
    <ProjectContainer
      data-testid={projectId}
      id={projectId}
      backgroundColor={backgroundColor}
    >
            <Icon 
             size="7.5vh"
             color={featureTextColor}
            />

      <TitleText featureTextColor={featureTextColor}>{title}</TitleText>



      <SummaryText featureTextColor={featureTextColor}>{summary}</SummaryText>
      <ImageContainer image={image} />
      <SectionArrowDown nextSectionId={nextSection} />
    </ProjectContainer>
  );
};

ProjectTemplate1.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    aspects: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    gitHub: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    featureTextColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
  projectId: PropTypes.string.isRequired,
  nextSection: PropTypes.string.isRequired,
};

export default ProjectTemplate1;
