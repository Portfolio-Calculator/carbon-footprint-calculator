'use client';
import React from "react";
import '../styles/result.css';
import PieChart from "../components/PieChart";

const result = () => {

  let electric = 100 * 105;
  let gas = 100 * 105;
  let carYearlyCareMileage = 10000 * .79;
  let numShortFlights = 1 * 1100;
  let numLongFlights = 2 * 4400;
  let totalFlights = numShortFlights + numLongFlights;
  let doesRecycle = false ? 350 : 0;
  let total = electric + gas + carYearlyCareMileage + totalFlights + doesRecycle;

  const data = {
    labels: ['Electric', 'Gas', 'Car', 'Flights', 'Recycle'],
    datasets: [
      {
        label: '# of Votes',
        data: [electric, gas, carYearlyCareMileage, totalFlights, doesRecycle],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <div className="backgroundImage"></div>
      <h1>Result</h1>
      <PieChart data={data}/>
      <div>TOTAL : {total}</div>
    </div>
  );
};

export default result;