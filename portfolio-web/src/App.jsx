import "./assets/styles/index.css";
import "./assets/styles/App.css";
import { Header } from "./layouts/header/Header.jsx";
import { HeroSection } from "./layouts/hero-section/HeroSection.jsx";
import { About } from "./layouts/about/About.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
    </div>
  );
};

export default App;
