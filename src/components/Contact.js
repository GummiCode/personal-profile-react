import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import {
  FaGithub as githubIcon,
  FaAt as emailIcon,
  FaLinkedin as linkedinIcon,
} from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import SectionArrowUp from "./section-arrows/SectionArrowUp";

const ContactContainer = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  ${up("md")} {
    height: fit-content;
    margin: 0 0 20vh 0;
  }
`;

const ContactCard = styled.div`
  height: calc(100% - 20px);
  width: 360px;
  max-width: calc(100vw - 40px);
  padding: 20px 20px 0 20px;
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Name = styled.h1`
  margin: 0 0 10px 0;
  font-size: 1.5em;
  font-weight: normal;

  ${up("md")} {
    font-size: 1.9em;
    font-weight: normal;
  }
`;

const Title = styled.h2`
  margin: 0 0 6vh 0;
  font-size: 1.2em;
  font-weight: normal;

  ${up("sm")} {
    font-size: 1.4em;
  }

  ${up("md")} {
    font-size: 1.6em;
  }
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

  ${up("sm")} {
    width: 366px;
    height: 56px;
  }

  ${up("smmd")} {
    width: 388px;
    height: 63px;
  }

  ${up("md")} {
    width: 413px;
    height: 70px;
  }

  ${up("md")} {
    width: 470px;
    height: 84px;
  }

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

    ${up("sm")} {
      font-size: 1.25em;
    }

    ${up("smmd")} {
      font-size: 1.35em;
    }

    ${up("md")} {
      font-size: 1.45em;
    }

    ${up("lg")} {
      font-size: 1.65em;
    }
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

const Contact = () => {
  return (
    <ThemeProvider theme={breakpoints}>
      <ContactContainer data-testid="contact" id="contact">
        <ContactCard>
          <Name>David Arrowsmith</Name>

          <Title>Web Developer</Title>

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
        </ContactCard>
        <SectionArrowUp />
      </ContactContainer>
    </ThemeProvider>
  );
};

export default Contact;
