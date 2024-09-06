import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Socials from "../components/Socials";

const Main = styled.main`
  background-color: ${(props) =>
    props.$isAccountPage ? "var(--bg-secondary)" : "inherit"};
`;

export default function Layout() {
  const { theme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAccountPage = location.pathname.includes("/account");

  useEffect(() => {
    const imageUrl = `url(/assets/images/main-picture_${theme}.png)`;
    document.documentElement.style.setProperty("--main-picture", imageUrl);
  }, [theme]);

  return (
    <div className={`site-wrapper ${theme}`}>
      <Header isHomePage={isHomePage} />
      <Main $isAccountPage={isAccountPage}>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
