import React, { useEffect } from "react";
import { NavBar } from "./NavBar.jsx";

export const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <section className="header-section">
      <NavBar />
    </section>
  );
};
