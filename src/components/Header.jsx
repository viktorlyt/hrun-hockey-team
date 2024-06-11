import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

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
      <Link className="site-logo" to="/">
        Name of the team
      </Link>
      <nav>
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Team
        </NavLink>
        <NavLink
          to="/tickets"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Tickets
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          News
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Events
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Schedule
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Stats
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
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
