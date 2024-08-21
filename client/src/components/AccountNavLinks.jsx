import { NavLink } from "react-router-dom";
import { useAccountContext } from "../pages/Account/AccountLayout";
import links from "../utils/links";
import { accountPrimaryLinks, accountSecondaryLinks } from "../utils/links";

const NavLinks = ({ isBigSidebar }) => {
  const { user, toggleSidebar } = useAccountContext;

  return (
    <div className="nav-links">
      <div className="primary">
        {accountPrimaryLinks.map((link) => {
          const { text, path, icon } = link;
          return (
            <NavLink
              to={path}
              key={text}
              onClick={isBigSidebar ? null : toggleSidebar}
              className="nav-link b2"
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
      <div className="secondary">
        {accountSecondaryLinks.map((link) => {
          const { text, path, icon } = link;
          return (
            <NavLink
              to={path}
              key={text}
              onClick={isBigSidebar ? null : toggleSidebar}
              className="nav-link b2"
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
