import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";

const ProjectLinksContainer = styled.div`
  height: 100%;
  width: auto;
  padding: 0 4vw 0 2vw;
  background-color: #E5B168;
`;

const NavLink = styled(scrollLink)`
  height: 100%;
  width: auto;
  padding: 0 2vw;
  background-color: ${props => props.linkBackground};
  color: ${props => props.linkText};
`;


const NavLinkRenderer = ({ projectData }) => {

  return (
    <ProjectLinksContainer>
      {projectData.map((project, index) => {
        const {
          title,
          featureTextColor,
          backgroundColor
        } = project;

        return (
          <NavLink
            activeClass="active"
            to={`project${index}`}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            linkBackground={backgroundColor}
            linkText={featureTextColor}
          >
            {title}
          </NavLink>
          )
      })}
    </ProjectLinksContainer>
  )
};

export default NavLinkRenderer;