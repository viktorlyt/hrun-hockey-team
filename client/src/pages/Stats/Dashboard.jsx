import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
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

  const [filters, setFilters] = useState({
    season: seasons[0],
    // gameType: Object.keys(GAME_TYPE)[0],
    gameType: GAME_TYPE.REGULAR,
    franchise: Object.keys(FRANCHISES)[0],
  });

  const [skaterCriteria, setSkaterCriteria] = useState("points");
  const [goalieCriteria, setGoalieCriteria] = useState("savePercentage");

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
        // value: key,
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
      // && stat.franchise === filters.franchise
    );
  }, [stats, filters]);

  const skaters = useMemo(() => {
    return filteredStats
      .filter((player) => player.playerType === "skater")
      .sort((a, b) => b[skaterCriteria] - a[skaterCriteria])
      .slice(0, 5);
  }, [filteredStats, skaterCriteria]);

  const goalies = useMemo(() => {
    return filteredStats
      .filter((player) => player.playerType === "goalie")
      .sort((a, b) => {
        if (goalieCriteria === "savePercentage" || goalieCriteria === "gaa") {
          return a[goalieCriteria] - b[goalieCriteria];
        }
        return b[goalieCriteria] - a[goalieCriteria];
      })
      .slice(0, 5);
  }, [filteredStats, goalieCriteria]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  console.log(`stats: ${JSON.stringify(stats, null, 2)}`);
  console.log(`filteredStats: ${JSON.stringify(filteredStats, null, 2)}`);
  console.log(`goalies: ${JSON.stringify(goalies, null, 2)}`);

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
            options={["savePercentage", "gaa", "shutouts"]}
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
