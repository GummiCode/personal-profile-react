import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaCaretDown } from 'react-icons/fa';

const DropdownContainer = styled.div`
  top: 0;
  height: fit-content;
  width: 15vw;
  margin: 0 0 0 1.5vw;
  background: rgba(0, 0, 100, 1);
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
  background: rgba(100, 0, 0, 1);
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
  width: 13.5vw;
  background: rgba(0, 150, 0, 1);
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
  background: rgba(150, 150, 0, 1);
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