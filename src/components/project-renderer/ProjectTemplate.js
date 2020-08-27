import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaGlobe, FaGithub } from "react-icons/fa";
import breakpoints from "../../styles/breakpoints";
import SectionArrowDown from "../section-arrows/SectionArrowDown";

const ProjectContainer = styled.div`
  height: calc(100vh - 80px);
  max-height: 740px;
  width: calc(100vw - 30px);
  max-width: 420px;
  margin: 10px 10px 30px 10px;
  padding: 15px 0 0 0;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, .25);  
  backdrop-filter: blur(5px);

  ${up("md")} {
    margin: 25px;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const TitleText = styled.h1`
  height: fit-content;
  width: fit-content;
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  margin: 12px 0 0 0;

  ${up("sm")} {
    font-size: 1.5em;
  }
`;

const SummaryText = styled.span`
  height: 60px;
  width: 100%;
  font-size: 1.1em;
  color: ${(props) => props.textColor};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  text-align: center;

  ${up("sm")} {
    font-size: 1.2em;
  }
`;

const ImageContainer = styled.div`
  height: 58%;
  width: 85%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 3px 3px 3px 3px rgba(80, 40, 60, 0.2);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;

  div {
    height: 60px;
    width: 60px;
    margin: 0 8px 8px 0;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px 2px rgba(80, 40, 60, 0.2);

    ${up("md")} {
      height: 60px;
      min-height: 60px;
      width: 60px;
      min-width: 60px;
    }
  }
`;

const ExtLink = styled.a`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const Github = styled(FaGithub)`
  height: 80%;
  width: 80%;
  border-radius: 40px;
  fill: #000000;

  &:hover {
    fill: #fe4a49;
    transition: 0.5s;
  }
`;

const WebApp = styled(FaGlobe)`
  height: 80%;
  width: 80%;
  border-radius: 40px;
  fill: #000000;

  &:hover {
    fill: #2ab7ca;
    transition: 0.5s;
  }
`;

const ProjectTemplate = ({ projectData, projectId, nextSection }) => {
  const {
    title,
    summary,
    gitHub,
    url,
    image,
    textColor,
    background,
    Icon,
  } = projectData;

  return (
    <ThemeProvider theme={breakpoints}>
      <ProjectContainer
        data-testid={projectId}
        id={projectId}
        background={background}
      >
          <ContentContainer>
            <Icon size="75px" color={textColor} />

            <TitleText textColor={textColor}>{title}</TitleText>

            <SummaryText textColor={textColor}>{summary}</SummaryText>
            <ImageContainer image={image}>
              <div>
                <ExtLink
                  href={gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </ExtLink>
              </div>
              <div>
                <ExtLink href={url} target="_blank" rel="noopener noreferrer">
                  <WebApp />
                </ExtLink>
              </div>
            </ImageContainer>
            <SectionArrowDown nextSectionId={nextSection} color={textColor} />
          </ContentContainer>
      </ProjectContainer>
    </ThemeProvider>
  );
};

ProjectTemplate.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    aspects: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    gitHub: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
    textColor: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
  projectId: PropTypes.string.isRequired,
  nextSection: PropTypes.string.isRequired,
};

export default ProjectTemplate;
