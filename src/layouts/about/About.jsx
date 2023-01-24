import React from "react";
import avatar from "../../assets/img/avatar.jpg";

import { SkillList } from "./SkillList.jsx";
import { SectionDivider } from "../../components/SectionDivider.jsx";

export function About() {
  return (
    <section className="about-section" id="about">
      <SectionDivider sectionNumber={"01"} sectionName={"About Me"} />
      <div className="about-inner grid">
        <div className="about-description">
          <div className="about-text">
            <p>
              Hello, my name is Nelson, but they call me Valentin, I have
              knowledge in Frontend and Backend, I want to continue learning new
              technologies.
            </p>
            <p>
              My passion is programming, and the creation of new tools that
              benefit the community, with the intention of develop my career in
              that line.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <SkillList />
        </div>
        <div className="picture-container">
          <picture className="color-test">
            <img className="picture-avatar" src={avatar} />
            <span className="picture-design"></span>
          </picture>
        </div>
      </div>
    </section>
  );
}
