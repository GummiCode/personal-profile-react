import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaCaretDown } from 'react-icons/fa';

const DropdownContainer = styled.div`
  top: 0;
  height: fit-content;
  width: auto;
  margin: 0 0 0 1.5vw;
  background: none;
  font-size: 1em;
  color: #FFFFFF;
  border: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: left;
`


const DropdownTitle= styled.span`
  margin: 0 2% 0 0;
  color: #FFFFFF;
`;

const Caret = styled(FaCaretDown)`
`;

const DropdownHeader = styled.button`
  height:  60px;
  border: none;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 1em;
  background: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &:hover ${DropdownTitle} {
      color: #FFD2AE;
      transition: 0.2s;
    };

  &:hover ${Caret} {
      fill: #FFD2AE;
      transition: 0.2s;
  };
  &:focus {
    outline: none;
  };
`

const DropdownBody = styled.div`
  height: auto;
  width: auto;
  background: none;
  display: none;

  ${DropdownContainer}:hover & {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: left;
  }
`

const Placeholder = styled.span`
  height: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);
  padding: 1.2vh 0 1.2vh 2vw;
  margin: .75vh 0 0 0;

  &:hover {
      color: #FFD2AE;
      transition: 0.2s;
    };
`;

const DropdownMenu = ({ title }) => {
  

  return (
    <DropdownContainer>
      <DropdownHeader>
        <DropdownTitle>
          {title}
        </DropdownTitle>
        <IconContext.Provider 
          value={{ 
            color: "#FFFFFF", 
            size: "1.2em"
          }}
        >
          <Caret />
        </IconContext.Provider>
      </DropdownHeader> 

      <DropdownBody>
        <Placeholder>Link A</Placeholder>
        <Placeholder>Link B</Placeholder>
        <Placeholder>Link C</Placeholder>
        <Placeholder>Link D</Placeholder>
      </DropdownBody>

    </DropdownContainer>
  )
};

export default DropdownMenu;