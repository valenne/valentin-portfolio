import React from "react";

import { GoMarkGithub, GoLinkExternal } from "react-icons/go";

export const FeaturedLinks = ({ data, name }) => {
  const urlName = Object.keys(data).filter((item) => item === name)[0];

  console.log(urlName);

  return (
    <>
      {name === "github" ? (
        <a href={data[name]}>
          <title>{urlName}</title>
          <GoMarkGithub className="proyect-link" />
        </a>
      ) : (
        <a href={data[name]}>
          <title>{urlName}</title>
          <GoLinkExternal className="proyect-link" />
        </a>
      )}
    </>
  );
};
