import React, { useState, useEffect } from "react";
import { AnchorLink } from "./AnchorLink.jsx";
import { Button } from "../../components/Button.jsx";

import CV from "../../assets/files/CV_IT.pdf";
import { ToggleMenu } from "./toggleMenu.jsx";

export const NavLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  console.log(state);
  console.log(isOpen);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < state.windowWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]);

  return (
    <>
      {state.windowWidth <= 768 ? (
        <div className="test-collapsed">
          <div
            className={`flex flex-center nav-link-container ${
              isOpen ? "none" : null
            } `}
          >
            <ol className="flex space-between nav-link style-none">
              <AnchorLink name={"About"} number={"01."} link={"about"} />
              <AnchorLink name={"Work"} number={"02."} link={"work"} />
              <AnchorLink name={"Contact"} number={"03."} link={"contact"} />
            </ol>
            <Button text={"resume"} refLink={CV} />
          </div>
          <ToggleMenu openMenu={openMenu} />
        </div>
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
