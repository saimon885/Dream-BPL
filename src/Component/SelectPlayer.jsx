import React from "react";
import SingleCard from "./SingleCard";


const SelectPlayer = ({ purChasePlayer,removePlayer }) => {
//   console.log(purChasePlayer);
  return (
    <div className="mx-5 md:mx-0">
        {
        purChasePlayer.map(player => <SingleCard key={removePlayer.playerRating} removePlayer={removePlayer} player={player}></SingleCard>)
    }
    </div>
  );
};

export default SelectPlayer;
