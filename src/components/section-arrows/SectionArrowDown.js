import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { IconContext } from "react-icons";
import { FaCaretDown } from "react-icons/fa";

const SectionArrowContainer = styled(scrollLink)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 4vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

const SectionArrowDown = ({ nextSectionId }) => {
  return (
    <SectionArrowContainer
      activeClass="active"
      to={nextSectionId}
      spy
      smooth
      offset={-50}
      duration={500}
    >
      <IconContext.Provider
        value={{
          color: "#000000",
          size: "4em",
        }}
      >
        <FaCaretDown />
      </IconContext.Provider>
    </SectionArrowContainer>
  );
};

SectionArrowDown.propTypes = {
  nextSectionId: PropTypes.string.isRequired,
};

export default SectionArrowDown;
