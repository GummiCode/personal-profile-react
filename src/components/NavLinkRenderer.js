import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { Dropdown } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaCaretDown } from 'react-icons/fa';
import projectData from "../assets/projectData";

const ProjectsDropdown = styled(Dropdown)`
  height: 100%;
  width: auto;
  margin: 0 0 0 1.5vw;
  background: rgba(0, 0, 0, 0);
  font-size: 5em;
  color: #FFFFFF;
  border: none;
`;

const Caret = styled(FaCaretDown)`
`;

const Title = styled.span`
  margin: 0 10% 0 0;
`;

const DropdownTitle = styled(Dropdown.Toggle)`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
  font-size: 0.20em;
  color: #FFFFFF;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;

  &:hover {
      color: #FFD2AE;
      transition: 0.2s;

    };

  &:hover ${Caret} {
      fill: #FFD2AE;
  };

  &:focus {
    outline: none;
  };
`

const Menu = styled(Dropdown.Menu)`
  height: 60px;
  width: 15vw;
  background: rgba(0, 0, 0, 0);
`

const NavLink = styled(scrollLink)`
  height: 90%;
  width: 75%;
  padding: 0 0 0 15%;
  margin: 0.25vh 0;
  font-size: 0.20em;
  color: #FFFFFF;
  background: rgba(0, 0, 0, 0.9);
  clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:hover{    
    background-color: ${props => props.linkbackground};
    color: ${props => props.linktext};
    transition: 0.2s;
  }
`;

const NavLinkRenderer = () => {

  return (
    <ProjectsDropdown>
      <DropdownTitle
        id="projectsDropdown"
      >
        <Title>Projects</Title> 
        <IconContext.Provider 
        value={{ 
          color: "#FFFFFF", 
          size: "1.2em"
        }}
        >
          <Caret />
        </IconContext.Provider>
      </DropdownTitle>

      <Menu
        rootCloseEvent="mousedown"
      >

        {projectData.map((project, index) => {
          const {
            title,
            key,
            featureTextColor,
            backgroundColor
          } = project;

          return (
            <Dropdown.Item
              key={`${key}-navlink`}
            >
              <NavLink
                activeClass="active"
                to={`project${index}`}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                linkbackground={backgroundColor}
                linktext={featureTextColor}
                style={{textDecoration: "none !important",}}
              >
                {title}
              </NavLink>
            </Dropdown.Item>
            )
        })}
      </Menu>
    </ProjectsDropdown>
  )
};

export default NavLinkRenderer;