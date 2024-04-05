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
  ResponsiveContainer
} from 'recharts';

const StackedBarChart = ({ dataset, id, title }) => {
  const [showNote, setShowNote] = useState(false);

  const data = transformUniversalJsonStatToChartData(dataset);

  // Check if the ID matches "obyvatelstvoTabulka1"
  // If so, use only "Muži" and "Ženy" as categories
  let categoryKeys = [];
  if (id === "obyvatelstvoTabulka1") {
    categoryKeys = ["Muži", "Ženy"];
  } else {
    categoryKeys = [...new Set(data.flatMap(item =>
      Object.keys(item).filter(key => key !== 'year')
    ))];
  }
  
  
  // Generate a unique fill color for each stacked segment
  const fillColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a28d82', '#d88282', '#82a8d8'];

  // Return null or a placeholder if data is not available
  return (
<div className='w-full mt-10'>
      <div className='w-[85%] mx-auto'>
        <h2 className="font-semibold text-3xl mb-2 text-white">{title}</h2>
        
      </div>
    <ResponsiveContainer width="90%" className='mx-auto' height={400}>
      <RechartsBarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" stroke='white'/>
        <YAxis stroke='white'/>
        <Tooltip />
        <Legend />
        {categoryKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            name={key}
            fill={fillColors[index % fillColors.length]} // Cycle through fill colors
            stackId="a" // Assign a common stackId to stack them together
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
    <div className='max-w-[80%] mx-auto text-end'>
      <button
          onClick={() => setShowNote(!showNote)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          {showNote ? 'Less Information' : 'More Information'}
        </button>
        {showNote && <p className="text-sm text-primary-100 mx-auto w-full text-left">{dataset.note}</p>}
      </div>
    </div>
  );
};

export default StackedBarChart;
