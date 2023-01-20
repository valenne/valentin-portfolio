import React from "react";
import AnchorLink from "./AnchorLink.jsx";
import Button from "../../components/Button.jsx";
import CV from "../../assets/files/CV_IT.pdf";

function NavLink() {
  return (
    <>
      <div className="flex flex-center nav-link-container">
        <ol className="flex space-between nav-link style-none">
          <AnchorLink name={"About"} number={"01."} />
          <AnchorLink name={"Work"} number={"02."} />
          <AnchorLink name={"Contact"} number={"03."} />
        </ol>
        <Button text="Resume" refLink={CV} />
      </div>
    </>
  );
}

export default NavLink;
