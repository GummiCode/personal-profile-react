import React from "react";
import { Link as scrollLink } from "react-scroll";
import { bool } from "prop-types";
import styled from "styled-components";
import ProjectLinks from "./ProjectLinks";

const StyledMenu = styled.nav`
  height: 100vh;
  display: flex;
  padding: 40px 0 0 0;
  flex-direction: column;
  justify-content: start;
  background: rgba(0, 0, 0, 0.9);
  text-align: left;
  position: absolute;
  top: 0;
  left: 20vw;
  cursor: pointer;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;

  span {
    height: 100%;
    padding: 0 30px 0 2rem;
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
      <ProjectLinks />
    </StyledMenu>
  );
};

ProjectsMenu.propTypes = {
  projectsOpen: bool.isRequired,
};

export default ProjectsMenu;
