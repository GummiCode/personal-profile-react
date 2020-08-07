import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { FaCode as SkillsIcon } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import HalfWidthContainer from "./HalfWidthContainer";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import techList from "../assets/techList";
import expText from "../assets/expText";

const SkillsContainer = styled(FullWidthContainer)`
  height: 83vh;
  width: 84vw;
  padding: 4.5vh 8vw;
  position: relative;
  background-color: #dad9de;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;

`;

const ExpContainer = styled(HalfWidthContainer)`
  width: 100%;
  height: auto;
`;

const TechContainer = styled(HalfWidthContainer)`
  width: 100%;
  height: auto;
`;

const TitleText = styled.h1`
  margin: 0;
  font-size: 2.8em;
`;

const StyledSkillsIcon = styled(SkillsIcon)`
  height: 0.8em;
  width: auto;
  margin: 0 5vw 0 2vw;
`;

const StyledMD = styled(ReactMarkdown)`
  margin: 0 0 0 2vw;
  font-size: 1em;
`;

const TechBlockContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 20px 0 0 0;
  font-size: 2em;
  display: flex;
  flex-flow: row wrap;
  align-items: start;
`;

const TechBlock = styled.span`
  height: fit-content;
  width: fit-content;
  padding: 5px;
  margin: 5px;
  background: rgb(255, 251, 252);
  border-radius: 4px;
`;

const Experience = ({ nextSection }) => {
  const displayTechnologies = (technologies) => {
    const sortedTech = technologies.sort();
    return sortedTech.map((tech) => {
      return <TechBlock key={`${tech}Exp`}>{tech}</TechBlock>;
    });
  };

  return (
    <SkillsContainer data-testid="experience" id="experience">
      <ExpContainer>
        <TitleText>
          <StyledSkillsIcon />
          Skills
        </TitleText>
        <StyledMD source={expText} />
      </ExpContainer>

      <TechContainer>
        <TechBlockContainer>{displayTechnologies(techList)}</TechBlockContainer>
      </TechContainer>

      <SectionArrowDown nextSectionId={nextSection} />
    </SkillsContainer>
  );
};

Experience.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Experience;
