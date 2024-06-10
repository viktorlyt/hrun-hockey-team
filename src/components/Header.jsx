import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
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
    </header>
  );
}
