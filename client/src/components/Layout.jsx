import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";

export default function Layout() {
  const { theme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`site-wrapper ${theme}`}>
      <Header />
      <main className={isHomePage ? "home-page" : ""}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
