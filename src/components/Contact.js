import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedinCircular as TiLinkedin } from "react-icons/ti";

import FullWidthContainer from './FullWidthContainer';
import HalfWidthContainer from './HalfWidthContainer';
import HomeArrow from './HomeArrow';

const ContactContainer = styled(FullWidthContainer)`
  background-color: #FFFFFF;
  align-items: start;
`;

const LeftContactContainer = styled(HalfWidthContainer)`
  width: calc(50% - 80px);
  height: calc(100% - 80px);
  padding: 80px 0 0 80px;
`

const RightContactContainer = styled(HalfWidthContainer)`
  width: calc(50% - 40px);
  padding: 0 40px 0 0;
`

const Name = styled.h1`
  padding: 0;
  margin: 0 0 3vh 0;
  font-size: 2.6em;
`

const Title = styled.h2`
  padding: 0;
  margin: 0 0 6vh 0;
  font-size: 2em;
`

const LinkContainer = styled.a`
  height: 8vh;
  width: 35vw;
  border-radius: 50px;
  margin: 0 0 3vh 0;
  background: #FFFFFF;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: #F2F2F2;
    transition: 0.5s;
  }

`;

const LinkedinContainer = styled(LinkContainer)`
  border-radius: 10px 50px 50px 10px;
`

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
  text-decoration: none;
  color: #000000;
`


const Contact  = ({ nextSection }) => {
  return (
    <ContactContainer
      data-testid="contact"
      id="contact"
    >
      <LeftContactContainer>

        <Name>
          DAVID ARROWSMITH
        </Name>

        <Title> 
          JUNIOR WEB DEVELOPER 
        </Title>

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

      </LeftContactContainer>
      <RightContactContainer />
      <HomeArrow 
        homeSectionId={nextSection}
      />
    </ContactContainer>
  )
};

Contact.propTypes = {
  nextSection: PropTypes.string
}

export default Contact;