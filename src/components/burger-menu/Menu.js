import React from "react";
import { Link as scrollLink } from "react-scroll";
import { bool } from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import breakpoints from "../../styles/breakpoints";
import ProjectsBurgerMenu from "./ProjectsBurgerMenu";

const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(60vh - 60px);
  width: 45vw;
  padding: 0 0 0 5vw;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: pointer;
  transform: ${({ open }) => (open ? "translateY(60px)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;

  ${up("sm")} {
    width: 190px;
    padding: 0 0 0 24px;
  }
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
    color: #ffd400;
    transition: 0.2s;
  }
`;

const Menu = ({ open }) => {
  return (
    <ThemeProvider theme={breakpoints}>
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
          to="skills"
          spy
          smooth
          offset={-50}
          duration={500}
        >
          Skills
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
    </ThemeProvider>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
