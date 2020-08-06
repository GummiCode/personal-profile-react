import React from "react";
import { bool } from "prop-types";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000000;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: #FFFFFF;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
    color: #ffd2ae;
    transition: 0.2s;
  }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about">
        [icon]
        </span>
        About
      </a>
      <a href="/">
        <span role="img" aria-label="experience">
        [icon]
        </span>
        Experience
      </a>
      <a href="/">
        <span role="img" aria-label="projects">
        [icon]
        </span>
        Projects
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          [icon]
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
