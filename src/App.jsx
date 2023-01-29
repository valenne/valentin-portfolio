import "./assets/styles/index.css";
import "./assets/styles/App.css";
import { Header } from "./layouts/header/SectionHeader.jsx";
import { HeroSection } from "./layouts/hero-section/SectionHero.jsx";
import { About } from "./layouts/about/SectionAbout.jsx";
import { Work } from "./layouts/work/SectionWork.jsx";
import { SectionContact } from "./layouts/contact/SectionContact";

import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <About />
      <Work />
      <SectionContact />
    </main>
  );
};

export default App;
