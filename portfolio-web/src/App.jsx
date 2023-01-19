import "./assets/styles/index.css";
import "./assets/styles/App.css";
import { Header } from "./layouts/header/Header.jsx";
import { HeroSection } from "./layouts/hero-section/HeroSection.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;
