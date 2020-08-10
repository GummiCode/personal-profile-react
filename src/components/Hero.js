import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import breakpoints from "../styles/breakpoints";

const HeaderImageContainer = styled.div`
  height: calc(60vh - 60px);
  width: 100vw;
  padding: 60px 0 0 0;
  background-image: url("./images/profile-picture.jpg");
  background-position: 0vw 10vh;
  background-attachment: fixed;
  background-size: auto 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  ${up("sm")} {
    background-position: -147px 3vh;
    background-size: auto 90%;
  }
`;

const HeaderText = styled.div`
  height: 18vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  background: rgba(10, 10, 10, 0.3);

  ${up("sm")} {
    height: fit-content;
  }

  h1 {
    font-size: calc(100vw / 13);
    color: #ffffff;
    margin: 4vh 5vw 0 0;

    ${up("md")} {
      font-size: 3.4em;
      margin: 40px 40px 0 0;
    }

  }

  h2 {
    font-size: calc(100vw / 13);
    color: #ffd400;
    margin: 0 5vw 4vh 0;

    ${up("md")} {
      font-size: 3.4em;
      margin: 0 40px 30px 0;
    }

  }
`;

const Hero = () => {
  return (
    <ThemeProvider theme={breakpoints}>
      <HeaderImageContainer data-testid="header" id="header">
        <HeaderText>
          <h1> DAVID ARROWSMITH</h1>
          <h2>JUNIOR DEVELOPER</h2>
        </HeaderText>
      </HeaderImageContainer>
    </ThemeProvider>
  );
};

export default Hero;
