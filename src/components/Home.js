import React, { useState } from "react";
import crypto from "./crypto.mp4.mp4";
import "./Home.css";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import { UserData } from "../charts/Data";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: "Market Cap",
        data: UserData.map((data) => data.market_cap),
        backgroundColor: ["#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="home-design">
      <div className="main">
        <video src={crypto} className="vid-bg" autoPlay muted loop></video>
      </div>
      <center>
        <h1 style={{ justifyContent: "center" }}>Top 3 Currency</h1>
      </center>
      <div style={{display:"flex",justifyContent:'space-evenly'}}>
        <div style={{ width: 500 }}>
          <PieChart chartData={userData} />
        </div>
        <div style={{width:500}}>
          <BarChart chartData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
