import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto';
import { Pie } from 'react-chartjs-2'
const PieChart = ({chartData}) => {
  return (
    <div>
        <Pie data={chartData} />
    </div>
  )
}

export default PieChart;