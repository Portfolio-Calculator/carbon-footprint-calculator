'use client';
import React from "react";
import "../styles/result.css";
import PieChart from "../components/PieChart";
import Recommendations from "@/components/Recommendations";
import { useRouter } from "next/g";

const Result = () => {
  const router = useRouter();
  const { gasBill, electricBill, recycle, carMileage, flightsUnder4Hours, flightsOver4Hours } = router.query;
  console.log(gasBill, electricBill, recycle, carMileage, flightsUnder4Hours, flightsOver4Hours)

  let electric = electricBill * 105;
  let gas = gasBill * 105;
  let carYearlyCareMileage = carMileage * .79;
  let numShortFlights = flightsUnder4Hours * 1100;
  let numLongFlights = flightsOver4Hours * 4400;
  let totalFlights = numShortFlights + numLongFlights;
  let doesRecycle = recycle ? 350 : 0;
  let total = electric + gas + carYearlyCareMileage + totalFlights + doesRecycle;

  const data = {
    labels: ['Electric', 'Gas', 'Car', 'Flights', 'Recycle'],
    datasets: [
      {
        label: 'lbs of CO2',
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
    <div>
      <div className="container">
        <div className="backgroundImage"></div>
        <h1>Result</h1>
        <p>Gas Bill: {gasBill}</p>
        <p>Electric Bill: {electricBill}</p>
        <p>Recycle: {recycle}</p>
        <p>Car Mileage: {carMileage}</p>
        <p>Flights under 4 Hours: {flightsUnder4Hours}</p>
        <p>Flights over 4 Hours: {flightsOver4Hours}</p>
        <PieChart data={data}/>
        <div>TOTAL : {total} </div>
    </div>
      <Recommendations />
    </div>
  );
};

export default Result;