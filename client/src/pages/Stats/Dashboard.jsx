import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Wrapper from "../../assets/wrappers/Dashboard";
import Dropdown from "../../components/Dropdown";
import LeadersCard from "../../components/LeadersCard";
import CriteriaSwitcher from "../../components/CriteriaSwitcher.jsx";
import { GAME_TYPE, FRANCHISES } from "../../utils/clientConstants";
import { mockTeamStats } from "../../data/mockData.js";

const stats = mockTeamStats;

const Dashboard = () => {
  const seasons = [...new Set(stats.map((s) => s.season))];
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    season: searchParams.get("season") || seasons[0],
    gameType: searchParams.get("gameType") || GAME_TYPE.REGULAR,
    franchise: searchParams.get("franchise") || Object.keys(FRANCHISES)[0],
  });

  const [skaterCriteria, setSkaterCriteria] = useState("points");
  const [goalieCriteria, setGoalieCriteria] = useState("sv");

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      newSearchParams.set(key, value);
    });
    setSearchParams(newSearchParams);
  }, [filters, setSearchParams]);

  const filterOptions = [
    {
      name: "season",
      label: "Seasons",
      options: seasons.map((season) => ({ value: season, label: season })),
    },
    {
      name: "gameType",
      label: "Game type",
      options: Object.entries(GAME_TYPE).map(([key, value]) => ({
        value: value,
        label: value,
      })),
    },
    {
      name: "franchise",
      label: "Franchise",
      options: Object.entries(FRANCHISES).map(([key, value]) => ({
        value: key,
        label: value,
      })),
    },
  ];

  const filteredStats = useMemo(() => {
    return stats.filter(
      (s) => s.season === filters.season && s.gameType === filters.gameType
      // && s.franchise === filters.franchise
    );
  }, [stats, filters]);

  const sumSkaterStats = (players) => {
    return players.reduce((acc, player) => {
      const key = `${player.firstName} ${player.lastName}`;
      if (!acc[key]) {
        acc[key] = {
          ...player,
          gamesPlayed: 0,
          points: 0,
          goals: 0,
          assists: 0,
        };
      }
      acc[key].gamesPlayed += player.gamesPlayed;
      acc[key].points += player.points;
      acc[key].goals += player.goals;
      acc[key].assists += player.assists;
      return acc;
    }, {});
  };

  const sumGoalieStats = (players) => {
    return players.reduce((acc, player) => {
      const key = `${player.firstName} ${player.lastName}`;
      if (!acc[key]) {
        acc[key] = {
          ...player,
          gamesPlayed: 0,
          saves: 0,
          shotsAgainst: 0,
          goalsAgainst: 0,
          shutouts: 0,
        };
      }
      acc[key].gamesPlayed += player.gamesPlayed;
      acc[key].saves += player.saves;
      acc[key].shotsAgainst += player.shotsAgainst;
      acc[key].goalsAgainst += player.goalsAgainst;
      acc[key].shutouts += player.shutouts;
      return acc;
    }, {});
  };

  const skaters = useMemo(() => {
    const skatersData = filteredStats.filter(
      (player) => player.playerType === "skater"
    );
    const summedSkaters = Object.values(sumSkaterStats(skatersData));
    return summedSkaters
      .map((player) => ({ ...player }))
      .sort((a, b) => b[skaterCriteria] - a[skaterCriteria])
      .slice(0, 5);
  }, [filteredStats, skaterCriteria]);

  const goalies = useMemo(() => {
    const goaliesData = filteredStats.filter(
      (player) => player.playerType === "goalie"
    );
    const summedGoalies = Object.values(sumGoalieStats(goaliesData));
    return summedGoalies
      .map((player) => ({
        ...player,
        sv: player.shotsAgainst ? player.saves / player.shotsAgainst : 0,
        gaa: player.timeOnIce
          ? // ? Math.round((player.goalsAgainst / (player.timeOnIce / 60)) * 100)
            player.goalsAgainst / (player.timeOnIce / 60)
          : 0,
      }))
      .sort((a, b) => {
        if (goalieCriteria === "sv" || goalieCriteria === "gaa") {
          return a[goalieCriteria] - b[goalieCriteria];
        }
        return b[goalieCriteria] - a[goalieCriteria];
      })
      .slice(0, 5);
  }, [filteredStats, goalieCriteria]);

  return (
    <Wrapper>
      <div className="filters-container">
        {filterOptions.map((f) => (
          <Dropdown
            key={f.name}
            name={f.name}
            labelText={f.label}
            options={f.options}
            defaultValue={filters[f.name]}
            isRequired={false}
            isFilter={true}
            onChange={(value) => handleFilterChange(f.name, value)}
          />
        ))}
      </div>
      <div className="players-container">
        <div className="skaters-container">
          <Link to="/stats/skaters" className="custom-link">
            <span className="link-text">Skaters</span>
            <span className="link-icon">
              <MdKeyboardArrowRight />
            </span>
          </Link>
          <CriteriaSwitcher
            criteria={skaterCriteria}
            setCriteria={setSkaterCriteria}
            options={["points", "goals", "assists"]}
          />
          <LeadersCard
            skaterType="skater"
            players={skaters}
            criteria={skaterCriteria}
          />
        </div>
        <div className="goalies-container">
          <Link to="/stats/goalies" className="custom-link">
            <span className="link-text">Goalies</span>
            <span className="link-icon">
              <MdKeyboardArrowRight />
            </span>
          </Link>
          <CriteriaSwitcher
            criteria={goalieCriteria}
            setCriteria={setGoalieCriteria}
            options={["gaa", "sv", "shutouts"]}
          />
          <LeadersCard
            skaterType="goalie"
            players={goalies}
            criteria={goalieCriteria}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
