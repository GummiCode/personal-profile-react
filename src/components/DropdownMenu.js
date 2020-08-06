import React from "react";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { IconContext } from "react-icons";
import { FaCaretDown } from "react-icons/fa";
import projectData from "../assets/projectData";

const DropdownContainer = styled.div`
  height: fit-content;
  width: 110px;
  margin: 0 0 0 2vw;
  background: none;
  font-size: 1em;
  color: #ffffff;
  border: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: left;
`;

const DropdownTitle = styled.span`
  color: #ffffff;
`;

const Caret = styled(FaCaretDown)`
  margin: 0 0 0 5px;
`;

const DropdownHeader = styled.button`
  height: 60px;
  width: fit-content;
  border: none;
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 1em;
  background: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:hover ${DropdownTitle} {
    color: #ffd2ae;
    transition: 0.2s;
  }

  &:hover ${Caret} {
    fill: #ffd2ae;
    transition: 0.2s;
  }
  &:focus {
    outline: none;
  }
`;

const DropdownBody = styled.div`
  background: none;
  display: none;

  ${DropdownContainer}:hover & {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: left;
  }
`;

const DropdownLink = styled(scrollLink)`
  height: auto;
  width: 16vw;
  padding: 0 0 0 2vw;
  background: rgba(0, 0, 0, 0.9);
  clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);
  padding: 1.2vh 0 1.2vh 2vw;
  margin: 0.75vh 0 0 0;

  &:hover {
    color: #ffd2ae;
    transition: 0.2s;
  }
`;

const DropdownMenu = () => {
  const RenderLinks = () => {
    return projectData.map((project, index) => {
      const { title, key } = project;

      return (
        <DropdownLink
          key={`${key}-navlink`}
          activeClass="active"
          to={`project${index}`}
          spy
          smooth
          offset={-50}
          duration={500}
        >
          {title}
        </DropdownLink>
      );
    });
  };

  return (
    <DropdownContainer>
      <DropdownHeader>
        <DropdownTitle>Projects</DropdownTitle>
        <IconContext.Provider
          value={{
            color: "#FFFFFF",
            size: "1.4em",
          }}
        >
          <Caret />
        </IconContext.Provider>
      </DropdownHeader>

      <DropdownBody>{RenderLinks(projectData)}</DropdownBody>
    </DropdownContainer>
  );
};

export default DropdownMenu;
