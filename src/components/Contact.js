import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FaGithub as githubIcon,
  FaAt as emailIcon,
  FaLinkedin as linkedinIcon,
} from "react-icons/fa";
import SectionArrowUp from "./section-arrows/SectionArrowUp";

const ContactContainer = styled.div`
  position: relative;
  height: 74vh;
  width: 86vw;
  padding: 8vh 7vw;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Name = styled.h1`
  margin: 0 0 3vh 0;
  font-size: 1.5em;
`;

const Title = styled.h2`
  margin: 0 0 6vh 0;
  font-size: 1.2em;
`;

const LinkContainer = styled.a`
  height: 8vh;
  width: 100%;
  margin: 0 0 3vh 0;
  text-decoration: none;
  background: #f2f2f2;
  border-radius: 50px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:active {
    background: #affc41;

    transition: 0.5s;
  }

  span {
    margin: 0 0 0 3%;
    font-size: 1em;
    font-weight: bold;
    font-style: italic;
    color: #000000;
  }
`;

const LinkedinContainer = styled(LinkContainer)`
  border-radius: 10px 50px 50px 10px;
`;

const EmailIcon = styled(emailIcon)`
  margin: 0 0 0 1%;
  fill: #000000;
  height: 95%;
  width: auto;
`;

const LinkedinIcon = styled(linkedinIcon)`
  margin: 0 0 0 1%;
  fill: #000000;
  height: 95%;
  width: auto;
`;

const GithubIcon = styled(githubIcon)`
  margin: 0 0 0 1%;
  fill: #000000;
  height: 95%;
  width: auto;
`;

const Contact = ({ lastSection }) => {
  return (
    <ContactContainer data-testid="contact" id="contact">
      <Name>DAVID ARROWSMITH</Name>

      <Title>JUNIOR WEB DEVELOPER</Title>

      <LinkContainer
        data-testid="contact-email-link"
        href="mailto:gummicodeblog@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon />
        <span>wemakearrows@gmail.com</span>
      </LinkContainer>

      <LinkedinContainer
        data-testid="contact-linkedin-link"
        href="https://www.linkedin.com/in/david-arrowsmith/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
        <span>david-arrowsmith</span>
      </LinkedinContainer>

      <LinkContainer
        data-testid="contact-github-link"
        href="https://github.com/gummicode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        <span>GummiCode</span>
      </LinkContainer>

      <SectionArrowUp lastSectionId={lastSection} />
    </ContactContainer>
  );
};

Contact.propTypes = {
  lastSection: PropTypes.string.isRequired,
};

export default Contact;
