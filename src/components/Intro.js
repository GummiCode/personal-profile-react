import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import introText from "../assets/introText";

const IntroContainer = styled.div`
  height: 40vh;
  width: 100vw;
  background: url("./images/textures/intro.jpg");
`;

const FilterLayer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 91, 27, 0.9);
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;

  ${up("md")} {
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  height: fit-content;
  max-height: 70%;
  width: fit-content;
  max-width: 100%;
  margin: 7% 0 0 0;
  padding: 5px 5px;
  background-color: rgba(255, 91, 27, 1);
  border-radius: 8px;
  box-shadow: 3px 3px 3px 3px rgba(8, 0, 6, 0.3);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  ${up("sm")} {
    padding: 0 6vw;
  }

  ${up("smmd")} {
    height: 90%;
    justify-content: center;
  }

  ${up("md")} {
    height: fit-content;
    margin: 0;
    padding: 50px;
  }

`;

const TextBlock = styled.span`
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  font-size: 1.3em;

  ${up("sm")} {
    font-size: 1.5em;
  }

  ${up("smmd")} {
    font-size: 1.7em;
  }

  ${up("md")} {
    font-size: 1.9em;
  }
`;


const Intro = ({ nextSection }) => {
  const introTextRenderer = () => {
    return introText.map((line) => {
      return <TextBlock>{line}</TextBlock>;
    });
  };

  return (
    <ThemeProvider theme={breakpoints}>
      <IntroContainer data-testid="intro">
        <FilterLayer>
        <TextContainer>{introTextRenderer()}</TextContainer>
        </FilterLayer>
        <SectionArrowDown 
          nextSectionId={nextSection}
          color="#000000" />
      </IntroContainer>
    </ThemeProvider>
  );
};

Intro.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Intro;
