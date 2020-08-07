import React from "react";
import { Link as scrollLink } from "react-scroll";
import { bool } from "prop-types";
import styled from "styled-components";
import ProjectsBurgerMenu from "./ProjectsBurgerMenu";

const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 60vh;
  width: 45vw;
  padding: 0 0 0 5vw;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: pointer;
  transform: ${({ open }) => (open ? "translateY(10vh)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
`;

const MenuLink = styled(scrollLink)`
  padding: 4vh 0;
  font-size: 0.92em;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: #ffd2ae;
    transition: 0.2s;
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
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
      <ProjectsBurgerMenu />
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

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
