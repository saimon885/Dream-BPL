import { Suspense, useState } from "react";
import "./App.css";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Banner from "./Component/Banner";
import Navbar from "./Component/navbar";
import AbailablePlayer from "./Component/AllPlayerData/AbailablePlayer";
import SubsCrive from "./Component/SubsCrive";
import Footer from "./Component/Footer";
import SelectPlayer from "./Component/SelectPlayer";
const PlayersDataLoad = async () => {
  const res = await fetch("player.json");
  return res.json();
};
const PlayerData = PlayersDataLoad();
function App() {
  const [Toogle, setToogle] = useState(true);
  const [AbailableValance, SetAbailableValance] = useState(80000000);
  const [purChasePlayer, setPurChasePlayer] = useState([]);
  const removePlayer = (p) => {
    console.log(p);
    const filterData = purChasePlayer.filter(
      (plr) => plr.playerName !== p.playerName
    );
    setPurChasePlayer(filterData);
    SetAbailableValance(
      AbailableValance + parseInt(p.bplPrice.split(",").join(""))
    );
  };
  // console.log(purChasePlayer);
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar AbailableValance={AbailableValance}></Navbar>
        <Banner></Banner>
        <div className="flex mx-3 md:mx-0 justify-between items-center my-10">
          <div>
            <h1 className="text-[17px] md:text-2xl font-semibold">
              {Toogle === true
                ? "Available Players"
                : `Selected Player (${purChasePlayer.length}/6)`}
            </h1>
          </div>
          <div>
            <button
              onClick={() => setToogle(true)}
              className={`btn ${Toogle === true ? "bg-[#E7FE29]" : ""}`}
            >
              Available
            </button>{" "}
            <button
              onClick={() => setToogle(false)}
              className={`btn ${Toogle === false ? "bg-[#E7FE29]" : ""}`}
            >
              Selected <span>({purChasePlayer.length})</span>
            </button>
          </div>
        </div>
        {Toogle ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AbailablePlayer
              AbailableValance={AbailableValance}
              purChasePlayer={purChasePlayer}
              setPurChasePlayer={setPurChasePlayer}
              SetAbailableValance={SetAbailableValance}
              PlayerData={PlayerData}
            ></AbailablePlayer>
          </Suspense>
        ) : (
          <SelectPlayer
            removePlayer={removePlayer}
            purChasePlayer={purChasePlayer}
          ></SelectPlayer>
        )}

        <SubsCrive></SubsCrive>
      </div>
      <Footer></Footer>
      {/* <ToastContainer/> */}
    </>
  );
}

export default App;
