import React from "react";
import { HashLink } from "react-router-hash-link";
import Wrapper from "../assets/wrappers/Team";
import FactCard from "../components/FactCard";
import CoachCard from "../components/CoachCard";

const getImagePath = (imageName) => {
  // return import.meta.env.DEV
  return `/assets/images/${imageName}`;
};

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

const coaches = [
  {
    id: 1,
    firstName: "Ryan",
    lastName: "Donald",
    position: "Head Coach and General Manager",
    bio:
      "Ryan is the club’s first-ever head coach and general manager for the team’s " +
      "inaugural season of 2020-2021. Donald spent 5 seasons at Yale University as an " +
      "Assistant Coach before joining the Bucks in 2020. Donald also has had coaching stints " +
      "in both Trail and Woodstock.  Ryan played 2 years of junior A hockey himself and then " +
      "went on to play for Yale University for 4 years, winning an ECAC championship along the " +
      "way.",
  },
  {
    id: 2,
    firstName: "Jack",
    lastName: "Watson",
    position: "Assistant Coach",
    bio: "Ryan is the club’s first-ever head coach and general manager for the team’s inaugural season of 2020-2021. Donald spent 5 seasons at Yale University as an Assistant Coach before joining the Bucks in 2020. Donald also has had coaching stints in both Trail and Woodstock.  Ryan played 2 years of junior A hockey himself and then went on to play for Yale University for 4 years, winning an ECAC championship along the way. ",
  },
  {
    id: 3,
    firstName: "Daniel",
    lastName: "McLean",
    position: "Assistant Coach",
    bio: "Ryan is the club’s first-ever head coach and general manager for the team’s inaugural season of 2020-2021. Donald spent 5 seasons at Yale University as an Assistant Coach before joining the Bucks in 2020. Donald also has had coaching stints in both Trail and Woodstock.  Ryan played 2 years of junior A hockey himself and then went on to play for Yale University for 4 years, winning an ECAC championship along the way. ",
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
        <img src={getImagePath("main-picture.jpg")} alt="Team Image" />;
      </div>
      <h1>Coaching Staff</h1>
      <div className="coaches-container">
        {coaches.map((c) => (
          <CoachCard
            key={c.id}
            firstName={c.firstName}
            lastName={c.lastName}
            position={c.position}
            bio={c.bio}
          />
        ))}
      </div>
      <h1>Join Us</h1>
      <div className="join-container">
        <div className="about">
          <p className="larger-font">
            Whether you’re a die-hard fan, a curious newcomer, or a potential
            player, we invite you to join the Castors family. Follow our
            journey, support our games, and share in the excitement of hockey at
            its finest. Stay tuned to our website for the latest news, game
            schedules, player updates, and more. Together, we are unstoppable.
          </p>
          <button className="contact-us">
            <HashLink smooth to="/#contact-us-section">
              Contact Us
            </HashLink>
          </button>
        </div>
        <img src={getImagePath("main-picture.jpg")} alt="Join Us Image" />
      </div>
    </Wrapper>
  );
};

export default Team;
