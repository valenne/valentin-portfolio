import React from "react";
import { FeaturedImage } from "./FeaturedImage";
import { FeaturedText } from "./FeaturedText";

export const FeaturedList = () => {
  return (
    <li className="grid grid-12cols featured-list">
      <FeaturedImage />
      <FeaturedText />
    </li>
  );
};
