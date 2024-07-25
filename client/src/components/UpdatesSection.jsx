import UpdateCard from "./UpdateCard";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomePageSections";

const upcomingMatch = {
  team1: "Boston Bruins",
  team2: "Florida Panthers",
  dateTime: "2024-12-15T17:30:00Z",
};

const recentUpdates = [
  {
    id: 1,
    title: "UEFA Champions League",
    league1: "BB",
    league2: "NHL",
    league1Img: "assets/images/league_logo_bb.png",
    league2Img: "assets/images/league_logo_nhl.png",
    date: "May 12, 2024",
    league1Score: 4,
    league2Score: 5,
  },
  {
    id: 2,
    title: "UEFA Champions League",
    league1: "DS",
    league2: "TBL",
    league1Img: "assets/images/league_logo_ds.png",
    league2Img: "assets/images/league_logo_tbl.png",
    date: "May 12, 2024",
    league1Score: 4,
    league2Score: 5,
  },
  {
    id: 3,
    title: "UEFA Champions League",
    league1: "BB",
    league2: "SK",
    league1Img: "assets/images/league_logo_bb.png",
    league2Img: "assets/images/league_logo_sk.png",
    date: "May 12, 2024",
    league1Score: 4,
    league2Score: 5,
  },
];

const now = new Date();
const matchDateTime = new Date(upcomingMatch.dateTime);

const timeDiff = matchDateTime - now;

const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

const UpdatesSection = () => {
  return (
    <Wrapper>
      <div className="home-page-section">
        <div className="section-title-container">
          <h1 className="section-title">Hockey info and updates</h1>
          <div className="upcoming-match">
            <div className="teams">
              <h4>Upcoming match</h4>
              <p className="b4">
                {upcomingMatch.team1} VS {upcomingMatch.team2}
              </p>
            </div>
            <div className="time-left-container">
              <div className="time-left right-border">
                <h4>{days}</h4>
                <p className="b4">Days</p>
              </div>
              <div className="time-left right-border">
                <h4>{hours}</h4>
                <p className="b4">Hours</p>
              </div>
              <div className="time-left right-border">
                <h4>{minutes}</h4>
                <p className="b4">Minutes</p>
              </div>
              <div className="time-left">
                <h4>{seconds}</h4>
                <p className="b4">Seconds</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-section-container update-cards">
          {recentUpdates.map((u) => (
            <UpdateCard
              key={u.id}
              id={u.id}
              title={u.title}
              league1={u.league1}
              league2={u.league2}
              league1Img={u.league1Img}
              league2Img={u.league2Img}
              date={u.date}
              league1Score={u.league1Score}
              league2Score={u.league2Score}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default UpdatesSection;
