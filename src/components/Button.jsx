import React from "react";

function Button({ text, refLink }) {
  return (
    <div>
      <a className={`btn btn-resume`} href={refLink}>
        {text}
      </a>
    </div>
  );
}

export default Button;
