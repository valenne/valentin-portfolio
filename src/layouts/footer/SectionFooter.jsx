import React from "react";
import { Logo } from "../../components/Logo";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="flex footer-container">
        <div className="flex flex-center">
          <Logo />
          <span>Portfolio</span>
        </div>

        <p>Built by Nelson Venegas</p>
      </div>
    </footer>
  );
};
