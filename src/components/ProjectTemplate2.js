import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaGlobe } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";

import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import SectionArrow from './SectionArrow';

const ProjectContainer = styled(FullWidthContainer)`
  background-color: #EBB19F;
  `;

const RightProjectContainer = styled(HalfWidthContainer)`
  height: 75%;
  width: calc(50% - 40px);
  padding: 0 40px 0 0;
`;

const TitleText = styled.h1`
  font-size: 5em;
  color: #171226;
  padding: 0;
  margin: 30px 0 0 0;
`;

const SummaryText = styled.h2`
  font-size: 3em;
  color: #171226;
  padding:0;
  margin: 20px 0 0 0;
`

const SectionText = styled.ul`
  font-size: 2em;
`;

const Item = styled.li`
  margin: 0 0 4vh 0;
`;

const LeftProjectContainer = styled.div`
  width: 45%;
  height: 100%;
  background-attachment: fixed;
  background-color: rgba(10, 10, 10, 0.3);
  background-image: url(${props => props.image});
  background-position: top 60px left 0px;
  background-size: contain;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-items: center;
  `;

const LowBanner= styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 25vh;
  width: calc(100vw - 40px);
  padding: 0 0 0 40px;
  background-color: rgba(10, 10, 10, 0.3);
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`;

const LinkBanner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 40px 0 70px 60px;
  height: 12vh;
  width: calc(37vw);
  border-radius: 6vh;
  background-color: rgba(255, 237, 237, 0.9);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const LinkBannerText = styled.span`
  font-size: 3.6em;
  font-weight: bold;
  font-style: italic;
  color: #000000;
`;

const LinkBannerLink = styled.a`
  height: 10vh;
  width: 10vh;
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
    image
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
    >

      <LeftProjectContainer
        image={image}
      >

      </LeftProjectContainer>

      <RightProjectContainer>
        <TitleText>{title}</TitleText>
        <SummaryText>{summary}</SummaryText>
        <SectionText>
          {mapAspects(aspects)}
        </SectionText>
        
      </RightProjectContainer>

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

      <SectionArrow 
        nextSectionId={nextSection}
      />
    </ProjectContainer>
  )
};

export default ProjectTemplate1;
