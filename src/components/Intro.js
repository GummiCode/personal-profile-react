import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import introText from "../assets/introText";

const IntroContainer = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: #ff5b1b;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: start;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vh 5vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
`;

const IntroText = styled(ReactMarkdown)`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 1.3em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Intro = ({ nextSection }) => {
  return (
    <IntroContainer data-testid="intro">
      <TextContainer>
        <IntroText source={introText} />
      </TextContainer>
      <SectionArrowDown nextSectionId={nextSection} />
    </IntroContainer>
  );
};

Intro.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Intro;
