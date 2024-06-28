import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { TeamProvider } from "./context/TeamContext";
import { extendStringPrototype } from "./utils/stringExtensions.js";
import { LanguageProvider } from "./context/LanguageContext.jsx";

extendStringPrototype();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <TeamProvider>
          <App />
        </TeamProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
