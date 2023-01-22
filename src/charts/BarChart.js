import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS, scales, Ticks} from 'chart.js/auto';
const BarChart = ({chartData}) => {
  return (
    <div>
        <Bar data={chartData} height={300}/>
    </div>
  )
}

export default BarChart