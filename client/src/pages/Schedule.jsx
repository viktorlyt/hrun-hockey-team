import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  parseISO,
  min,
  max,
  addMonths,
} from "date-fns";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Wrapper from "../assets/wrappers/Schedule";
import customFetch from "../utils/customFetch";
import { shouldUseMockData } from "../utils/environment";
import { mockGames } from "../data/mockData.js";

export const loader = async ({ request }) => {
  try {
    if (shouldUseMockData) {
      console.log("Using mock data");
      return { data: { games: mockGames } };
    }
    const { data } = await customFetch.get("/games");
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
  const games = data.games || [];

  const gameDates = games.map((game) => parseISO(game.datetime));
  const earliestDate = min(gameDates);
  const latestDate = max(gameDates);

  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(addDays(monthEnd, 7));

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  }).slice(0, 35);

  const getGamesForDay = (day) => {
    return games.filter((game) => isSameDay(new Date(game.datetime), day));
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

  const weekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDateChange = (date) => {
    if (date >= earliestDate && date <= latestDate) {
      setCurrentDate(date);
    }
  };

  const handlePrevMonth = () => {
    const newDate = addMonths(currentDate, -1);
    if (startOfMonth(newDate) >= startOfMonth(earliestDate)) {
      setCurrentDate(newDate);
    }
  };

  const handleNextMonth = () => {
    const newDate = addMonths(currentDate, 1);
    if (startOfMonth(newDate) <= startOfMonth(latestDate)) {
      setCurrentDate(newDate);
    }
  };

  const isPrevMonthDisabled =
    startOfMonth(currentDate) <= startOfMonth(earliestDate);
  const isNextMonthDisabled = endOfMonth(currentDate) >= endOfMonth(latestDate);

  return (
    <Wrapper>
      <div className="calendar-container">
        <div className="calendar-header-container">
          <MdKeyboardArrowLeft
            className={`arrow ${isPrevMonthDisabled ? "disabled" : ""}`}
            onClick={handlePrevMonth}
          />
          <DatePicker
            selected={currentDate}
            onChange={handleDateChange}
            dateFormat="MMM yyyy"
            showMonthYearPicker
            minDate={earliestDate}
            maxDate={latestDate}
          />
          <MdKeyboardArrowRight
            className={`arrow ${isNextMonthDisabled ? "disabled" : ""}`}
            onClick={handleNextMonth}
          />
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
                !isSameMonth(day, currentDate) ? "next-month" : ""
              } ${getGamesForDay(day).length > 0 ? "has-game" : ""}`}
            >
              <div className="day-info">
                <span className="day-number">{format(day, "d")}</span>
                <span className="weekday-label">{format(day, "EEE")}</span>
              </div>
              {getGamesForDay(day).map((game) => (
                <Link
                  to={`/games/${game.gameId}`}
                  key={game.gameId}
                  className="game-link"
                >
                  <div className="game">
                    <div className="game-teams-logo">
                      <img
                        src={game.team1Logo}
                        alt={game.team1}
                        className="team-logo"
                      />
                      <span>@</span>
                      <img
                        src={game.team2Logo}
                        alt={game.team2}
                        className="team-logo"
                      />
                    </div>
                    <div className="game-teams-names">
                      {game.team1} @ {game.team2}
                    </div>
                    <div className="game-time">
                      {format(new Date(game.datetime), "hh:mm a")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="calendar-footer-container">
          <div
            className={`left ${isPrevMonthDisabled ? "disabled" : ""}`}
            onClick={handlePrevMonth}
          >
            <MdKeyboardArrowLeft className="arrow" />
            <h4 className="calendar-footer">
              {format(addMonths(currentDate, -1), "MMM yyyy")}
            </h4>
          </div>
          <div
            className={`right ${isNextMonthDisabled ? "disabled" : ""}`}
            onClick={handleNextMonth}
          >
            <h4 className="calendar-footer">
              {format(addMonths(currentDate, 1), "MMM yyyy")}
            </h4>
            <MdKeyboardArrowRight className="arrow" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Schedule;
