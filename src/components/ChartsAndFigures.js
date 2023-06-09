import React from 'react';
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const ChartsAndFigures = ({ data, total }) => {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-4 -mt-20 text-center">Your Carbon Footprint</h2>
      <div className="mb-6 text-center"> {total} (CO2 emissions in tonnes per year)</div>
      <ul className="mb-8">
        <li className="font-semibold mb-2">Low Carbon Footprint: 6,000 to 15,999</li>
        <li className="font-semibold mb-2">Medium Carbon Footprint: 16,000 to 23,999</li>
        <li className="font-semibold">High Carbon Footprint: 24,000 to 31,999</li>
      </ul>
      <PieChart data={data} />
      <BarChart data={data} />
    </div>
  );
};


export default ChartsAndFigures;
