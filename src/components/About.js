import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import aboutText from "../assets/aboutText";

const AboutContainer = styled.div`
  height: fit-content;
  width: 100vw;
  margin: 0 0 40px 0;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const AboutCard = styled.div`
  height: fit-content;
  width: 360px;
  max-width: calc(100vw - 40px);
  margin: 30px 20px 60px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const AboutImage = styled.div`
  height: 180px;
  width: 180px;
  margin: 0 0 40px 0;
  background-image: url("./images/about-picture-sq.png");
  background-position: center;
  background-size: cover;
`;

const TextContainer = styled.div`
  width: 100%;
  font-size: 1.1em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TextBlock = styled.span`
  width: 100%;
  height: fit-content;
  margin: 0 0 8px 0;
`;

const About = ({ nextSection }) => {
  const aboutTextRender = () => {
    return aboutText.map((line) => {
      return <TextBlock key={line}>{line}</TextBlock>;
    });
  };

  return (
    <AboutContainer data-testid="about" id="about">
      <AboutCard>
        <AboutImage />
        <TextContainer>{aboutTextRender()}</TextContainer>
      </AboutCard>
      <SectionArrowDown nextSectionId={nextSection} color="#000000" />
    </AboutContainer>
  );
};

About.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default About;
