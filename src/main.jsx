import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { SkillContextProvider } from "./context/skillContext";
import { DataContextProvider } from "./context/dataContext.jsx";
import { WidthContextProvider } from "./context/widthContext.jsx";
import { Footer } from "./layouts/footer/SectionFooter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkillContextProvider>
      <DataContextProvider>
        <WidthContextProvider>
          <App />
          <Footer />
        </WidthContextProvider>
      </DataContextProvider>
    </SkillContextProvider>
  </React.StrictMode>
);
