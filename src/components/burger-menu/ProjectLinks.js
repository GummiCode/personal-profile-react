import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import projectData from "../../assets/projectData";

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
