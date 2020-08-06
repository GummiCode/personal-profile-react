import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaCompass as ExpIcon, FaCode as TechIcon } from "react-icons/fa";
import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import SectionArrow from './SectionArrow';
import techList from "../assets/techList";

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
  font-size: 4em;
  margin:  50px 0 0 0;
`;

const StyledExpIcon = styled(ExpIcon)`
  height: .8em; 
  width: auto;
  margin: 0 1vw 0 2vw;
`

const StyledTechIcon = styled(TechIcon)`
  height: .8em; 
  width: auto;
  margin: 0 1vw 0 0;
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

const TechBlockContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 20px 0 0 0;
  font-size: 2em;
  display: flex;
  flex-flow: row wrap;
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

  const displayTechnologies = (technologies) => {
    const sortedTech = technologies.sort();
    return sortedTech.map((tech) => {
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
            <TitleText>
              <StyledExpIcon/>
              Experience
            </TitleText>
            <SectionText>
              <Item>
                <Bold>Front-End Development:</Bold><br />
                React, JavaScript, CSS, HTML, dynamic web pages, responsive web pages
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
                MySQL, Sequelize, MongoDB, Docker
              </Item>
              <Item>
                <Bold>Hosting:</Bold><br />
                Heroku
              </Item>
            </SectionText>
          </ExpContainer>

          <TechContainer>
            <TitleText>
              <StyledTechIcon/>
              Technologies
            </TitleText>
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

Experience.propTypes = {
  nextSection: PropTypes.string
};

export default Experience;
