import React from "react";
import Button from "./Button.jsx";

function NavLink() {
  return (
    <div className="flex flex-center nav-link-container">
      <ol className="flex space-between nav-link style-none">
        <li>
          <a class href="/#about">
            About
          </a>
        </li>
        <li>
          <a href="/#work">Work</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ol>
      <Button text="Resume" />
    </div>
  );
}

export default NavLink;
