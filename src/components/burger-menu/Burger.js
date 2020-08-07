import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const StyledBurger = styled.button`
  width: 7vh;
  height: 6vh;
  margin: 1.5vw;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:focus {
    outline: none;
  }
`;

const Slice = styled.div`
  width: 100%;
  height: 15%;
  background: #ffffff;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  ${StyledBurger}:hover & {
    background: #ffd2ae;
    transition: 0.2s;
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <Slice />
      <Slice />
      <Slice />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
