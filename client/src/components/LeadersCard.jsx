import { useState } from "react";
import Wrapper from "../assets/wrappers/LeadersCard";
import { Link } from "react-router-dom";

const LeadersCard = ({ skaterType, players, criteria }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  console.log(`player 0: ${selectedPlayer}`);

  return (
    <Wrapper>
      <div className="player-container">
        <img
          src={selectedPlayer.img}
          className="player-image"
          alt={`${selectedPlayer.firstName} ${selectedPlayer.lastName}`}
        />
        <h2>{selectedPlayer.firstName}</h2>
        <h2>{selectedPlayer.lastName}</h2>
        <div className="details">
          <img
            src={selectedPlayer.img}
            className="team-logo"
            alt="Castors' Logo"
          />
          CASTORS • #{selectedPlayer.number} • {selectedPlayer.position}
        </div>
        <h3 className="result-name">{criteria}</h3>
        <h1 className="result-value">{selectedPlayer[criteria]}</h1>
      </div>
      <div className="players-list">
        <ol>
          {players.map((p) => (
            <li key={p.playerId} onClick={() => handlePlayerClick(p)}>
              <div className="name">
                {p.firstName} {p.lastName}{" "}
              </div>
              {p[criteria]}
            </li>
          ))}
        </ol>
        <Link to={`/stats/${skaterType}s`}>
          <button>See more</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default LeadersCard;
