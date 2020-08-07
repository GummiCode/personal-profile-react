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
  background-color: rgba(255, 93, 115);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;


const StyledAboutIcon = styled(AboutIcon)`
  height: 0.8em;
  width: auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 10vh;
  font-size: 4em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledMD = styled(ReactMarkdown)`
  margin: 0 0 0 2vw;
  font-size: 1em;
`;

const About = ({ nextSection }) => {
  return (
    <AboutContainer data-testid="about" id="about">
      <TitleContainer>
        <StyledAboutIcon />
      </TitleContainer>
      <StyledMD source={aboutText} />
      <SectionArrowDown nextSectionId={nextSection} />
    </AboutContainer>
  );
};

About.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default About;
