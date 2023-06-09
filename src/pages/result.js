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

  let electric = (electricBill * 105) / 1000;
  let gas = (gasBill * 105) / 1000;
  let carYearlyCareMileage = (carMileage * 0.79) / 1000;
  let numShortFlights = (flightsUnder4Hours * 1100) / 1000;
  let numLongFlights = (flightsOver4Hours * 4400) / 1000;
  let totalFlights = numShortFlights + numLongFlights;
  let doesRecycle = recycle ? 350 / 1000 : 0;
  let total =
    electric + gas + carYearlyCareMileage + totalFlights + doesRecycle;

  const data = {
    labels: ["Electric", "Gas", "Car", "Flights", "Recycle"],
    datasets: [
      {
        label: "Tonnes of CO2",
        data: [electric, gas, carYearlyCareMileage, totalFlights, doesRecycle],
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
            <Recommendations />
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
