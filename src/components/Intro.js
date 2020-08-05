import React from "react";
import styled from "styled-components";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";

import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import SectionArrow from './SectionArrow';

const ProfileContainer = styled(FullWidthContainer)`
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 27vh;
  background-color: #C9512F;
`;

const TextContainer = styled(HalfWidthContainer)`
  padding: 40px 0 0 40px;
  width: calc(50% - 40px);
  height: calc(100% - 40px);
  flex-flow: column nowrap;
  justify-content: flex-start;
`

const ProfileText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 2.2em;
`;

const LinksContainer = styled(HalfWidthContainer)`
  padding: 40px 40px 0 0;
  width: calc(50% - 40px);
  height: calc(100% - 40px);
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

const SingleLinkContainer = styled.a`
  height: 15vh;
  width: 15vh;
  border-radius: 50%;
  margin: 0 0 0 .5vw;
`;

const EmailIcon = styled(FaAt)`
    fill: #000000;
    width: 100%;
    height: 100%;

  &:hover {
    fill: #FFD9B4;
    transition: 0.5s;
  }
`;

const LinkedinIcon = styled(FaLinkedin)`
    fill: #000000;
    width: 100%;
    height: 100%;

  &:hover {
    fill: #FFD9B4;
    transition: 0.5s;
  }
`;

const GithubIcon = styled(FaGithub)`
    fill: #000000;
    width: 100%;
    height: 100%;

  &:hover {
    fill: #FFD9B4;
    transition: 0.5s;
  }
`;

const Intro = ({ nextSection }) => {
  return (
    <ProfileContainer data-testid="intro">
      <TextContainer>
        <ProfileText>
          Self-Trained Software Engineer.
        </ProfileText>
        <ProfileText>
          Experienced in REACT, Full-Stack
        </ProfileText>
        <ProfileText>
          & Test-Driven Development.
        </ProfileText>
      </TextContainer>

      <LinksContainer>
        <SingleLinkContainer 
          data-testid="email-link"
          href="mailto:gummicodeblog@gmail.com"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <EmailIcon />
        </SingleLinkContainer>

        <SingleLinkContainer
          data-testid="github-link"
          href="https://github.com/gummicode" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </SingleLinkContainer>

        <SingleLinkContainer 
          data-testid="linkiedin-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <LinkedinIcon />
        </SingleLinkContainer>
      </LinksContainer>

      <SectionArrow 
        nextSectionId={nextSection}
      />
    </ProfileContainer>
  )
};

export default Intro;
