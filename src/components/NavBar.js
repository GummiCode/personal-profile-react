import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import BurgerMenu from "./burger-menu/BurgerMenu";

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10vh;
  width: 100vw;
  color: #ffffff;
  background: #000000;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
`;

const LinksContainer = styled.div`
  height: 100%;
  padding: 0 5vw 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;

  ${up("md")} {
    padding: 0 50px 0 0;
  }

  a {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
    margin: 0 0 0 8vw;

    ${up("sm")} {
      margin: 0 0 0 33.6px;
    }
  }
`;

const EmailIcon = styled(FaAt)`
  fill: #ffffff;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #ff5b1b;
    transition: 0.5s;
  }
`;

const GithubIcon = styled(FaGithub)`
  fill: #ffffff;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #affc41;
    transition: 0.5s;
  }
`;

const LinkedinIcon = styled(FaLinkedin)`
  fill: #ffffff;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #2ab7ca;
    transition: 0.5s;
  }
`;

const NavBar = () => {
  return (
    <ThemeProvider theme={breakpoints}>
      <NavBarContainer data-testid="nav-bar">
        <BurgerMenu />
        <LinksContainer>
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
        </LinksContainer>
      </NavBarContainer>
    </ThemeProvider>
  );
};

export default NavBar;
