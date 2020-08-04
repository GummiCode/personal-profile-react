import React from "react";
import styled from 'styled-components';
import { Link as scrollLink } from "react-scroll";
import { IconContext } from "react-icons";
import { FaCaretDown } from 'react-icons/fa';

const SectionArrowContainer = styled(scrollLink)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;
  width: 4vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`

const SectionArrow = ({ nextSectionId }) => {
  return (
    <SectionArrowContainer
      activeClass="active"
      to={nextSectionId}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <IconContext.Provider 
        value={{ 
          color: "#000000", 
          size: "5em"
        }}
      >
        <FaCaretDown />
      </IconContext.Provider>
    </SectionArrowContainer>
  )
}

export default SectionArrow;