import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { BsPersonBoundingBox as AboutIcon } from "react-icons/bs";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import aboutText from "../assets/aboutText";

const AboutContainer = styled.div`
  height: fit-content;
  width: 100vw;
  margin: 0 0 40px 0;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;;
  justify-content: flex-start;
  align-items: center;
`;

const AboutCard = styled.div`
  height: fit-content;
  width: 360px;
  max-width: 100vw;
  margin: 30px 0 60px 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const StyledAboutIcon = styled(AboutIcon)`
  height: 80px;
  width: 80px;
  margin: 0 0 40px 0;
  border-radius: 5px;
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
      return <TextBlock>{line}</TextBlock>;
    });
  };

  return (
    <ThemeProvider theme={breakpoints}>
      <AboutContainer data-testid="about" id="about">
        <AboutCard>
            <StyledAboutIcon />
          <TextContainer>{aboutTextRender()}</TextContainer>
          </AboutCard>
          
          <SectionArrowDown nextSectionId={nextSection} color="#000000" />
      </AboutContainer>
    </ThemeProvider>
  );
};

About.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default About;
