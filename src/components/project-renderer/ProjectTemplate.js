import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaGlobe, FaGithub } from "react-icons/fa";
import breakpoints from "../../styles/breakpoints";
import SectionArrowDown from "../section-arrows/SectionArrowDown";

const ProjectContainer = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  width: 100vw;
  border-radius: 30px;
  background: ${(props) => props.background};
`;

const FilterLayer = styled.div`
  height: calc(100vh - 60px - 9vh);
  width: 84vw;
  padding: 4.5vh 8vw;
  border-radius: 30px;
  background: ${(props) => props.filter};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const ContentContainer = styled.div`
  height: 77vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const IconContainer = styled.div`
  height: fit-content;
  min-height: 7.5vh;
  width: fit-content;
  min-width: 7.5vh;
`;

const TitleText = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  margin: 2vh 0 0 0;

  ${up("sm")} {
    font-size: 1.8em;
  }
`;

const SummaryText = styled.span`
  width: 75vw;
  font-size: 1em;
  color: ${(props) => props.textColor};
  margin: 1vh 0 3vh 0;
  text-align: center;

  ${up("sm")} {
    font-size: 1.4em;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 75vw;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 8px;
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

    ${up("md")} {
      height: 75px;
      min-height: 75px;
      width: 75px;
      min-width: 75px;
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
  border-radius: 4vh;
  fill: #000000;

  &:hover {
    fill: #fe4a49;
    transition: 0.5s;
  }
`;

const WebApp = styled(FaGlobe)`
  height: 80%;
  width: 80%;
  border-radius: 4vh;
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
    filter,
    Icon,
  } = projectData;

  return (
    <ThemeProvider theme={breakpoints}>
      <ProjectContainer
        data-testid={projectId}
        id={projectId}
        background={background}
      >
        <FilterLayer filter={filter}>
          <ContentContainer>
            <IconContainer>
              <Icon size="7.5vh" color={textColor} />
            </IconContainer>
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
        </FilterLayer>
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
    filter: PropTypes.string.isRequired,
  }).isRequired,
  projectId: PropTypes.string.isRequired,
  nextSection: PropTypes.string.isRequired,
};

export default ProjectTemplate;
