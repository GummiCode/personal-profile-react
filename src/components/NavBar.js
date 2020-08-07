import React from "react";
import styled from "styled-components";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import BurgerMenu from "./burger-menu/BurgerMenu";

const NavBarContainer = styled(FullWidthContainer)`
  position: fixed;
  top: 0;
  left: 0;
  height: 10vh;
  color: #ffffff;
  background: #000000;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
`;

const ExternalLinksContainer = styled.div`
  height: 100%;
  padding: 0 5vw 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;

  a {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
    margin: 0 0 0 8vw;
  }
`;

const EmailIcon = styled(FaAt)`
  fill: #ffffff;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #c9512f;
    transition: 0.5s;
  }
`;

const GithubIcon = styled(FaGithub)`
  fill: #ffffff;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #c9512f;
    transition: 0.5s;
  }
`;

const LinkedinIcon = styled(FaLinkedin)`
  fill: #ffffff;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #c9512f;
    transition: 0.5s;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer data-testid="nav-bar">
      <BurgerMenu />

      <ExternalLinksContainer>
        <a
          data-testid="nav-email-link"
          href="mailto:gummicodeblog@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>

        <a
          data-testid="nav-github-link"
          href="https://github.com/gummicode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>

        <a
          data-testid="nav-linkedin-link"
          href="https://www.linkedin.com/in/david-arrowsmith/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </ExternalLinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
