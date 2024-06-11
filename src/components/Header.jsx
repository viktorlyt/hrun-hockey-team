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
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "var(--accent-color)",
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        Name of the team
      </Link>
      <nav>
        <NavLink
          to="/team"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Team
        </NavLink>
        <NavLink
          to="/tickets"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Tickets
        </NavLink>
        <NavLink
          to="/shop"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/news"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          News
        </NavLink>
        <NavLink
          to="/events"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Events
        </NavLink>
        <NavLink
          to="/schedule"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Schedule
        </NavLink>
        <NavLink
          to="/stats"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Stats
        </NavLink>
        <NavLink
          to="/community"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Community
        </NavLink>
        <NavLink
          to="/school"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Hockey School
        </NavLink>
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
