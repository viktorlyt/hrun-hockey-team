import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { TeamProvider } from "./context/TeamContext";
import { extendStringPrototype } from "./utils/stringExtensions.js";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const response = await axios.get("");
// console.log(response);

extendStringPrototype();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <TeamProvider>
          <App />
          <ToastContainer position="top-center" />
        </TeamProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
