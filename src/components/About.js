import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { BsPersonBoundingBox as AboutIcon } from "react-icons/bs";
import FullWidthContainer from "./FullWidthContainer";
import HalfWidthContainer from "./HalfWidthContainer";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import aboutText from "../assets/aboutText";

const AboutContainer = styled(FullWidthContainer)`
  height: 83vh;
  width: 84vw;
  padding: 4.5vh 8vw;
  position: relative;
  background-color: #ff5d73;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BackgroundImage = styled(HalfWidthContainer)`
  position: absolute;
  right: 0;
  width: 40vw;
  background-image: url("./images/about-picture.jpg");
  background-size: auto 100%;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 7;
`;

const TitleText = styled.h1`
  margin: 0;
  font-size: 2.8em;
`;

const StyledAboutIcon = styled(AboutIcon)`
  height: 0.8em;
  width: auto;
  margin: 0 5vw 0 2vw;
`;

const StyledMD = styled(ReactMarkdown)`
  margin: 0 0 0 2vw;
  font-size: 1em;
`;

const About = ({ nextSection }) => {
  return (
    <AboutContainer data-testid="about" id="about">
      <TitleText>
        <StyledAboutIcon />
        About
      </TitleText>
      <StyledMD source={aboutText} />
      <SectionArrowDown
      nextSectionId={nextSection} />
    </AboutContainer>
  );
};

About.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default About;
