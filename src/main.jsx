import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { SkillContextProvider } from "./context/skillContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkillContextProvider>
      <App />
    </SkillContextProvider>
  </React.StrictMode>
);
