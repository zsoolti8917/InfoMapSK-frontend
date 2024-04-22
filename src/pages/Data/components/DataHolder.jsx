import Button from '../../../components/Button.jsx'
import DataHolderItem from './DataHolderItem.jsx'
import React, {useContext} from 'react'
import { DataContext } from './DataContext.jsx'
import MyBarChart from './Charts/BarChart.jsx'
import LineChart from './Charts/LineChart.jsx'
import StackedBarChart from './Charts/StackedBarChart.jsx'
import MultipleLineChart from './Charts/MultipleLineChart.jsx'
import VerticalStackedBarChart from './Charts/VerticalStackedBarChart.jsx'

const chartComponentMap = {
    obyvatelstvoTabulka1: StackedBarChart,
    obyvatelstvoTabulka2: MultipleLineChart,
    obyvatelstvoTabulka3: MyBarChart,
    obyvatelstvoTabulka4: MyBarChart,

    ekonomikaTabulka1: MultipleLineChart,
    ekonomikaTabulka2: StackedBarChart,
    ekonomikaTabulka3: MultipleLineChart,
    ekonomikaTabulka4: MultipleLineChart,

    polnoTabulka1: StackedBarChart,
    polnoTabulka2: VerticalStackedBarChart,
    polnoTabulka3: VerticalStackedBarChart,

    organTabulka1: LineChart,
    organTabulka2: MyBarChart,
    organTabulka3: MyBarChart,
  };
  
  const DataHolder = () => {
    const { activeTab, data, isLoading, error, selection } = useContext(DataContext); // Assuming isLoading and error are part of your context
    const categoryData = data[activeTab];
    // Function to determine which chart component to render based on dataset ID
    const renderChartComponent = (dataset, index) => {
      // Check if dataset.data exists
      if (!dataset.data) {
          // Here you can return null or any other fallback UI element if dataset.data doesn't exist
          return <div key={`no-data-${index}`}>No data available for ID: {dataset.id}</div>;
      }
  
      const ChartComponent = chartComponentMap[dataset.id];
      if (!ChartComponent) {
          return <div key={`error-${index}`}>Chart not found for ID: {dataset.id}</div>;
      }
  
      return (
        <div className='bg-primary-700 flex flex-col overflow-hidden ' key={dataset.id}>
          
        <ChartComponent dataset={dataset.data} id={dataset.id} title={dataset.title} />;
        
        <hr className='max-w-[90%] w-full mx-auto '/>
        </div>
      )
  };
    
  return (
    <div className='min-h-80' >
        {isLoading ? (
            <div className='bg-primary-700 h-96 text-white text-2xl text-center pt-16'>Loading data, please wait...</div>
        ) : error ? (
            <div className='bg-primary-700 h-96 text-white text-2xl text-center pt-16'>Error loading data: {error}</div>
        ) : categoryData ? (
            categoryData.data.map((dataset, index) => renderChartComponent(dataset, index))
        ) : (
            <div className='bg-primary-700 h-96 text-white text-2xl text-center pt-16'>Select a category...</div>
        )}
    </div>
);
    };

export default DataHolder
