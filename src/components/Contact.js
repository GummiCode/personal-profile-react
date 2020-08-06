import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import FullWidthContainer from "./FullWidthContainer";
import HomeArrow from "./HomeArrow";

const ContactContainer = styled(FullWidthContainer)`
  height: calc(100vh - 60px - 80px);
  width: calc(100vw - 80px);
  padding: 80px 0 0 80px;
  background-color: #ffffff;
  flex-flow: column nowrap;
  justify-content: start;
`;

const Name = styled.h1`
  margin: 0 0 3vh 0;
  font-size: 2.6em;
`;

const Title = styled.h2`
  margin: 0 0 6vh 0;
  font-size: 2em;
`;

const LinkContainer = styled.a`
  height: 8vh;
  width: 35vw;
  border-radius: 50px;
  margin: 0 0 3vh 0;
  text-decoration: none;
  background: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    background: #f2f2f2;
    transition: 0.5s;
  }
`;

const LinkedinContainer = styled(LinkContainer)`
  border-radius: 10px 50px 50px 10px;
`;

const EmailIcon = styled(FaAt)`
  margin: 0 0 0 1%;
  fill: #000000;
  height: 89%;
  width: auto;
`;

const LinkedinIcon = styled(FaLinkedin)`
  margin: 0 0 0 1%;
  fill: #000000;
  height: 89%;
  width: auto;
`;

const GithubIcon = styled(FaGithub)`
  margin: 0 0 0 1%;
  fill: #000000;
  height: 89%;
  width: auto;
`;

const LinkText = styled.span`
  margin: 0 0 0 3%;
  font-size: 2em;
  font-weight: bold;
  font-style: italic;
  color: #000000;
`;

const Contact = ({ nextSection }) => {
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
        <LinkText>Email: dtarrowsmith@gmail.com</LinkText>
      </LinkContainer>

      <LinkedinContainer
        data-testid="contact-linkedin-link"
        href="https://www.linkedin.com/in/david-arrowsmith/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
        <LinkText>Linkedin: david-arrowsmith</LinkText>
      </LinkedinContainer>

      <LinkContainer
        data-testid="contact-github-link"
        href="https://github.com/gummicode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        <LinkText>GitHub: GummiCode</LinkText>
      </LinkContainer>

      <HomeArrow homeSectionId={nextSection} />
    </ContactContainer>
  );
};

Contact.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Contact;
