import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HockeySchool";
import GroupCard from "../components/GroupCard";
import { mockGroups } from "../data/mockData";
import { WEEKDAYS } from "../utils/clientConstants";

const groups = mockGroups;

const HockeySchool = () => {
  return (
    <Wrapper>
      <h1>Welcome to our Castors Hockey school</h1>
      <div className="groups-container">
        <p className="larger-font">
          We're thrilled to have you here! Whether you're a die-hard fan, a new
          supporter, or a curious visitor, our team welcomes you with open arms.
          We invite you to join us in the excitement, passion, and camaraderie
          that define Castors Hockey.
        </p>
        <div className="groups">
          {groups.map((g) => (
            <GroupCard
              key={g.groupId}
              id={g.groupId}
              name={g.name}
              minAge={g.minAge}
              maxAge={g.maxAge}
              decription={g.decription}
              img={g.img}
            />
          ))}
        </div>
      </div>
      <h1>Stay Updated with Our Schedule</h1>
      <div className="schedule-container">
        <p className="larger-font">
          Our team is committed to excellence both on and off the ice. Be sure
          to check out our schedule to stay informed about upcoming games,
          practice sessions, and special events. You won't want to miss a single
          moment of the action!
        </p>
        <table></table>
      </div>
    </Wrapper>
  );
};

export default HockeySchool;
