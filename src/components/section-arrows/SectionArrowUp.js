import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { Link as scrollLink } from "react-scroll";
import { IconContext } from "react-icons";
import { FaCaretUp } from "react-icons/fa";

import breakpoints from "../../styles/breakpoints";

const SectionArrowContainer = styled(scrollLink)`
  bottom: 1vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 4vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;

  ${up("md")} {
    display: none;
  }
`;

const SectionArrowUp = () => {
  return (
    <ThemeProvider theme={breakpoints}>
    <SectionArrowContainer
      activeClass="active"
      to="header"
      spy
      smooth
      offset={-60}
      duration={500}
    >
      <IconContext.Provider
        value={{
          color: "#000000",
          size: "4em",
        }}
      >
        <FaCaretUp />
      </IconContext.Provider>
    </SectionArrowContainer>
    </ThemeProvider>
  );
};

export default SectionArrowUp;
