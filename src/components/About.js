import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { BsPersonBoundingBox as AboutIcon } from "react-icons/bs";
import FullWidthContainer from "./FullWidthContainer";
import HalfWidthContainer from "./HalfWidthContainer";
import SectionArrow from "./SectionArrow";
import aboutText from "../assets/aboutText";

const AboutContainer = styled(FullWidthContainer)`
  background-color: #e5b168;
`;

const LeftAboutContainer = styled(HalfWidthContainer)`
  width: calc(50% - 40px);
  padding: 0 0 0 40px;
`;

const RightSideImage = styled(HalfWidthContainer)`
  position: absolute;
  right: 0;
  width: 40vw;
  background-image: url("./images/about-picture.jpg");
  background-size: auto 100%;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 7;
`;

const RightSideScreen = styled(HalfWidthContainer)`
  position: absolute;
  right: 0;
  width: 40vw;
  background: rgba(10, 10, 10, 0.3);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 8;
`;

const TitleText = styled.h1`
  font-size: 4em;
  color: #000000;
  margin: 50px 0 0 0;
`;

const StyledAboutIcon = styled(AboutIcon)`
  height: 0.8em;
  width: auto;
  margin: 0 1vw 0 2vw;
`;

const StyledMD = styled(ReactMarkdown)`
  margin: 0 0 0 40px;
  font-size: 2em;
`;

const About = ({ nextSection }) => {
  return (
    <AboutContainer data-testid="about" id="about">
      <LeftAboutContainer>
        <TitleText>
          <StyledAboutIcon />
          About
        </TitleText>
        <StyledMD source={aboutText} />
      </LeftAboutContainer>
      <RightSideImage />
      <RightSideScreen />
      <SectionArrow nextSectionId={nextSection} />
    </AboutContainer>
  );
};

About.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default About;
