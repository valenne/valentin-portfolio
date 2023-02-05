import React, { useContext } from "react";
import { WidthContext } from "../../context/widthContext.jsx";

export const AnchorLink = ({ name, number, link }) => {
  const { openMenu } = useContext(WidthContext);
  // console.log(isOpen);

  return (
    <>
      <li className="nav-li flex flex-center" onClick={openMenu}>
        <span className="nav-li-number">{number}</span>
        <a href={`#${link}`}>{name}</a>
      </li>
    </>
  );
};
