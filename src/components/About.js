import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { BsPersonBoundingBox as AboutIcon } from "react-icons/bs";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import aboutText from "../assets/aboutText";

const AboutContainer = styled.div`
  position: relative;
  height: 90vh;
  width:100vw;
  background: url("./images/textures/about.png");
  background-size: auto 100%;
  background-position: -50vw 0;
`;

const FilterLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 93, 115, 0.95);
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 10vh;
  font-size: 4em;
  margin: 7vh 0 2vh 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledAboutIcon = styled(AboutIcon)`
  height: 10vh;
  min-height: 0.8em;
  max-height: 3em;
  width: auto;
`;

const TextContainer = styled.div`
  width: calc(100% - 14vw);
  margin: 2vh 7vw 0 7vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

`;

const TextBlock = styled.span`
  width: fit-content;
  height: fit-content;
  margin: 0 0 8px 0;
  font-size: 1em;

  ${up("sm")} {
    font-size: 1.2em;
  }

  ${up("smmd")} {
    font-size: 1.4em;
  }
`

const About = ({ nextSection }) => {

  const aboutTextRender = () => {
    return aboutText.map((line) => {
      return <TextBlock>{line}</TextBlock>;
    });
  };

  return (
    <ThemeProvider theme={breakpoints}>
      <AboutContainer data-testid="about" id="about">
        <FilterLayer>
        <TitleContainer>
          <StyledAboutIcon />
        </TitleContainer>
        <TextContainer>
          {aboutTextRender()}
        </TextContainer>
        <SectionArrowDown nextSectionId={nextSection} color="#000000" />
        </FilterLayer>
      </AboutContainer>
    </ThemeProvider>
  );
};

About.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default About;
