import { NavLink, Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/StatsLayout";

export default function StatsLayout() {
  return (
    <Wrapper>
      <h1>Statistics</h1>
      <nav className="nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="skaters"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Skaters
        </NavLink>
        <NavLink
          to="goalies"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Goalies
        </NavLink>
        <NavLink
          to="teams"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Teams
        </NavLink>
        <NavLink
          to="glossary"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Glossary
        </NavLink>
      </nav>
      <Outlet />
    </Wrapper>
  );
}
