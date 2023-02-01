import React from "react";

export const Button = ({ text, refLink, isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <a
          className={`btn btn-resume none`}
          href={refLink}
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <a
          className={`btn btn-resume`}
          href={refLink}
          rel="noopener noreferrer"
          type="button"
        >
          {text}
        </a>
      )}
    </div>
  );
};
