"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ data }) {

  // const data = {
  //   labels: [
  //     "Electric Emissions",
  //     "Vehicle Usage",
  //     "Flights",
  //     "Recycle",
  //     "Gas Emissions",
  //   ],
  //   datasets: [
  //     {
  //       label: "Tonnes of CO2",
  //       data: [
  //         0.975,
  //       ],
  //       backgroundColor: [
  //         "rgba(255, 99, 132)",
  //         "rgba(54, 162, 235)",
  //         "rgba(255, 206, 86)",
  //         "rgba(75, 192, 192)",
  //         "rgba(153, 102, 255)",
  //       ],
  //     },
  //   ],
  // };

  return (
    <div>
      <Bar data={data} />;
      {/* <Bar data={data} /> */}
    </div>
  );
}
