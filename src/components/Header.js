import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import introText from "../assets/introText";

const HeaderContainer = styled.div`
  height: fit-content;
  width: 100vw;
  margin: 0 0 60px 0;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderCard = styled.div`
  height: fit-content;
  width: 320px;
  max-width: 100vw;
  margin: calc(60px + 30px) 0 60px 0;
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
      return <TextBlock key={line}>{line}</TextBlock>;
    });
  };

  return (
    <HeaderContainer data-testid="header" id="header">
      <HeaderCard>
        <HeaderImage />
        <HeadText>
          <span>Hello! I&apos;m David.</span>
        </HeadText>
        {HeaderTextRenderer()}
      </HeaderCard>

      <SectionArrowDown nextSectionId={nextSection} color="#000000" />
    </HeaderContainer>
  );
};

Header.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Header;
