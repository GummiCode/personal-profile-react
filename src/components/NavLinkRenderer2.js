import React, { useState } from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { IconContext } from "react-icons";
import { FaCaretDown } from 'react-icons/fa';
import projectData from "../assets/projectData";

const DropdownContainer = styled.div`
  top: 0;
  height: fit-content;
  width: 15vw;
  margin: 0 0 0 1.5vw;
  background: rgba(0, 0, 100, 1);
  font-size: 1em;
  color: #FFFFFF;
  border: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: left;
`

const DropdownHeader = styled.div`
  height:  60px;
  background: rgba(100, 0, 0, 1);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const DropdownTitle= styled.span`
 margin: 0 2% 0 0;
  color: #FFFFFF;
`;

const Caret = styled(FaCaretDown)`
`;

const DropdownBody = styled.div`
  height: auto%;
  width: 13.5vw;
  background: rgba(0, 150, 0, 1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: left;
`

const Placeholder = styled.span`
  height: auto;
  width: 100%;
  background: rgba(150, 150, 0, 1);
  padding: 1.2vh 0 1.2vh 2vw;
  margin: .75vh 0 0 0;
`

const NavLink = styled(scrollLink)`
  height: auto;
  width: 100%;
  padding: 0 0 0 15%;

  font-size: 1em;
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


const NavLinkRenderer2 = () => {

  
  const [expand, setExpand] = useState (false);

  const handleClickOutside = () => {
    setExpand(false)
  };

  const toggleExpand = () => {
    setExpand(!expand)
  };

  return (
    <DropdownContainer>

      <DropdownHeader>
        <DropdownTitle>
          Projects
        </DropdownTitle>
        <IconContext.Provider 
          value={{ 
            color: "#FFFFFF", 
            size: "1.2em"
          }}
        >
          <Caret />
        </IconContext.Provider>
      </DropdownHeader> 

      <DropdownBody>
        <Placeholder>Link A</Placeholder>
        <Placeholder>Link B</Placeholder>
        <Placeholder>Link C</Placeholder>
        <Placeholder>Link D</Placeholder>
      </DropdownBody>

    </DropdownContainer>
  )
}


export default NavLinkRenderer2;

  /*
  const RenderLinks = (projectData) => {
    return (
      projectData.map((project, index) => {
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
*/