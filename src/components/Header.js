import React from 'react';
import styled from "styled-components";
import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';

const HeaderImageContainer = styled(FullWidthContainer)`
  height: 65vh;
  width: 100vw;
  background-image: url('./images/profile-picture.jpg');
  background-position: -20% 10%;
  background-attachment: fixed;
  background-size: 100% auto;
`;

const HeaderText = styled(HalfWidthContainer)`
  height: 100%;
  width: 60vw;
  flex-flow: column nowrap;
  justify-content: flex-end;
  background: rgba(10, 10, 10, 0.3);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
`;

const HeaderName = styled.h1`
  font-size: 5em;
  color: #FFD9B4;
  margin: 0 0 0 8vw;
`;

const HeaderTitle = styled.h2`
  font-size: 4.2em;
  color: #C9512F;
  margin: 0 0 4vh 8vw;
`;


const Header = () => {
  return (
    <HeaderImageContainer
      data-testid="header"
      id="header"
    >
      <HalfWidthContainer />
      <HeaderText>
        <HeaderName> DAVID ARROWSMITH</HeaderName>
        <HeaderTitle>JUNIOR DEVELOPER</HeaderTitle>
      </HeaderText>
    </HeaderImageContainer>
  )
};

export default Header;


