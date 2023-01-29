import React from "react";
import { Button } from "../../components/Button";

export const HeroSection = () => {
  return (
    <section className="hero-section flex">
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2>Nelson Venegas.</h2>
      </div>
      <div>
        <h3>
          I like to create{" "}
          <span className="hover-underline-animation">things.</span>
        </h3>
      </div>
      <div>
        <p>
          I'm a self learning developer, focused on find minimalist solutions,
          that helped to clear the spaces and thoughts.
        </p>
      </div>
      <Button text="Check my works" refLink={"#work"} />
    </section>
  );
};
