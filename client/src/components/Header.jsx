import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LiaShoppingCartSolid } from "react-icons/lia";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Wrapper from "../../public/assets/wrappers/Header";

export default function Header() {
  return (
    <Wrapper>
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
      </nav>
      <div className="right-side">
        <LanguageSwitcher />
        <Link to="/shop" className="shop-btn">
          <LiaShoppingCartSolid />
        </Link>
        <ThemeSwitcher />
      </div>
    </Wrapper>
  );
}
