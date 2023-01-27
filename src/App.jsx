import "./assets/styles/index.css";
import "./assets/styles/App.css";
import { Header } from "./layouts/header/SectionHeader.jsx";
import { HeroSection } from "./layouts/hero-section/SectionHero.jsx";
import { About } from "./layouts/about/SectionAbout.jsx";
import { Work } from "./layouts/work/SectionWork.jsx";
import { SectionContact } from "./layouts/contact/SectionContact";

const App = () => {
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
