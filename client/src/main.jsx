import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { TeamProvider } from "./context/TeamContext";
import { CartProvider } from "./context/CartContext";
import { extendStringPrototype } from "./utils/stringExtensions";
import { LanguageProvider } from "./context/LanguageContext";
import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const response = await axios.get("");
// console.log(response);

extendStringPrototype();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <TeamProvider>
          <CartProvider>
            <App />
            {/* <ToastContainer /> */}
            <Toaster />
          </CartProvider>
        </TeamProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
