import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import "../styles/ChartsAndFigures.css";
const ChartsAndFigures = ({ data, total }) => {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-4 -mt-20 text-center">
        Your Carbon Footprint
      </h2>
      <PieChart data={data} />
      <div className="mb-6 text-center">
        Your annual CO2 emissions amount to <strong>{total.toFixed(2)}</strong>{" "}
        metric tonnes
      </div>
      <ul>
        <li className="font-semibold mb-2">
          Low Carbon Footprint: 6.00 to 15.99
          {/* Low Carbon Footprint: 0 to 2 metric tonnes per year */}
        </li>
        <li className="font-semibold mb-2">
          Medium Carbon Footprint: 16.00 to 23.99
          {/* Medium Carbon Footprint: 2 to 5 metric tonnes per year */}
        </li>
        <li className="font-semibold">
          High Carbon Footprint: 24.00 to 31.99
          {/* High Carbon Footprint: more than 5 metric tonnes per year */}
        </li>
      </ul>
      <BarChart data={data} />
    </div>
  );
};

export default ChartsAndFigures;
