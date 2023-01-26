import React, { createContext } from "react";

export const SkillContext = createContext();

export const SkillContextProvider = ({ children }) => {
  const skills = [
    "JavaScript (ES6+)",
    "Node.js",
    "Mongodb",
    "React",
    "Express",
    "PostgressSQL",
  ];

  return (
    <SkillContext.Provider value={skills}>{children}</SkillContext.Provider>
  );
};
