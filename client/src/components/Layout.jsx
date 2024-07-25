import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";

export default function Layout() {
  const { theme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const imageUrl = `url(/assets/images/main-picture_${theme}.png)`;
    document.documentElement.style.setProperty("--main-picture", imageUrl);
  }, [theme]);

  return (
    <div className={`site-wrapper ${theme}`}>
      <Header isHomePage={isHomePage} />
      <main className={isHomePage ? "home-page" : ""}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
