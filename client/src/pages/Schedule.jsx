import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addDays,
  isSameMonth,
  isSameDay,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Wrapper from "../assets/wrappers/Schedule";
import customFetch from "../utils/customFetch";
import { shouldUseMockData } from "../utils/environment";
import { mockEvents } from "../data/mockData.js";

export const loader = async ({ request }) => {
  try {
    if (shouldUseMockData) {
      console.log("Using mock data");
      return { data: { events: mockEvents } };
    }
    const { data } = await customFetch.get("/events");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Schedule = () => {
  const { data } = useLoaderData();
  const events = data.events || [];

  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(addDays(monthEnd, 7));

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  }).slice(0, 35);

  const getEventsForDay = (day) => {
    return events.filter((event) => isSameDay(new Date(event.datetime), day));
  };

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Wrapper>
      <div className="calendar-container">
        <div className="calendar-header-container">
          <MdKeyboardArrowLeft className="arrow" />
          <h4 className="calendar-header">{format(today, "MMMM yyyy")}</h4>
          <MdKeyboardArrowRight className="arrow" />
        </div>
        <div className="weekday-header">
          {weekDays.map((day, index) => (
            <div key={index} className="weekday-name">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-grid">
          {days.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${
                !isSameMonth(day, today) ? "next-month" : ""
              } ${getEventsForDay(day).length > 0 ? "has-event" : ""}`}
            >
              <div className="day-number">{format(day, "d")}</div>
              {getEventsForDay(day).map((event) => (
                <Link
                  to={`/events/${event.eventId}`}
                  key={event.eventId}
                  className="event-link"
                >
                  <div className="event">
                    <div className="event-teams-logo">
                      <img
                        src={event.team1Logo}
                        alt={event.team1}
                        className="team-logo"
                      />
                      <span>@</span>
                      <img
                        src={event.team2Logo}
                        alt={event.team2}
                        className="team-logo"
                      />
                    </div>
                    <div className="event-teams-names">
                      {event.team1} @ {event.team2}
                    </div>
                    <div className="event-time">
                      {format(new Date(event.datetime), "HH:mm")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Schedule;
