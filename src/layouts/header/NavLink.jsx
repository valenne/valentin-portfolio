import React from "react";
import { AnchorLink } from "./AnchorLink.jsx";
import { Button } from "../../components/Button.jsx";

import CV from "../../assets/files/CV_IT.pdf";

export const NavLink = () => {
  return (
    <>
      <div className="flex flex-center nav-link-container">
        <ol className="flex space-between nav-link style-none">
          <AnchorLink name={"About"} number={"01."} link={"about"} />
          <AnchorLink name={"Work"} number={"02."} link={"work"} />
          <AnchorLink name={"Contact"} number={"03."} link={"contact"} />
        </ol>
        <Button text={"resume"} refLink={CV} />
      </div>
    </>
  );
};
