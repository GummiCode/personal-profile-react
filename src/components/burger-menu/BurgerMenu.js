import React, { useState, useRef } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import useOnClickOutside from "../../hooks/hooks";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

export default BurgerMenu;
