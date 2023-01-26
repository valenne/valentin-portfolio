import React, { useContext } from "react";

// skill Context
import { SkillContext } from "../../context/skillContext.jsx";

export const SkillList = () => {
  const skills = useContext(SkillContext);

  return (
    <ul className="grid grid-2cols skill-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};
