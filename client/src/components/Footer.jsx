import Wrapper from "../assets/wrappers/Footer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";
import Socials from "./Socials";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTeam } from "../context/TeamContext";

export default function Footer() {
  const { teamName, address, phone, email } = useTeam();

  return (
    <>
      <Wrapper>
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-branding">
              <Link className="logo-container" to="/">
                <Logo />
              </Link>
              <Socials className="footer-socials" />
            </div>
            <ThemeSwitcher />
          </div>
          <div className="footer-center">
            <div className="footer-sections">
              <section>
                <h3>{teamName}</h3>
                <div>
                  <Link to="/team">Team</Link>
                  <Link to="/school">Hockey School</Link>
                  <Link to="/events">Events</Link>
                  <Link to="/schedule">Schedule</Link>
                  {/* <Link to="/#contact-us-section">Contact us</Link> */}
                  <HashLink smooth to="/#contact-us-section">
                    Contact Us
                  </HashLink>
                </div>
              </section>
              <section>
                <h3>Quick links</h3>
                <div>
                  <Link to="/news">News</Link>
                  <Link to="/shop">Shop</Link>
                  <Link to="/stats">Stats</Link>
                  <Link to="/blog">Blog</Link>
                  <Link to="/community">Community</Link>
                </div>
              </section>
              <section>
                <h3>Location</h3>
                <div>
                  <p>{address}</p>
                  <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
                  <p>{phone}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          {`© 2024 ${teamName}. All Rights Reserved.`}
        </div>
      </Wrapper>
      <div className="created-by">
        <a href="https://hrun.pro/">Created by HRUN</a>
      </div>
    </>
  );
}
