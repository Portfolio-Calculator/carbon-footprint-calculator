'use client';
import React from "react";
import "../styles/result.css";
import PieChart from "../components/PieChart";
import Recommendations from "@/components/Recommendations";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSearchParams } from "next/navigation";

const Result = () => {
  const searchParams = useSearchParams();
  const gasBill = searchParams.get("gasBill");
  const electricBill = searchParams.get("electricBill");
  const recycle = searchParams.get("recycle");
  const carMileage = searchParams.get("carMileage");
  const flightsUnder4Hours = searchParams.get("flightsUnder4Hours");
  const flightsOver4Hours = searchParams.get("flightsOver4Hours");

  let electric = electricBill * 105 / 1000;
  let gas = gasBill * 105 / 1000;
  let carYearlyCareMileage = carMileage * .79 / 1000;
  let numShortFlights = flightsUnder4Hours * 1100 / 1000;
  let numLongFlights = flightsOver4Hours * 4400 / 1000;
  let totalFlights = numShortFlights + numLongFlights;
  let doesRecycle = recycle ? 350 / 1000 : 0;
  let total = electric + gas + carYearlyCareMileage + totalFlights + doesRecycle;

  const data = {
    labels: ['Electric', 'Gas', 'Car', 'Flights', 'Recycle'],
    datasets: [
      {
        label: 'Tonnes of CO2',
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
      <Tabs>
        <TabList className="custom-tab-list">
          <Tab>Facts & Figures</Tab>
          <Tab>Recommendations</Tab>
          <Tab>Something Else</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="container">
              <div className="backgroundImage"></div>
              <h1>Facts & Figures</h1>
              <PieChart data={data}/>
              <h2>Your Carbon Footprint</h2>
              <div>{total} (CO2 emissions in tonnes per year)</div>
              <ul>
                <li>Low Carbon Footprint: 6,000 to 15,999</li>
                <li>Medium Carbon Footprint: 16,000 to 23,999</li>
                <li>High Carbon Footprint: 24,000 to 31,999</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <Recommendations />
        </TabPanel>
        <TabPanel>
          <div>hi mom</div>
        </TabPanel>
      </Tabs>
    </div>

  );
};

export default Result;