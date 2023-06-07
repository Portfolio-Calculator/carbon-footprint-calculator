'use client';
import React from "react";
import "../styles/result.css";
import PieChart from "../components/PieChart";
import Recommendations from "@/components/Recommendations";
import { useRouter } from "next/router";

const Result = () => {
  const router = useRouter();
  const { gasBill, electricBill, recycle, carMileage, flightsUnder4Hours, flightsOver4Hours } = router.query;

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
        <PieChart />
      </div>
      <Recommendations />
    </div>
  );
};

export default Result;

