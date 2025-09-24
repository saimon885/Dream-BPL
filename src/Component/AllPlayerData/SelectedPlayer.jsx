import React, { useState } from "react";


const SelectedPlayer = ({
  Player,
  SetAbailableValance,
  AbailableValance,
  purChasePlayer,
  setPurChasePlayer,
}) => {
  const {
    playerImage,
    playerName,
    playerCountry,
    playerRole,
    playerRating,
    battingStyle,
    bowlingStyle,
  } = Player;
  const [isSelected, setIsSelected] = useState(false);
  const PlayerdData = (playerdata) => {
    const bplPricec = parseInt(playerdata.bplPrice.split(",").join(""));
    if (AbailableValance < bplPricec){
      alert("আপনার একাউন্টে পর্যাপ্ত ব্যালেন্স নেই।।");
      return;
    }
    if(purChasePlayer.length === 6){
      alert("6 player is alrady selected");
      return;
    }
    setIsSelected(true);
    SetAbailableValance(AbailableValance - bplPricec);
    setPurChasePlayer([...purChasePlayer, Player]);
  };
  return (
    <div>
      <div class="card bg-base-100 shadow-sm md:p-4 p-5 h-full">
        <figure>
          <img
            className="w-full h-[250px] object-cover"
            src={playerImage}
            alt="Player"
          />
        </figure>
        <div class="space-y-2 mt-3 border-b-2 border-b-[#e2dddda2] pb-3">
          <h1 className="text-[20px] font-semibold">👤 {playerName}</h1>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">🏴 {playerCountry}</h1>
            <span class="font-semibold bg-[#e2dddda2] p-2 rounded-2xl">
              {playerRole}
            </span>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          <h1 className="font-semibold text-[18px]">
            Ratting : {playerRating}
          </h1>
          <div className="flex justify-between items-center">
            <div className="text-[18px] font-semibold">{battingStyle}</div>
            <div className="text-[18px] text-[#9b9696e7] font-semibold">
              {bowlingStyle}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[18px] font-semibold">
              Price : $<span>{Player.bplPrice} USD</span>
            </div>
            <button
              disabled={isSelected}
              onClick={() => PlayerdData(Player)}
              class="btn"
            >
              {isSelected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
