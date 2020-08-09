import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import ReactMarkdown from "react-markdown";
import { BsPersonBoundingBox as AboutIcon } from "react-icons/bs";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import aboutText from "../assets/aboutText";

const AboutContainer = styled.div`
  position: relative;
  height: 83vh;
  width: 84vw;
  padding: 4.5vh 8vw;
  background-color: rgba(255, 93, 115);
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 10vh;
  font-size: 4em;
  margin: 0 0 2vh 0;
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

const AboutText = styled(ReactMarkdown)`
  width: calc(100% - 2vw);
  margin: 2vh 0 0 2vw;
  font-size: 1em;

  ${up("sm")} {
    font-size: 1.2em;
  }

  ${up("smmd")} {
    font-size: 1.4em;
  }
`;

const About = ({ nextSection }) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <AboutContainer data-testid="about" id="about">
        <TitleContainer>
          <StyledAboutIcon />
        </TitleContainer>
        <AboutText source={aboutText} />
        <SectionArrowDown nextSectionId={nextSection} />
      </AboutContainer>
    </ThemeProvider>
  );
};

About.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default About;
