'use client';
import React from "react";
import "../styles/result.css";
import PieChart from "../components/PieChart";
import Recommendations from "@/components/Recommendations";
import { useSearchParams } from "next/navigation";

const Result = () => {
  const searchParams = useSearchParams();
  const gasBill = searchParams.get("gasBill");
  console.log('gasBill', gasBill);
  const electricBill = searchParams.get("electricBill");
  const recycle = searchParams.get("recycle");
  const carMileage = searchParams.get("carMileage");
  const flightsUnder4Hours = searchParams.get("flightsUnder4Hours");
  const flightsOver4Hours = searchParams.get("flightsOver4Hours");

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
        <div>{total} LBS of CO2</div>
    </div>
      <Recommendations />
    </div>
  );
};

export default Result;