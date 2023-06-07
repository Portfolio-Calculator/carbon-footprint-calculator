import React from "react";
import "../styles/result.css";
import PieChart from "../components/PieChart";
import Recommendations from "@/components/Recommendations";
const result = () => {
  return (
    <div>
      <div className="container">
        <div className="backgroundImage"></div>
        <h1>Result</h1>
        <PieChart />
      </div>
      <Recommendations />
    </div>
  );
};

export default result;
