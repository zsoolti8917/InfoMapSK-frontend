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
    const { activeTab, data, isLoading, error } = useContext(DataContext); // Assuming isLoading and error are part of your context
    const categoryData = data[activeTab];
  
    // Function to determine which chart component to render based on dataset ID
    const renderChartComponent = (dataset, index) => {
        const ChartComponent = chartComponentMap[dataset.id];
        if (!ChartComponent) {
          return <div key={`error-${index}`}>Chart not found for ID: {dataset.id}</div>;
        }
    
        return <ChartComponent key={dataset.id} dataset={dataset.data} />;
      };
    
      if (isLoading) {
        return <div>Loading data, please wait...</div>;
      }
    
      if (error) {
        return <div>Error loading data: {error}</div>; // Display error message
      }
    
      if (!categoryData) {
        return <div>Select a category...</div>;
      }
    
      return (
        <div>
          {categoryData.data.map((dataset, index) => renderChartComponent(dataset, index))}
        </div>
      );
    };

export default DataHolder


/*const DataHolder = () => {
    const { activeTab, data } = useContext(DataContext);
    const categoryData = data[activeTab];

    const renderChart = () => {
        // Ensure categoryData is defined before trying to render DataHolderItem
        if (!categoryData) return <div>Loading or select a category...</div>;
    
        return <DataHolderItem data={categoryData} />;
      };
  
    return (
      <div>
        {renderChart()}
      </div>
    );
}*/
/*<section className='bg-secondary-800 text-primary-100'>
<div className='desktop:max-w-container lg:max-w-[800px] flex items-center flex-col m-auto gap-6 py-8 px-6'>
    <div className='flex gap-2 w-full flex-wrap'>
        <button className='px-16 py-2 bg-primary-300 flex-1 hover:bg-primary-100 hover:text-secondary-900 ease-in transition-all duration-200'>
            Animovaná vizualizácia
        </button>
        <button className='px-16 py-2 bg-primary-300 flex-1 hover:bg-primary-100 hover:text-secondary-900 ease-in transition-all duration-200'>
            Analizovaná vizualizácia
        </button>
    </div>
    <div className='flex flex-wrap gap-6 desktop:justify-between desktop:gap-0 desktop:w-full justify-center'>
        <Button>
            Obyvateľstvo
        </Button>
        <Button>
            Ekonomická aktivita
        </Button>
        <Button>
            Poľnohospodárstvo
        </Button>
        <Button>
            Organizačná štatistika
        </Button>
    </div>
    <div className='flex flex-col'>
       <DataHolderItem />
       <DataHolderItem />
       <DataHolderItem />
       <DataHolderItem />
        <div className='mt-20 flex justify-end'>
        <Button>
            Späť na mapu
        </Button>
        </div>
        
    </div>
</div>
</section>*/