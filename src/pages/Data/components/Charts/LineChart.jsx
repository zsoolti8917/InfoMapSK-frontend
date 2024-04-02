import React, { useState } from 'react';
import {transformUniversalJsonStatToChartData} from '../JsonstatToChart.jsx';
import {
    LineChart as RechartsLineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const LineChart = ({ dataset }) => {
  const [showNote, setShowNote] = useState(false);

    const data = transformUniversalJsonStatToChartData(dataset);
    console.log(data);
    const categoryKeys = [...new Set(data.flatMap(item =>
        Object.keys(item).filter(key => key !== 'year')
    ))];

    // Generate a unique stroke color for each line
    const strokeColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a28d82', '#d88282', '#82a8d8'];

    // Return null or a placeholder if data is not available
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
        <RechartsLineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {categoryKeys.map((key, index) => (
                <Line
                    type="monotone" // This prop defines the type of the line curve
                    key={key}
                    dataKey={key}
                    name={key}
                    stroke={strokeColors[index % strokeColors.length]} // Cycle through stroke colors
                    activeDot={{ r: 8 }} // Customizes the appearance of the active dot when hovered
                />
            ))}
        </RechartsLineChart>
    </ResponsiveContainer>
    </div>
    )
};

export default LineChart;
