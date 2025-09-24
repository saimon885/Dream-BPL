import React, { use } from "react";
import SelectedPlayer from "./SelectedPlayer";

const AbailablePlayer = ({
  PlayerData,
  SetAbailableValance,
  AbailableValance,
  purChasePlayer,
  setPurChasePlayer,
}) => {
  const totalPlayer = use(PlayerData);
  // console.log(totalPlayer);
  return (
    <div className="grid grid-cols-1 mx-7 md:mx-0 md:grid-cols-3 md:gap-5 gap-3">
      {totalPlayer.map((Player) => (
        <SelectedPlayer
          purChasePlayer={purChasePlayer}
          setPurChasePlayer={setPurChasePlayer}
          SetAbailableValance={SetAbailableValance}
          AbailableValance={AbailableValance}
          key={Player.playerRating}
          Player={Player}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default AbailablePlayer;
