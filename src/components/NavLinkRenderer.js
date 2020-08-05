import React, { useState } from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { Dropdown, DropdownButton } from "react-bootstrap";




const ProjectsDropdown = styled(Dropdown)`
  height: 100%;
  width: 15vw;
  margin: 0 2vw;
  padding: 0 2vw;
  background: rgba(0, 0, 0, 0);
  font-size: 5em;
  color: #FFFFFF;
`;

const DropdownTitle = styled(Dropdown.Toggle)`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
  font-size: 0.24em;
  color: #FFFFFF;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`

const Menu = styled(Dropdown.Menu)`
  height: 60px;
  width: 15vw;
  background: rgba(0, 0, 0, 0);
`

const Item = styled(Dropdown.Item)`

  height: 55px;
  width: 14.5vw;
  margin: 0.2vh 0 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
`

const NavLink = styled(scrollLink)`
  height: 90%;
  width: 90%;
  padding: 0;
  margin: 0.25vh 0;
  font-size: 0.24em;
  color: #000000;
  background: #FFFFFF;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &:hover{    
    background-color: ${props => props.linkBackground};
    color: ${props => props.linkText};
    transition: 0.2s;
  }
`;

const NavLinkRenderer = ({ projectData }) => {

  const [open, setOpen] = useState(false);

  return (
    <ProjectsDropdown>
      <DropdownTitle
        id="projectsDropdown"
      >
        Projects [arrow image]
      </DropdownTitle>

      <Menu
        rootCloseEvent="mousedown"
      >

        {projectData.map((project, index) => {
          const {
            title,
            featureTextColor,
            backgroundColor
          } = project;

          return (
            <Dropdown.Item>
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
            </Dropdown.Item>
            )
        })}
      </Menu>
    </ProjectsDropdown>
  )
};

export default NavLinkRenderer;