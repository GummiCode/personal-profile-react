import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Hero from "./Hero";
import Intro from "./Intro";

const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const Header = ({ nextSection }) => {
  return (
    <HeaderContainer>
      <Hero />
      <Intro nextSection={nextSection} />
    </HeaderContainer>
  );
};

Header.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Header;
