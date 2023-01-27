import React from "react";

export const Button = ({ text, refLink }) => {
  return (
    <div>
      <a className={`btn btn-resume`} href={refLink} rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
};
