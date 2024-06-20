import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Logo from "./Logo";
import { LiaShoppingCartSolid } from "react-icons/lia";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <label htmlFor="theme-switch" className="theme-label">
        Home
      </label>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
        />
        <span className="slider round" />
      </label>
      <label htmlFor="theme-switch" className="theme-label">
        Away
      </label>
    </div>
  );
};

export default function Header() {
  return (
    <header>
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <nav className="nav-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          News
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Team
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Schedule
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Community
        </NavLink>
        <NavLink
          to="/school"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Hockey School
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Events
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact us
        </NavLink>

        {/* <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/tickets"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Tickets
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Stats
        </NavLink> */}
      </nav>
      <div className="right-side">
        <Link to="/shop" className="shop-btn">
          <LiaShoppingCartSolid />
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
