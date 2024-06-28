import React from "react";
import Wrapper from "../../public/assets/wrappers/Team";
import FactCard from "../components/FactCard";

const facts = [
  {
    total: "350",
    title: "matches",
    content: "We are playing from now total 350 matches",
  },
  {
    total: "50",
    title: "players",
    content: "50 best players available in our club",
  },
  {
    total: "20",
    title: "awards",
    content: "We have achieved 22 winner awards ",
  },
];

const Team = () => {
  return (
    <Wrapper>
      <h1>Our Team</h1>
      <div className="team-container">
        <div className="about">
          <p className="larger-font">
            Welcome to Castors Team, where passion for hockey meets community
            spirit. Our team is more than just a group of players; we are a
            family united by our love for the game and our commitment to
            excellence both on and off the ice.
          </p>
          <div className="facts-container">
            {facts.map((f) => (
              <FactCard
                key={f.title}
                total={f.total}
                title={f.title}
                content={f.content}
              />
            ))}
          </div>
        </div>
        <img
          src="../../public/assets/images/main-picture.jpg"
          alt="Team Image"
        />
      </div>
      <h1>Coaching Staff</h1>
      <div className="coaches-container"></div>
      <h1>Join Us</h1>
      <div className="join-container"></div>
    </Wrapper>
  );
};

export default Team;
