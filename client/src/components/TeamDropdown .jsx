import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const TeamDropdown = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => setIsOpen(!isOpen);

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`} ref={dropdownRef}>
      <button
        className={`dropbtn ${isActive() ? "active-link" : ""}`}
        onClick={toggleDropdown}
      >
        Team <FaChevronDown />
      </button>
      <div className="dropdown-content">
        <NavLink
          to="/team"
          onClick={() => {
            closeMenu();
            setIsOpen(false);
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/history"
          onClick={() => {
            closeMenu();
            setIsOpen(false);
          }}
        >
          History
        </NavLink>
        <NavLink
          to="/standings"
          onClick={() => {
            closeMenu();
            setIsOpen(false);
          }}
        >
          Standings
        </NavLink>
        <NavLink
          to="/stats"
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
