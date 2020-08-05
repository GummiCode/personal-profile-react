import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { FaGithub, FaAt } from "react-icons/fa";

import FullWidthContainer from './FullWidthContainer';
import NavLinkRenderer from "./NavLinkRenderer";

const NavBarContainer = styled(FullWidthContainer)`
  position: fixed;
  top: 0px;
  height: 60px;
  color: white;
  background: black;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  `;

const SideSection = styled.div`
  height: 100%;
  padding: 0 30px 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`

const NavList = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`

const NavItem = styled(scrollLink)`
    margin: 0 0 0 40px;
    display: flex;
    flex-flow: row nowrap;
    
    &:hover {
      color: #FFD2AE;
      transition: 0.2s;
    }
`;

const LinkContainer = styled.a`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  margin: 0 0 0 .5vw;
`;

const GithubIcon = styled(FaGithub)`
    fill: #FFFFFF;
    width: 100%;
    height: 100%;

  &:hover {
    fill: #C9512F;
    transition: 0.5s;
  }
`;

const EmailIcon = styled(FaAt)`
    fill: #FFFFFF;
    width: 100%;
    height: 100%;

  &:hover {
    fill: #C9512F;
    transition: 0.5s;
  }
`;

const NavBar = ({ projectData }) => {
  return (
    <NavBarContainer
      data-testid="nav-bar"
    >
      <SideSection>
        <NavList>
          <NavItem
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            Home
          </NavItem>

          <NavItem
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </NavItem>

          <NavItem
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Experience/Technologies
          </NavItem>

          <NavLinkRenderer
            projectData={projectData}
          />

        </NavList>
        </SideSection>

        <SideSection>
          <LinkContainer
            data-testid="nav-github-link"
            href="https://github.com/gummicode" 
            target="_blank" 
            rel="noopener noreferrer"
          >       
            <GithubIcon />
          </LinkContainer>

          <LinkContainer
            data-testid="nav-email-link"
            href="mailto:gummicodeblog@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >       
            <EmailIcon />
          </LinkContainer>
        </SideSection>

    </NavBarContainer>
  )
};

export default NavBar;