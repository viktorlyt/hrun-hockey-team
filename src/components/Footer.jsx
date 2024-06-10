import React from "react";

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
                <a href="#">Web: www.team.ca</a>
              </div>
            </section>
            <section>
              <h3>Tickets & Merch</h3>
              <div>
                <a href="#">Tickets</a>
                <a href="#">Shop</a>
              </div>
            </section>
            <section>
              <h3>About the Team</h3>
              <div>
                <a href="#">Team</a>
                <a href="#">News</a>
                <a href="#">Events</a>
                <a href="#">Schedule</a>
                <a href="#">Hockey School</a>
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
