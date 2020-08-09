import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import ReactMarkdown from "react-markdown";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import introText from "../assets/introText";

const IntroContainer = styled.div`
  height: 36vh;
  width: 100vw;
  padding: 0 0 4vh 0;
  background-color: #ff5b1b;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

const TextContainer = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;

  ${up("sm")} {
    padding: 0 6vw;
  }

  ${up("smmd")} {
    height: 90%;
    justify-content: center;
  }
`;

const IntroText = styled(ReactMarkdown)`
  width: 90%;
  margin: 0;
  padding: 0;
  font-size: 1.3em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  ${up("sm")} {
    font-size: 1.5em;
  }

  ${up("smmd")} {
    font-size: 1.7em;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 3px 3px rgba(80, 40, 60, 0.2);
    border-radius: 6px;
  }

  ${up("md")} {
    font-size: 1.9em;
  }
`;

const Intro = ({ nextSection }) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <IntroContainer data-testid="intro">
        <TextContainer>
          <IntroText source={introText} />
        </TextContainer>
        <SectionArrowDown nextSectionId={nextSection} />
      </IntroContainer>
    </ThemeProvider>
  );
};

Intro.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Intro;
