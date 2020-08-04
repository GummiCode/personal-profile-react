import React from "react";
import styled from "styled-components";

import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import SectionArrow from './SectionArrow';

const SkillsContainer = styled(FullWidthContainer)`
  background-color: #DAD9DE;
`;

const ExpContainer = styled(HalfWidthContainer)`
   width: calc(50% - 40px);
  padding: 0 0 0 40px;
`;

const TechContainer = styled(HalfWidthContainer)`
   width: calc(50% - 40px);
  padding: 0 40px 0 0;
`;

const TitleText = styled.h1`
  font-size: 5em;
  color: #434B60;
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

const TechBlockContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 20px 0 0 0;
  font-size: 2em;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: start;
`

const TechBlock = styled.span`
  height: fit-content;
  width: fit-content;
  padding: 5px;
  margin: 5px;
  background: rgb(255, 251, 252);
  border-radius: 4px;
`;


const Experience  = ({ nextSection }) => {

  const techList = [
    "JavaScript",
    "CSS",
    "HTML5",
    "styled-components",
    "React",
    "Node.js",
    "VSCode",
    "Express",
    "MySQL",
    "MongoDB",
    "API Development",
    "Jest",
    "Chai",
    "Mocha",
    "supertest",
    "React Testing Library",
    "Axios",
    "Docker",
    "FontAwesome",
    "react-icons",
    "NPM",
    "Heroku",
    "react-scroll",
    "Responsive Design"
  ];

  const displayTechnologies = (technologies) => {
    const orderedTech = technologies.sort();
    return orderedTech.map((tech) => {
      
      return (
        <TechBlock
          key={tech+"Exp"}
        >
          {tech}
        </TechBlock>
      )
    })
  };

    return (
      <SkillsContainer
        data-testid="experience"
        id="experience"
      >
          <ExpContainer>
            <TitleText>Experience:</TitleText>
            <SectionText>
              <Item>
                <Bold>React App Development:</Bold><br />
                React, components, styled-components
              </Item>
              <Item>
                <Bold>Test-Driven Development:</Bold><br />
                Jest, Mocha, Chai, supertest, React Testing Library
              </Item>
              <Item>
                <Bold>API Production:</Bold><br /> 
                Express 
              </Item>
              <Item>
                <Bold>Database Management:</Bold><br />
                MySQL, Sequelize, MongoDB
              </Item>
              <Item>
                <Bold>Hosting:</Bold><br />
                Heroku
              </Item>
            </SectionText>
          </ExpContainer>

          <TechContainer>
            <TitleText>Technologies:</TitleText>
            <TechBlockContainer>
              {displayTechnologies(techList)}
            </TechBlockContainer>
          </TechContainer>

        <SectionArrow 
          nextSectionId={nextSection}
        />

      </SkillsContainer>
  )
};

export default Experience;
