import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaGlobe } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import SectionArrow from './SectionArrow';

const ProjectContainer = styled(FullWidthContainer)`
  background-color: ${props => props.backgroundColor};
  `;

const LeftProjectContainer = styled(HalfWidthContainer)`
  position: relative;
  height: 100%;
  width: calc(55% - 40px);
  padding: 0 0 0 40px;
`;

const TitleText = styled.h1`
  font-size: 4em;
  color: ${props => props.featureTextColor};
  padding: 0;
  margin: 40px 0 0 0;
`;

const SummaryText = styled.h2`
  font-size: 2.6em;
  color: ${props => props.featureTextColor};
  padding:0;
  margin: 20px 0 0 0;
`

const SectionText = styled.ul`
  font-size: 2em;
`;

const Item = styled.li`
  margin: 0 0 4vh 0;
`;

const RightProjectContainer = styled.div`
  width: 45%;
  height: 100%;
  background-attachment: fixed;
  background-color: rgba(10, 10, 10, 0.3);
  background-image: url(${props => props.image});
  background-position: top 60px right 0px;
  background-size: contain;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  `;

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
  color: #000000;
`;

const LinkBannerLink = styled.a`
  height: 8vh;
  width: 8vh;
  border-radius: 45%;
`;

const StyledFaGithub = styled(FaGithub)`
${LinkBanner}:hover & {
    fill: #C9512F;
    transition: 0.5s;
  }
`;

const StyledFaGlobe = styled(FaGlobe)`
  ${LinkBanner}:hover & {
    fill: #F6A65D;
    transition: 0.5s;
  }
`;

const ProjectTemplate1 = ({ projectData, projectId, nextSection }) => {

  const {
    title,
    summary,
    aspects,
    gitHub,
    url,
    image,
    featureTextColor,
    backgroundColor
  } = projectData;

  const mapAspects = (aspects) => {
    return (
      aspects.map(aspect => {
        return ( <Item>{aspect}</Item> )
      })
  )};

  return (
    <ProjectContainer
      data-testid={projectId}
      id={projectId}
      backgroundColor={backgroundColor}
    >

      <LeftProjectContainer>

        <TitleText
          featureTextColor={featureTextColor}
        >
          {title}
        </TitleText>
        <SummaryText
          featureTextColor={featureTextColor}
        >
          {summary}
        </SummaryText>
        <SectionText>
          {mapAspects(aspects)}
        </SectionText>

        <LinkBanner>
        <LinkBannerText>
          VIEW PROJECT:
        </LinkBannerText>
        <LinkBannerLink 
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider 
            value={{ 
              color: "#000000", 
              size: "100%"
            }}
          >
            <StyledFaGithub />
          </IconContext.Provider>    
        </LinkBannerLink>
        <LinkBannerLink 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider 
            value={{ 
              color: "#000000", 
              size: "100%"
            }}
          >
            <StyledFaGlobe />
          </IconContext.Provider>
        </LinkBannerLink>
      </LinkBanner>
        
      </LeftProjectContainer>

      <RightProjectContainer
        image={image}
      >
      </RightProjectContainer>

      <SectionArrow 
        nextSectionId={nextSection}
      />
    </ProjectContainer>
  )
};

ProjectTemplate1.propTypes = {
  projectData: PropTypes.object,
  projectId: PropTypes.string,
  nextSection: PropTypes.string
}

export default ProjectTemplate1;
