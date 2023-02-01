import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import { WidthContext } from "../../context/widthContext.jsx";

export const ToggleMenu = ({ openMenu }) => {
  const { isOpen } = useContext(WidthContext);
  // console.log(isOpen);
  return (
    <>
      {isOpen ? (
        <MdOutlineClose onClick={openMenu} className={`hamburguer-menu`} />
      ) : (
        <GiHamburgerMenu onClick={openMenu} className={`hamburguer-menu`} />
      )}
    </>
  );
};
