import React, { createContext } from "react";
import app_notes_img from "../assets/img/app_notes.png";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  // data of all proyects
  const info = [
    {
      id: 1,
      name: "yourNotes",
      description:
        "A web application to save, edit and delete your notes based on a user registration and login.",
      tech: ["VS code", "React", "Css vanilla", "Railway.app"],
      img: app_notes_img,
      github: "https://github.com/valenne/notes-app",
      "external link": "https://notes-app-production-1a7e.up.railway.app/",
    },
  ];
  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};
