import React from "react";

function AnchorLink({ name, number }) {
  return (
    <>
      <li className="nav-li flex flex-center">
        <a href="/#about">
          <span>{number}</span>
          {name}
        </a>
      </li>
    </>
  );
}

export default AnchorLink;
