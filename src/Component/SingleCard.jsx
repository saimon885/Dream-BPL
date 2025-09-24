import React from "react";
import binIMg from "../assets/bin.png";
const SingleCard = ({ player,removePlayer }) => {

    const handleRemove = ()=>{
        removePlayer(player)
    }
  // console.log(player);
  const { playerImage, playerName, playerRole } = player;
  return (
    <div className="flex shadow mb-3 items-center border border-red-400 p-2 rounded-2xl">
      <img
        className="w-[50px] h-[50px] object-cover rounded-2xl"
        src={playerImage}
        alt=""
      />
      <div className="flex justify-between items-center w-full ml-5">
        <div>
          <h1 className="text-[20px] font-semibold">{playerName}</h1>
          <h3><span className="font-semibold">{playerRole}</span>  </h3>
          {/* <h3>boaling</h3> */}
        </div>
        <div onClick={handleRemove}>
          <img className="w-[20px] mr-5" src={binIMg} alt="BIN" />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
