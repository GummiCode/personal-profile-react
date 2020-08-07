import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { FaCompass as ExpIcon, FaCode as TechIcon } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import HalfWidthContainer from "./HalfWidthContainer";
import SectionArrowUp from "./section-arrows/SectionArrowUp";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import techList from "../assets/techList";
import expText from "../assets/expText";

const SkillsContainer = styled(FullWidthContainer)`
  background-color: #dad9de;
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
  margin: 50px 0 0 0;
`;

const StyledExpIcon = styled(ExpIcon)`
  height: 0.8em;
  width: auto;
  margin: 0 1vw 0 2vw;
`;

const StyledTechIcon = styled(TechIcon)`
  height: 0.8em;
  width: auto;
  margin: 0 1vw 0 0;
`;

const StyledMD = styled(ReactMarkdown)`
  margin: 0 0 0 40px;
  font-size: 2em;
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

const Experience = ({ lastSection, nextSection }) => {
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
          <StyledExpIcon />
          Experience
        </TitleText>
        <StyledMD source={expText} />
      </ExpContainer>

      <TechContainer>
        <TitleText>
          <StyledTechIcon />
          Technologies
        </TitleText>
        <TechBlockContainer>{displayTechnologies(techList)}</TechBlockContainer>
      </TechContainer>

      <SectionArrowUp lastSectionId={lastSection} />
      <SectionArrowDown nextSectionId={nextSection} />
    </SkillsContainer>
  );
};

Experience.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Experience;
