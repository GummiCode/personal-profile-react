import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;
`;

const BannerLine = styled.div`
  height: .4vh;
  width: 20vw;
  margin: 0 5vw;
  border-radius: 1vh;
  background: ${(props) => props.color};
`;

const BannerImageContainer = styled.div`
  height: 5vh;
  width: 5vh;
  fill: ${(props) => props.color};
`;

const Banner = ({ color, Icon }) => {
  return (
    <BannerContainer>
      <BannerLine color={color} />
      <BannerImageContainer color={color}>
        <Icon size="5vh"/>
      </BannerImageContainer>
      <BannerLine color={color} />
    </BannerContainer>
  );
};

export default Banner;