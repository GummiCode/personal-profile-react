import React from "react";
import styled from "styled-components";
import FullWidthContainer from "./FullWidthContainer";
import HalfWidthContainer from "./HalfWidthContainer";

const HeaderImageContainer = styled(FullWidthContainer)`
  height: 50vh;
  width: 100vw;
  margin: 10vh 0 0 0;
  background-image: url("./images/profile-picture.jpg");
  background-position: -160% 8%;
  background-attachment: fixed;
  background-size: 95% auto;
  flex-flow: column nowrap;
`;

const HeaderText = styled(HalfWidthContainer)`
  height: 40vh;
  width: 100vw;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  background: rgba(10, 10, 10, 0.3);
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
`;

const HeaderName = styled.h1`
  font-size: 1.5em;
  color: #ffffff;
  margin: 0 3vw;
`;

const HeaderTitle = styled.h2`
  font-size: 1.5em;
  color: #FFFFFF;
  margin: 0 3vw 4vh 0;
`;

const Header = () => {
  return (
    <HeaderImageContainer data-testid="header" id="header">
      <HalfWidthContainer />
      <HeaderText>
        <HeaderName> DAVID ARROWSMITH</HeaderName>
        <HeaderTitle>JUNIOR DEVELOPER</HeaderTitle>
      </HeaderText>
    </HeaderImageContainer>
  );
};

export default Header;
