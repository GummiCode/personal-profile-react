import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import projectData from "../../assets/projectData";

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

const ProjectLinks = () => {
  return projectData.map((project, index) => {
    const { title, key } = project;

    return (
      <MenuLink
        key={`${key}-navlink`}
        activeClass="active"
        to={`project${index}`}
        spy
        smooth
        offset={-50}
        duration={500}
      >
        {title}
      </MenuLink>
    );
  });
};

export default ProjectLinks;
