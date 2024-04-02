import React from 'react';
import { transformUniversalJsonStatToChartData } from '../JsonstatToChart.jsx';
import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const HorizontalStackedBarChart = ({ dataset }) => {
  const data = transformUniversalJsonStatToChartData(dataset);
  const categoryKeys = Object.keys(data[0]).filter(key => key !== 'year');

  // Generate a unique fill color for each stacked segment
  const fillColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a28d82', '#d88282', '#82a8d8'];

  return (
    <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" width={80} /> {/* 'year' is not included in categoryKeys */}
            <Tooltip />
            <Legend />
            {categoryKeys.map((key, index) => (
                <Bar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    fill={fillColors[index % fillColors.length]}
                />
            ))}
        </RechartsBarChart>
    </ResponsiveContainer>
);
};

export default HorizontalStackedBarChart;
