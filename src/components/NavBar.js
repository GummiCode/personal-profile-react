import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import Burger from "./Burger";
import Menu from "./Menu";
import DropdownMenu from "./DropdownMenu";
import useOnClickOutside from "./hooks";

const NavBarContainer = styled(FullWidthContainer)`
  position: fixed;
  top: 0px;
  height: 10vh;
  color: white;
  background: black;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
`;

const PageLinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: top;
`;

const NavList = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.3em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const NavItem = styled(scrollLink)`
  height: 100%;
  margin: 0 0 0 2vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &:hover {
    color: #ffd2ae;
    transition: 0.2s;
  }
`;

const ExternalLinksContainer = styled.div`
  height: 100%;
  padding: 0 30px 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`;

const LinkContainer = styled.a`
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  margin: 0 0 0 0.5vw;
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
  const [open, setOpen] = useState(false);

  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <NavBarContainer data-testid="nav-bar">
      <PageLinksContainer>
        <NavList>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen}/>
          </div>
          <NavItem
            activeClass="active"
            to="header"
            spy
            smooth
            offset={-60}
            duration={500}
          >
            Home
          </NavItem>

          <NavItem
            activeClass="active"
            to="about"
            spy
            smooth
            offset={-50}
            duration={500}
          >
            About
          </NavItem>

          <NavItem
            activeClass="active"
            to="experience"
            spy
            smooth
            offset={-50}
            duration={500}
          >
            Experience/Technologies
          </NavItem>

          <DropdownMenu />

          <NavItem
            activeClass="active"
            to="contact"
            spy
            smooth
            offset={-50}
            duration={500}
          >
            Contact
          </NavItem>
        </NavList>
      </PageLinksContainer>

      <ExternalLinksContainer>
        <LinkContainer
          data-testid="nav-email-link"
          href="mailto:gummicodeblog@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </LinkContainer>

        <LinkContainer
          data-testid="nav-github-link"
          href="https://github.com/gummicode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </LinkContainer>

        <LinkContainer
          data-testid="nav-linkedin-link"
          href="https://www.linkedin.com/in/david-arrowsmith/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </LinkContainer>
      </ExternalLinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
