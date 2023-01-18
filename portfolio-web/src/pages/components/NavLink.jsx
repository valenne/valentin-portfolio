import React from "react";
import AnchorLink from "./AnchorLink.jsx";
import Button from "./Button.jsx";

function NavLink() {
  return (
    <>
      <div className="flex flex-center nav-link-container">
        <ol className="flex space-between nav-link style-none">
          <AnchorLink name={"About"} number={"01."} />
          <AnchorLink name={"Work"} number={"02."} />
          <AnchorLink name={"Contact"} number={"01."} />
        </ol>
        <Button text="Resume" />
      </div>
    </>
  );
}

export default NavLink;
