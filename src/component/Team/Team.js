import React, { useEffect, useState } from "react";
import fakedata from "../../fakedata/data.json";
import Club from "../Club/Club";
import Player from "../Player/Player ";
import "./Team.css";
const Team = () => {
  useEffect(() => {
    setPlayers(fakedata);
  }, []);
  const [players, setPlayers] = useState([]);
  const [carts, setCurt] = useState ([]);
  const handleAddPlayer = (player) => {
    const newCart = [...carts,player]
    setCurt(newCart)
  };
  return (
    <div>
      <div className="players-container">
        <div className="player-info">
          {players.map((player) => (
            <Player
              player={player}
              key={player.id}
              handleAddPlayer={handleAddPlayer}
            ></Player>
          ))}
        </div>
        <div className="add-players">
          <Club cart={carts}></Club>
        </div>
      </div>
    </div>
  );
};

export default Team;
