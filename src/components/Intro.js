import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import HalfWidthContainer from "./HalfWidthContainer";
import SectionArrowDown from "./section-arrows/SectionArrowDown";

const IntroContainer = styled(FullWidthContainer)`
  height: 40vh;
  background-color: #FF5B1B;
`;

const TextContainer = styled(HalfWidthContainer)`
  padding: 2vh 5vw;
  width: 100%;
  height: 100%;
`;

const IntroText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.3em;
`;

const LinksContainer = styled(HalfWidthContainer)`
  padding: 40px 40px 0 0;
  width: calc(50% - 40px);
  height: calc(100% - 40px);
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

const SingleLinkContainer = styled.a`
  height: 15vh;
  width: 15vh;
  border-radius: 50%;
  margin: 0 0 0 0.5vw;
`;

const EmailIcon = styled(FaAt)`
  fill: #000000;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #ffd9b4;
    transition: 0.5s;
  }
`;

const LinkedinIcon = styled(FaLinkedin)`
  fill: #000000;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #ffd9b4;
    transition: 0.5s;
  }
`;

const GithubIcon = styled(FaGithub)`
  fill: #000000;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #ffd9b4;
    transition: 0.5s;
  }
`;

const Intro = ({ nextSection }) => {
  return (
    <IntroContainer data-testid="intro">
      <TextContainer>
        <IntroText>Self-Trained Web Developer.</IntroText>
        <IntroText>Experienced in REACT, Full-Stack</IntroText>
        <IntroText>& Test-Driven Development.</IntroText>
      </TextContainer>

      <SectionArrowDown nextSectionId={nextSection} />
    </IntroContainer>
  );
};

Intro.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Intro;
