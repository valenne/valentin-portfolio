import React, { useContext } from "react";
import { AnchorLink } from "./AnchorLink.jsx";
import { Button } from "../../components/Button.jsx";
import CV from "../../assets/files/CV_IT.pdf";
import { ToggleMenu } from "./toggleMenu.jsx";

import { WidthContext } from "../../context/widthContext.jsx";

export const NavLink = () => {
  const { isOpen, state, openMenu } = useContext(WidthContext);

  const widthRequired = state.windowWidth <= 768;

  return (
    <>
      {widthRequired ? (
        <>
          <div className="test-collapsed" id="#navbarCollapse">
            <ToggleMenu openMenu={openMenu} isOpen={isOpen} />
          </div>
          <div
            className={`flex flex-center nav-link-container ${
              isOpen == false ? "none" : ""
            } `}
          >
            <ol className="flex space-between nav-link style-none">
              <AnchorLink name={"About"} number={"01."} link={"about"} />
              <AnchorLink name={"Work"} number={"02."} link={"work"} />
              <AnchorLink name={"Contact"} number={"03."} link={"contact"} />
            </ol>
            <Button text={"resume"} refLink={CV} isOpen={isOpen} />
          </div>
        </>
      ) : (
        <div className={`flex flex-center nav-link-container`}>
          <ol className="flex space-between nav-link style-none">
            <AnchorLink name={"About"} number={"01."} link={"about"} />
            <AnchorLink name={"Work"} number={"02."} link={"work"} />
            <AnchorLink name={"Contact"} number={"03."} link={"contact"} />
          </ol>

          <Button text={"resume"} refLink={CV} />
        </div>
      )}
    </>
  );
};
