import React from "react";

function AnchorLink({ name, number }) {
  return (
    <>
      <li className="nav-li flex flex-center">
        <span className="nav-li-number">{number}</span>
        <a href="/#about">{name}</a>
      </li>
    </>
  );
}

export default AnchorLink;
