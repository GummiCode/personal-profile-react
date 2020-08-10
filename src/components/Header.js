import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import PropTypes from "prop-types";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import introText from "../assets/introText";

const HeaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #FFFFFF;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

const HeaderCard = styled.div`
  height: fit-content;
  width: 360px;
  max-width: calc(360px - 40px);
  margin: calc(60px + 30px) 0 0 0;
  border-radius: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

const HeaderImage = styled.div`
  height: 240px;
  width: 240px;
  margin: 0 0 40px 0;
  border-radius: 120px;
  background-image: url("./images/profile-picture-sq.png");
  background-position: center;
  background-size: cover;
`;

const HeadText = styled.div`
  width: 280px;
  height: fit-content;
  margin: 0;
  padding: 0 0 20px 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;

  span {
  font-size: 1.6em;
  }
`;

const TextBlock = styled.span`
  width: 270px;
  height: fit-content;
  margin: 0;
  padding: 0;
  font-size: 1.2em;

`;

const Header = ({ nextSection }) => {
  const HeaderTextRenderer = () => {
    return introText.map((line) => {
      return <TextBlock>{line}</TextBlock>;
    });
  };

  return (
    <ThemeProvider theme={breakpoints}>
      <HeaderContainer data-testid="header" id="header">
        <HeaderCard>
          <HeaderImage />
          <HeadText><span>Hello! I'm David.</span></HeadText>
          {HeaderTextRenderer()}
        </HeaderCard>
        
      <SectionArrowDown nextSectionId={nextSection} color="#000000" />
      </HeaderContainer>

    </ThemeProvider>
  );
};

Header.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Header;
