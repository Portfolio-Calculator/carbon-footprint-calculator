"use client";
import React, { useState } from "react";
import "../styles/result.css";
import Recommendations from "@/components/Recommendations";
import FactDisplay from "@/components/FactDisplay";
import ChartsAndFigures from "@/components/ChartsAndFigures";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSearchParams } from "next/navigation";

const Result = () => {
  const [activeTab, setActiveTab] = useState(0);
  const searchParams = useSearchParams();
  const gasBill = searchParams.get("gasBill");
  const electricBill = searchParams.get("electricBill");
  const recycle = searchParams.get("recycle");
  const carMileage = searchParams.get("carMileage");
  const flightsUnder4Hours = searchParams.get("flightsUnder4Hours");
  const flightsOver4Hours = searchParams.get("flightsOver4Hours");
  const electricSource = searchParams.get("electricSource");
  const vehicleType = searchParams.get("vehicleType");
  const numberOfPeople = searchParams.get("numberOfPeople");

  let electricEmissions = 0;
  let vehicleGasUsage = 0;
  let vehicleElectricityUsage = 0;
  let householdElectricityUsage = (electricBill * 105) / 1000;

  if (vehicleType === "gas") {
    vehicleGasUsage = (gasBill * 105) / 1000;
    vehicleGasUsage += (carMileage * 2.31) / 1000;
  } else if (vehicleType === "hybrid") {
    vehicleGasUsage = (gasBill * 75) / 1000;
    vehicleGasUsage += (carMileage * 1.56) / 1000;
  } else if (vehicleType === "electric") {
    vehicleElectricityUsage = (electricBill * 105) / 1000;
    vehicleElectricityUsage += (carMileage * 0.12) / 1000;
  }

  let electric = vehicleElectricityUsage + householdElectricityUsage;

  if (electricSource === "coal") {
    electricEmissions = electric * 975;
  } else if (electricSource === "petroleum") {
    electricEmissions = electric * 750;
  } else if (electricSource === "naturalGas") {
    electricEmissions = electric * 500;
  } else if (electricSource === "dontKnow") {
    electricEmissions = electric * 600;
  }

  let electricEmissionsPerPerson = electricEmissions / numberOfPeople;
  let vehicleGasUsagePerPerson = vehicleGasUsage / numberOfPeople;
  let numShortFlights = (flightsUnder4Hours * 1100) / 1000;
  let numLongFlights = (flightsOver4Hours * 4400) / 1000;
  let totalFlights = numShortFlights + numLongFlights;
  let doesRecycle = recycle ? 350 / 1000 : 0;
  let total =
    electricEmissionsPerPerson +
    vehicleGasUsagePerPerson +
    totalFlights +
    doesRecycle;

  const recommendationData = {
    electric: electricEmissionsPerPerson,
    gas: vehicleGasUsagePerPerson,
    flights: totalFlights,
    recycle: doesRecycle,
    electricSource: electricSource,
    vehicleType: vehicleType,
    total: total,
  };

  const data = {
    labels: [
      "Electric Emissions Per Person",
      "Vehicle Gas Usage Per Person",
      "Flights",
      "Recycle",
    ],
    datasets: [
      {
        label: "Tonnes of CO2",
        data: [
          electricEmissionsPerPerson,
          vehicleGasUsagePerPerson,
          totalFlights,
          doesRecycle,
        ],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pb-44">
      <div className="backgroundImage" />
      <div className="leaves" />

      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList className="custom-tab-list">
          <Tab className="custom-tab">Facts & Figures</Tab>
          <Tab className="custom-tab">Recommendations</Tab>
          <Tab className="custom-tab">Facts</Tab>
        </TabList>

        <div className="tabs-container">
          <TabPanel>
            <ChartsAndFigures data={data} total={total} />
          </TabPanel>
          <TabPanel>
            <Recommendations data={recommendationData} />
          </TabPanel>
          <TabPanel>
            <FactDisplay />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Result;
