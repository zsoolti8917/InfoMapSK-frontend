import React, { useState } from 'react';
import { transformUniversalJsonStatToChartData } from '../JsonstatToChart.jsx';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const StackedBarChart = ({ dataset, id }) => {
  const data = transformUniversalJsonStatToChartData(dataset);
  const [showNote, setShowNote] = useState(false);

  let categoryKeys = [];
  if (id === "obyvatelstvoTabulka1") {
    categoryKeys = ["Muži", "Ženy"];
  } else {
    categoryKeys = [...new Set(data.flatMap(item =>
      Object.keys(item).filter(key => key !== 'year')
    ))];
  }
  
  const fillColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a28d82', '#d88282', '#82a8d8'];

  return (
    <div>
      <div className="text-center">
        <h2 className="font-semibold text-lg mb-2">{dataset.label}</h2>
        <button
          onClick={() => setShowNote(!showNote)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          {showNote ? 'Less Information' : 'More Information'}
        </button>
        {showNote && <p className="text-sm text-gray-700 mb-4 mx-auto max-w-4xl">{dataset.note}</p>}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {categoryKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              name={key}
              fill={fillColors[index % fillColors.length]}
              stackId="a"
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
