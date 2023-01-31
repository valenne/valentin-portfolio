import React from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

export const ToggleMenu = ({ openMenu }) => {
  return (
    <>
      {openMenu ? (
        <GiHamburgerMenu onClick={openMenu} className={`hamburguer-menu`} />
      ) : null}
    </>
  );
};
