import React from "react";

export const Title = ({ number, titleOne, titleTwo }) => {
  return (
    <>
      <div className="flex contact-title">
        <div className="divider-number">{`${number}.`}</div>
        <h3 className="title-divider">{titleOne}</h3>
      </div>
      <h2 className="contact-title-main">{titleTwo}</h2>
    </>
  );
};
