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

const IconContainer = styled.div`
  height: 7.5vh;
  min-height: 7.5vh;
  width: 7.5vh;
  min-width: 7.5vh;
`;

const ContentContainer = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
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
  height: 56vh;
  width: 75vw;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 4px;
  box-shadow: 3px 3px 3px 3px rgba(80, 40, 60, 0.2);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;

  div {
    height: 10vh;
    width: 10vh;
    margin: 0 2vw 2vw 0;
    border-radius: 5vh;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px 2px rgba(80, 40, 60, 0.2);
  }
`;

const ExtLink = styled.a`
  height: 100%;
  width: 100%;
  border-radius: 45%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const Github = styled(FaGithub)`
  height: 8vh;
  width: 8vh;
  border-radius: 4vh;
  fill: #000000;

  ${ExtLink}:active & {
    fill: #fe4a49;
    transition: 0.5s;
  }
`;

const WebApp = styled(FaGlobe)`
  height: 8vh;
  width: 8vh;
  border-radius: 4vh;
  fill: #000000;

  ${ExtLink}:active & {
    fill: #2ab7ca;
    transition: 0.5s;
  }
`;

/*



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
      <ContentContainer>
        <IconContainer>
          <Icon size="7.5vh" color={featureTextColor} />
        </IconContainer>
        <TitleText featureTextColor={featureTextColor}>{title}</TitleText>

        <SummaryText featureTextColor={featureTextColor}>{summary}</SummaryText>
        <ImageContainer image={image}>
          <div>
            <ExtLink href={url} target="_blank" rel="noopener noreferrer">
              <Github />
            </ExtLink>
          </div>
          <div>
            <ExtLink href={gitHub} target="_blank" rel="noopener noreferrer">
              <WebApp />
            </ExtLink>
          </div>
        </ImageContainer>
        <SectionArrowDown nextSectionId={nextSection} />
      </ContentContainer>
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
