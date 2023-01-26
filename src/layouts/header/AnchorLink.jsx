import React from "react";

export const AnchorLink = ({ name, number, link }) => {
  return (
    <>
      <li className="nav-li flex flex-center">
        <span className="nav-li-number">{number}</span>
        <a href={`#${link}`}>{name}</a>
      </li>
    </>
  );
};
