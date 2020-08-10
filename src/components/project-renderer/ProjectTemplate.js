import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaGlobe, FaGithub } from "react-icons/fa";
import breakpoints from "../../styles/breakpoints";
import SectionArrowDown from "../section-arrows/SectionArrowDown";

const ProjectContainer = styled.div`
  height: calc(100vh - 60px);
  max-height: 740px;
  width: 100vw;
  max-width: 420px;
  margin: 0 0 30px 0;
  border-radius: 20px;
  background: ${(props) => props.background};

  ${up("md")} {
    margin: 30px;
  }
`;

const FilterLayer = styled.div`
  height: calc(100vh - 60px - 40px);
  max-height: 700px;
  width: calc(100vw - 40px);
  max-width: calc(420px - 40px);
  padding: 20px;
  border-radius: 20px;
  background: ${(props) => props.filter};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
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
  font-size: 1.5em;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  margin: 14px 0 0 0;

  ${up("sm")} {
    font-size: 1.8em;
  }
`;

const SummaryText = styled.span`
  height: 70px;
  width: 100%;
  font-size: 1.3em;
  color: ${(props) => props.textColor};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  text-align: center;

  ${up("sm")} {
    font-size: 1.4em;
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
    height: 74px;
    width: 74px;
    margin: 0 10px 10px 0;
    border-radius: 36px;
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
  border-radius: 50px;
  fill: #000000;

  &:hover {
    fill: #fe4a49;
    transition: 0.5s;
  }
`;

const WebApp = styled(FaGlobe)`
  height: 80%;
  width: 80%;
  border-radius: 50px;
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
            <Icon size="100px" color={textColor} />

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
