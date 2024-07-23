import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import TeamDropdown from "./TeamDropdown ";
import Wrapper from "../assets/wrappers/Header";

export default function Header() {
  const location = useLocation();
  const isContactActive = location.hash === "#contact-us-section";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Wrapper className="b3">
      <div className="left-side">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <button className="menu-toggle b3" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className={`nav-center ${isMenuOpen ? "show-menu" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          News
        </NavLink>
        {/* <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Team
        </NavLink> */}
        <TeamDropdown closeMenu={closeMenu} isMobile={isMobile} />
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Shop
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Schedule
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Community
        </NavLink>
        <NavLink
          to="/school"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Hockey School
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Events
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Contact us
        </NavLink> */}
        <HashLink
          smooth
          to="/#contact-us-section"
          className={isContactActive ? "active-link" : ""}
          onClick={closeMenu}
        >
          Contact Us
        </HashLink>
      </nav>
      <div className="right-side">
        <LanguageSwitcher />
        <Link to="/cart" className="shop-btn">
          <LiaShoppingCartSolid />
        </Link>
        <ThemeSwitcher />
      </div>
    </Wrapper>
  );
}
