import React from "react";
import { format, parseISO } from "date-fns";
import Wrapper from "../assets/wrappers/Events";
import EventCard from "../components/EventCard";
import { mockEvents } from "../data/mockData";

const events = mockEvents;

const Events = () => {
  const formatDates = (startDate, endDate) => {
    // Remove the colon from the timezone offset
    const parseDate = (dateString) => {
      const formattedDate = dateString.replace(
        /(T\d{2}:\d{2}:\d{2})-(\d{1}):(\d{2})/,
        "$1-0$2$3"
      );
      return parseISO(formattedDate);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    if (start.getMonth() === end.getMonth()) {
      return `${format(start, "MMMM d")}-${format(end, "d")}`;
    } else {
      return `${format(start, "MMMM d")}-${format(end, "MMMM d")}`;
    }
  };

  return (
    <Wrapper>
      <h1>Events</h1>
      <div className="events">
        {events.map((e) => (
          <EventCard
            key={e.eventId}
            id={e.eventId}
            name={e.name}
            dates={formatDates(e.startDate, e.endDate)}
            location={e.location}
            price={e.price}
            img={e.img}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Events;
