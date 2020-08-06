import React from "react";
import { Link as scrollLink } from "react-scroll";
import { bool } from "prop-types";
import styled from "styled-components";
import ProjectsBurgerMenu from "./ProjectsBurgerMenu";

const StyledMenu = styled.nav`
  height: calc(100vh - 80px);
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: rgba(0, 0, 0, 0.9);
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  transform: ${({ open }) => (open ? "translateY(80px)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;

  span {
    height: 100%;
    padding: 0 0 0 30px;
  }
`;

const MenuLink = styled(scrollLink)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0 2rem 30px;
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
