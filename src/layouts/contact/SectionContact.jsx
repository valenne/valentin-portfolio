import React from "react";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button.jsx";

export const SectionContact = () => {
  return (
    <section id="contact" className="contact-section flex">
      <Title number={"03"} titleOne={"Let's Talk"} titleTwo={"Get In Touch"} />

      <p>
        Hello, I am currently looking for an opportunity in the area of ​​web
        development. If you have any questions, or just want to stay in touch, I
        will do my best to reply to your message.
      </p>

      <Button text="Say Hello" refLink={"mailto:nelson.venegasgg@gmail.com"} />
    </section>
  );
};
