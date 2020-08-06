import React from "react";
import { Link as scrollLink } from "react-scroll";
import { bool } from "prop-types";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 20vw;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;

  span {
    height: 100%;
    padding: 0 30px 0 0;
  }
`;

const MenuLink = styled(scrollLink)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: #ffd2ae;
    transition: 0.2s;
  }
`;

const ProjectsMenu = ({ projectsOpen }) => {
  return (
    <StyledMenu open={projectsOpen}>
      <MenuLink
        activeClass="active"
        to="header"
        spy
        smooth
        offset={-60}
        duration={500}
      >
        Home
      </MenuLink>
      <MenuLink
        activeClass="active"
        to="about"
        spy
        smooth
        offset={-50}
        duration={500}
      >
        About
      </MenuLink>
      <MenuLink
        activeClass="active"
        to="experience"
        spy
        smooth
        offset={-50}
        duration={500}
      >
        Experience
      </MenuLink>
      <MenuLink
        activeClass="active"
        to="projects-banner"
        spy
        smooth
        offset={-50}
        duration={500}
      >
        Projects
      </MenuLink>
      <MenuLink
        activeClass="active"
        to="contact"
        spy
        smooth
        offset={-50}
        duration={500}
      >
        Contact
      </MenuLink>
    </StyledMenu>
  );
};

ProjectsMenu.propTypes = {
  projectsOpen: bool.isRequired,
};

export default ProjectsMenu;
