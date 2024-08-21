import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Socials from "../components/Socials";

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
      {/* <main className={isHomePage ? "home-page" : ""}> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
