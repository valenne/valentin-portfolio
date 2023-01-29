import React from "react";

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="logo-container">
      <a onClick={scrollToTop} className="anchor-logo">
        <div className="logo-join">
          <span className="logo-part1 "></span>
          <span className="logo-part2 "></span>
          <span className="logo-part3 "></span>
        </div>
      </a>
    </div>
  );
};
