import React from "react";

export const FeaturedTech = ({ tech }) => {
  return (
    <>
      {tech.map((data, index) => (
        <li key={index} className="hover-underline-animation">
          {data}
        </li>
      ))}
    </>
  );
};
