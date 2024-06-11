import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="site-footer">
        <div className="footer-content">
          <img src="./logo.png" alt="logo" className="footer-logo" />
          <div className="footer-sections">
            <section>
              <h3>Contact Info</h3>
              <div>
                <a href="#">Email: team@email.com</a>
                <Link to="/">Web: www.team.ca</Link>
              </div>
            </section>
            <section>
              <h3>Tickets & Merch</h3>
              <div>
                <Link to="/tickets">Tickets</Link>
                <Link to="/shop">Shop</Link>
              </div>
            </section>
            <section>
              <h3>About the Team</h3>
              <div>
                <Link to="/team">Team</Link>
                <Link to="/news">News</Link>
                <Link to="/events">Events</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/school">Hockey School</Link>
              </div>
            </section>
          </div>
        </div>
        <div className="footer-bottom">
          &#169; 2024 Team Name Site. All Rights Reserved.
        </div>
      </footer>
      <div className="created-by">
        <a href="https://hrun.pro/">Created by HRUN</a>
      </div>
    </div>
  );
}
