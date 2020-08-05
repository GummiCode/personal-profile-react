import React from "react";
import styled from "styled-components";

import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import HomeArrow from './HomeArrow';

const ContactContainer = styled(FullWidthContainer)`
  background-color: #FFFFFF;
`;

const LeftContactContainer = styled(HalfWidthContainer)`
  width: calc(50% - 40px);
  padding: 0 0 0 40px;
`

const RightContactContainer = styled(HalfWidthContainer)`
  width: calc(50% - 40px);
  padding: 0 40px 0 0;
`

const Contact  = ({ nextSection }) => {
  return (
    <ContactContainer
      data-testid="contact"
      id="contact"
    >
      <LeftContactContainer>
        <h1>
          DAVID ARROWSMITH
        </h1>
        <h2> 
          JUNIOR WEB DEVELOPER 
        </h2>
      </LeftContactContainer>
      <RightContactContainer />
      <HomeArrow 
        homeSectionId={nextSection}
      />
    </ContactContainer>
  )
};

export default Contact;