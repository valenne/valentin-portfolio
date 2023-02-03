import React, { createContext } from "react";
import app_notes_img from "../assets/img/app_notes.png";
import bank_app_img from "../assets/img/bank-app.png";
import porfolio_app_img from "../assets/img/portfolio-app.png";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  // data of all proyects
  const info = [
    {
      id: 1,
      name: "yourNotes",
      description:
        "A web application to save, edit and delete your notes based on a user registration and login.",
      tech: ["JavaScript", "HBS", "Css", "SQL", "Railway.app"],
      img: app_notes_img,
      github: "https://github.com/valenne/notes-app",
      "external link": "https://notes-app-production-1a7e.up.railway.app/",
    },
    {
      id: 2,
      name: "Banco Digital de Chile",
      description:
        "Clone application of a banking institution, which allows you to make money transfers, balance review, update personal data and others.",
      tech: ["JavaScript", "HBS", "Css", "SQL", "Railway.app"],
      img: bank_app_img,
      github: "https://github.com/valenne/bank-app",
      "external link": "https://bank-app-production-68d0.up.railway.app/",
    },
    {
      id: 3,
      name: "Portfolio: Nelson Venegas",
      description:
        "Website similar to a personal curriculum, disclosing personal contact information and completed projects.",
      tech: ["JavaScript", "React", "Css", "GitHub Pages"],
      img: porfolio_app_img,
      github: "https://github.com/valenne/valentin-portfolio",
      "external link": "https://valenne.github.io/valentin-portfolio/",
    },
  ];
  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};
