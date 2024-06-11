import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div className={`site-wrapper ${theme}`}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
