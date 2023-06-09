import React from 'react';
import PieChart from "./PieChart";

const ChartsAndFigures = ({ data, total }) => {
  return (
    <div>
      <div className="container">
        <h1>Charts & Figures</h1>
        <PieChart data={data} />
        <h2>Your Carbon Footprint</h2>
        <div>{total} (CO2 emissions in tonnes per year)</div>
        <ul>
          <li>Low Carbon Footprint: 6,000 to 15,999</li>
          <li>Medium Carbon Footprint: 16,000 to 23,999</li>
          <li>High Carbon Footprint: 24,000 to 31,999</li>
        </ul>
      </div>
    </div>
  );
};

export default ChartsAndFigures;
