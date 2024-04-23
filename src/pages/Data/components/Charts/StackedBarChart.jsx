import React, { useState, useEffect } from 'react';
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


const CustomTooltip = ({ active, payload, label, showFullTooltip }) => {
  if (active && payload && payload.length) {
      if (showFullTooltip) {
          return (
            <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #cccccc' }}>
            <p className="label">{`Rok: ${payload[0].payload.year}`}</p>
            {payload.map((entry, index) => (
                <div key={index} style={{ color: entry.color }}>
                    <span style={{ marginRight: '5px', width: '12px', height: '12px', backgroundColor: entry.color, display: 'inline-block' }}></span>
                    {`${entry.name}: ${entry.value}`}
                </div>
            ))}
        </div>
          );
      } else {
          return (
            <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #cccccc' }}>
            <p className="label">{`Rok: ${payload[0].payload.year}`}</p>
            {payload.map((entry, index) => (
                <div key={index} style={{ color: entry.color }}>
                    <span style={{ marginRight: '5px', width: '12px', height: '12px', backgroundColor: entry.color, display: 'inline-block' }}></span>
                    {`: ${entry.value}`}
                </div>
            ))}
        </div>
          );
      }
  }

  return null;
};

const StackedBarChart = ({ dataset, id, title }) => {
  const originalData = transformUniversalJsonStatToChartData(dataset);
  const [data, setData] = useState(originalData);
  const [showNote, setShowNote] = useState(false);
  const [showFullTooltip, setShowFullTooltip] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640 && id !== "polnoTabulka1") {
        // Filter to show only every other year on small screens
        const filteredData = originalData.filter((item, index) => index % 2 === 0);
        setData(filteredData);
        setShowFullTooltip(false);
      } else {
        setData(originalData);
        setShowFullTooltip(true);
      }
    }

    // Set the data initially and add event listener for resizing
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [originalData]);

  let categoryKeys = [];
  if (id === "obyvatelstvoTabulka1") {
    categoryKeys = ["Muži", "Ženy"];
  } else if (id === "ekonomikaTabulka2") {
    console.log(data)
    categoryKeys = ["Podiel osôb v poproduktívnom veku (Percento)", "Podiel osôb v predproduktívnom veku (Percento)", "Podiel osôb v produktívnom veku (Percento)"];
  } else {
    categoryKeys = [...new Set(data.flatMap(item =>
      Object.keys(item).filter(key => key !== 'year')
    ))];
  }

  const fillColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a28d82', '#d88282', '#82a8d8'];

  return (
    <div className='w-full mt-10'>
      <div className='w-[85%] mx-auto'>
        <h2 className="font-semibold text-xl mb-2 text-white lg:text-3xl">{title}</h2>
        
      </div>
      <ResponsiveContainer width="90%" height={400} className='mx-auto'>
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" stroke='white'/>
          <YAxis stroke='white'/>
          <Tooltip content={<CustomTooltip showFullTooltip={showFullTooltip}/>}/>
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
      <div className='max-w-[80%] mx-auto text-end'>
        <button
            onClick={() => setShowNote(!showNote)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          >
            {showNote ? 'Menej informácií' : 'Viac informácií'}
          </button>
          {showNote && <p className="text-sm text-primary-100 mx-auto w/full text-left">{dataset.note}</p>}
      </div>
    </div>
  );
};

export default StackedBarChart;
