import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { Dropdown } from "react-bootstrap";




const ProjectsDropdown = styled(Dropdown)`
  height: 100%;
  width: 15vw;
  margin: 0 2vw;
  padding: 0 2vw;
  background-color: #000000;
  font-size: 5em;
  color: #FFFFFF;
`;

const DropdownTitle = styled(Dropdown.Toggle)`
  height: 100%;
  width: 100%;
  font-size: 0.24em;
  color: #000000;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`

const Menu = styled(Dropdown.Menu)`
  height: 60px;
  width: 15vw;
`

const Item = styled(Dropdown.Item)`
  height: 60px;
  width: 15vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
`

const NavLink = styled(scrollLink)`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #FFFFFF;
  font-size: 0.24em;
  color: #000000;
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

  return (
    <ProjectsDropdown>
      <DropdownTitle variant="success" id="projectsDropdown">
        Projects [arrow image]
      </DropdownTitle>

      <Menu>

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