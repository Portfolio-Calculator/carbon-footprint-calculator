import React from "react";
import '../styles/result.css';
import PieChart from "../components/PieChart";

const result = () => {
  return (
    <div className="container">
      <div className="backgroundImage"></div>
      <h1>Result</h1>
      <PieChart />
    </div>
  );
};

export default result;