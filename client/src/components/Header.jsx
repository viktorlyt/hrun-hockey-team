import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Wrapper from "../assets/wrappers/Header";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Wrapper>
      <div className="left-side">
        <Link className="logo-container" to="/">
          <Logo />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
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
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Team
        </NavLink>
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
        <NavLink
          to="/stats"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={closeMenu}
        >
          Stats
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
          className={({ isActive }) => (isActive ? "active-link" : "")}
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
