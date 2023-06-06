'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({data}) {
  console.log(data)
  return (
    <div style={{ width: '30%', height: 'auto' }}>
      <Pie data={data} />
    </div>
    )
}
