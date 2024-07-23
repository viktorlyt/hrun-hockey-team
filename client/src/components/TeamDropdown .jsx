import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const TeamDropdown = ({ closeMenu, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const isActive = () => {
    const teamRoutes = ["/team", "/history", "/standings", "/stats"];
    return teamRoutes.some((route) => location.pathname.startsWith(route));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (!isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`} ref={dropdownRef}>
      <button
        className={`dropbtn ${isActive() ? "active-link" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="b3">Team</div> <FaChevronDown />
      </button>
      <div className="dropdown-content b3">
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => {
            closeMenu();
            setIsOpen(false);
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => {
            closeMenu();
            setIsOpen(false);
          }}
        >
          History
        </NavLink>
        <NavLink
          to="/standings"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => {
            closeMenu();
            setIsOpen(false);
          }}
        >
          Standings
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => {
            closeMenu();
            setIsOpen(false);
          }}
        >
          Stats
        </NavLink>
      </div>
    </div>
  );
};

export default TeamDropdown;
