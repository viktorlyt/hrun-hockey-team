import React from "react";
import { format, parse } from "date-fns";
import Wrapper from "../assets/wrappers/HockeySchool";
import GroupCard from "../components/GroupCard";
import { mockGroups } from "../data/mockData";
import { WEEKDAYS } from "../utils/clientConstants";

const groups = mockGroups;

const HockeySchool = () => {
  const weekdays = [
    WEEKDAYS.MONDAY,
    WEEKDAYS.TUESDAY,
    WEEKDAYS.WEDNESDAY,
    WEEKDAYS.THURSDAY,
    WEEKDAYS.FRIDAY,
    WEEKDAYS.SATURDAY,
  ];

  // const formatTime = (timeString) => {
  //   const [hours, minutes] = timeString.split(":");
  //   const date = new Date(2000, 0, 1, hours, minutes);
  //   return date.toLocaleTimeString("en-US", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  // };

  const formatTime = (timeString) => {
    const date = parse(timeString, "HH:mm:ss", new Date());
    return format(date, "h:mm a");
  };

  const getTrainingTime = (group, day) => {
    const schedule = group.schedule.find((s) => s.weekday === day);
    if (schedule) {
      const startTime = formatTime(schedule.startTime);
      const endTime = formatTime(schedule.endTime);
      return `${startTime} - ${endTime}`;
    }
    return "-";
  };

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
      <div className="content-container">
        <p className="larger-font">
          Our team is committed to excellence both on and off the ice. Be sure
          to check out our schedule to stay informed about upcoming games,
          practice sessions, and special events. You won't want to miss a single
          moment of the action!
        </p>
        <div className="table-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Group/Day</th>
                {weekdays.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.groupId}>
                  <td>{group.name}</td>
                  {weekdays.map((day) => (
                    <td key={`${group.groupId}-${day}`}>
                      {getTrainingTime(group, day)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default HockeySchool;
