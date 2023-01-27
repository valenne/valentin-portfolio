import React from "react";

export const SectionDivider = ({ sectionName, sectionNumber }) => {
  return (
    <div className="flex divider-container">
      <div className="flex ">
        <div className="divider-number">{`${sectionNumber}.`}</div>
        <h2 className="title-divider">{sectionName}</h2>
        <div className="divider-line"></div>
      </div>
    </div>
  );
};
