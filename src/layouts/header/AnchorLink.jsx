import React from "react";

function AnchorLink({ name, number, link }) {
  return (
    <>
      <li className="nav-li flex flex-center">
        <span className="nav-li-number">{number}</span>
        <a href={`#${link}`}>{name}</a>
      </li>
    </>
  );
}

export default AnchorLink;
