import React from "react";
import { SectionDivider } from "../../components/SectionDivider";
import { Featured } from "./Featured";

export const Work = () => {
  return (
    <section id="work" className="jobs-section">
      <SectionDivider
        sectionName={"What project have I built?"}
        sectionNumber={"02"}
      />
      <Featured />
    </section>
  );
};
