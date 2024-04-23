import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { DataContext } from './DataContext.jsx';
const tabs = [
  { id: 'obyvatelstvo', label: 'Obyvateľstvo' },
  { id: 'ekonomickaAktivita', label: 'Ekonomická aktivita' },
  { id: 'pohnohospodarstvo', label: 'Poľnohospodárstvo' },
  { id: 'organizacnaStatistika', label: 'Organizačná štatistika' },
];

const Tabs = ({ activeTab, setActiveTab, selection, listData }) => {
  const [selectedName, setSelectedName] = useState('');
  const { dataHolderRef } = useContext(DataContext);

  useEffect(() => {
    // Find the item in the list data
    const selectedItem = listData.find(item => item.IDN === selection.id && item.type === selection.type);
    if (selectedItem) {
      setSelectedName(selectedItem.name);
    } else {
      setSelectedName('Slovensko');
    }
  }, [selection, listData]);
  return (
    <div className='bg-primary-700 w-full pt-10' ref={dataHolderRef}>
      <div className="text-white mb-12 text-2xl text-center px-8 md:px-4">
        Zvolené: {selectedName} ({selection.type.toUpperCase()} - ID: {selection.id || 'None'})
      </div>
      <div className="flex md:justify-between flex-col gap-4 md:flex-row space-x-1 bg-primary-700 max-w-[80%] mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out ${
              activeTab === tab.id
                ? 'bg-primary-300 text-white'
                : 'bg-white text-secondary-900 hover:bg-blue-100 hover:text-primary-300'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Tabs;
