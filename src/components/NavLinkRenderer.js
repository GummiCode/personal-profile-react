import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";

const ProjectLinksContainer = styled.div`
  height: 100%;
  width: auto;
  margin: 0 0 0 3vw;
  padding: 0;
  background-color: #000000;
  clip-path: polygon(7px 0, 100% 0, calc(100% - 7px) 100%, 0 100%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`;

const ProjectAnnouncement = styled.span`
  height: 100%;
  width: auto;
  margin: 0;
  padding: 0 2vw;
  background-color: #DAD9DE;
  clip-path: polygon(7px 0, 100% 0, calc(100% - 7px) 100%, 0 100%);
  font-size: 1.1em;
  font-style: italic;
  font-weight: bold;
  color: #000000;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`;

const NavLink = styled(scrollLink)`
  height: 100%;
  width: auto;
  padding: 0 2vw;
  background-color: ${props => props.linkBackground};
  color: ${props => props.linkText};
  clip-path: polygon(7px 0, 100% 0, calc(100% - 7px) 100%, 0 100%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;


const NavLinkRenderer = ({ projectData }) => {

  return (
    <ProjectLinksContainer>
        <ProjectAnnouncement>PROJECTS:</ProjectAnnouncement>
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