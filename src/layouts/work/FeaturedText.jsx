import React from "react";
import { FeaturedLinks } from "./FeaturedLinks";
import { FeaturedTech } from "./FeaturedTech";

export const FeaturedText = ({ proyectName, proyectDesc, tech, data }) => {
  return (
    <div className="grid-area-text featured-ctext">
      <div className="grid">
        {/* pharagraph */}
        <p className="featured-type">Featured Proyect</p>
        {/* title with anchor to site */}
        <h3 className="featured-title">
          <a href={data["external link"]}>{proyectName}</a>
        </h3>
        {/* description */}
        <div className="featured-dc">
          <p>{proyectDesc}</p>
        </div>
        {/* tech list used on proyect */}

        <ul className="flex featured-tech">
          <FeaturedTech tech={tech} />
        </ul>

        {/* link to repo and page */}
        <div className="proyect-links-container">
          <FeaturedLinks data={data} name={"github"} />
          <FeaturedLinks data={data} name={"external link"} />
        </div>
      </div>
    </div>
  );
};
