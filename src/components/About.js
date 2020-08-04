import React from "react";
import styled from "styled-components";

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

const RightSideScreen = styled(HalfWidthContainer)`
  width: 40vw;
  background: rgba(10, 10, 10, 0.3);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
`

const TitleText = styled.h1`
  font-size: 5em;
  color: #FFD9B4;
  padding: 0;
  margin: 30px 0 0 0;
`;

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
          <TitleText>About:</TitleText>
          <SectionText>
            <Item>
              I'm a <Bold>Manchester-based junior developer</Bold>.
            </Item>
            <Item> 
              I'm seeking my first <Bold>Full-Time Position</Bold> as a <Bold>Software Engineer</Bold>.
            </Item>
            <Item>
              I've worked with <Bold>React</Bold>, <Bold>Express</Bold>, <Bold>MySQL</Bold>, <Bold>Heroku</Bold>, <Bold>React Testing Library</Bold> and other [contemporary] technologies.
            </Item>
            <Item>
              I've undertaken <Bold>Intensive Self-Training</Bold> using <Bold>Contemporary Resources</Bold> to ensure [relevance] of skills.
            </Item>
            <Item>
              I come from a career in <Bold>Chemical Research and Development</Bold>. I possess strong executive skills including <Bold>Project Management</Bold>, <Bold>Troubleshooting</Bold>, <Bold>Independent Learning</Bold> and <Bold>Collaborative Working</Bold>.
            </Item>
          </SectionText>
        </LeftAboutContainer>
        <RightSideScreen />

        <SectionArrow 
          nextSectionId={nextSection}
        />

    </AboutContainer>
  )
};

export default About;