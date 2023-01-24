import "./assets/styles/index.css";
import "./assets/styles/App.css";
import { Header } from "./layouts/header/Header.jsx";
import { HeroSection } from "./layouts/hero-section/HeroSection.jsx";
import { About } from "./layouts/about/About.jsx";
import { Jobs } from "./layouts/work/Jobs.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Jobs />
    </div>
  );
};

export default App;
