import React from "react";
import styled from "styled-components";
import { BsPersonBoundingBox as AboutIcon  } from "react-icons/bs";
import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import SectionArrow from './SectionArrow';

const AboutContainer = styled(FullWidthContainer)`
  background-color: #E5B168;
`;

const LeftAboutContainer = styled(HalfWidthContainer)`
  width: calc(50% - 40px);
  padding: 0 0 0 40px;
`

const RightSideImage = styled(HalfWidthContainer)`
  position: absolute;
  right: 0;
  width: 40vw;
  background-image: url("./images/about-picture.jpg");
  background-size: auto 100%;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 7;
`

const RightSideScreen = styled(HalfWidthContainer)`
  position: absolute;
  right: 0;
  width: 40vw;
  background: rgba(10, 10, 10, 0.3);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 8;
`

const TitleText = styled.h1`
  font-size: 4em;
  color: #000000;
  padding: 0;
  margin:  50px 0 0 0;
`;

const StyledAboutIcon = styled(AboutIcon)`
  height: .8em; 
  width: auto;
  margin: 0 1vw 0 2vw;
`

const SectionText = styled.ul`
  font-size: 2em;
  list-style: none;
`;

const Item = styled.li`
  margin: 0 0 4vh 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;



const About  = ({ nextSection }) => {
  return (
    <AboutContainer
      data-testid="about"
      id="about"
    >
        <LeftAboutContainer>
          <TitleText>
          <StyledAboutIcon />
            About
          </TitleText>
          <SectionText>
            <Item>
              I'm a <Bold>Manchester-based Junior Developer</Bold>.
            </Item>
            <Item> 
              I'm seeking my first <Bold>Full-Time Position</Bold> as a <Bold>Junior Full-Stack Web Developer</Bold>.
            </Item>
            <Item>
              I've worked with <Bold>React</Bold>, <Bold>Express</Bold>, <Bold>MySQL</Bold>, <Bold>Heroku</Bold>, <Bold>React Testing Library</Bold> and other current technologies.
            </Item>
            <Item>
              I've undertaken <Bold>Intensive Self-Training</Bold> using <Bold>Contemporary Resources</Bold> to ensure relevance of skills.
            </Item>
            <Item>
              I come from a career in <Bold>Chemical Research and Development</Bold>. I possess strong executive skills including <Bold>Project Management</Bold>, <Bold>Troubleshooting</Bold>, <Bold>Independent Learning</Bold> and <Bold>Collaborative Working</Bold>.
            </Item>
          </SectionText>
        </LeftAboutContainer>

        <RightSideImage />
        <RightSideScreen />

        <SectionArrow 
          nextSectionId={nextSection}
        />

    </AboutContainer>
  )
};

export default About;