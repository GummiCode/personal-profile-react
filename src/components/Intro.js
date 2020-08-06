import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import HalfWidthContainer from "./HalfWidthContainer";
import SectionArrow from "./SectionArrow";

const ProfileContainer = styled(FullWidthContainer)`
  height: 27vh;
  background-color: #c9512f;
`;

const TextContainer = styled(HalfWidthContainer)`
  padding: 40px 0 0 40px;
  width: calc(50% - 40px);
  height: calc(100% - 40px);
`;

const IntroText = styled.p`
  margin: 0;
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
  margin: 0 0 0 0.5vw;
`;

const EmailIcon = styled(FaAt)`
  fill: #000000;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #ffd9b4;
    transition: 0.5s;
  }
`;

const LinkedinIcon = styled(FaLinkedin)`
  fill: #000000;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #ffd9b4;
    transition: 0.5s;
  }
`;

const GithubIcon = styled(FaGithub)`
  fill: #000000;
  width: 100%;
  height: 100%;

  &:hover {
    fill: #ffd9b4;
    transition: 0.5s;
  }
`;

const Intro = ({ nextSection }) => {
  return (
    <ProfileContainer data-testid="intro">
      <TextContainer>
        <IntroText>Self-Trained Web Developer.</IntroText>
        <IntroText>Experienced in REACT, Full-Stack</IntroText>
        <IntroText>& Test-Driven Development.</IntroText>
      </TextContainer>

      <LinksContainer>
        <SingleLinkContainer
          data-testid="intro-email-link"
          href="mailto:gummicodeblog@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </SingleLinkContainer>

        <SingleLinkContainer
          data-testid="intro-github-link"
          href="https://github.com/gummicode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </SingleLinkContainer>

        <SingleLinkContainer
          data-testid="intro-linkiedin-link"
          href="https://www.linkedin.com/in/david-arrowsmith/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </SingleLinkContainer>
      </LinksContainer>

      <SectionArrow nextSectionId={nextSection} />
    </ProfileContainer>
  );
};

Intro.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Intro;
