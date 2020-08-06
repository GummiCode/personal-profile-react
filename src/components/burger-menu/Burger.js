import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: #000000;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const Slice = styled.div`
  width: 2rem;
  height: 0.25rem;
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
