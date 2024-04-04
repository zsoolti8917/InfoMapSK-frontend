import React from 'react';

const tabs = [
  { id: 'obyvatelstvo', label: 'Obyvateľstvo' },
  { id: 'ekonomickaAktivita', label: 'Ekonomická aktivita' },
  { id: 'pohnohospodarstvo', label: 'Poľnohospodárstvo' },
  { id: 'organizacnaStatistika', label: 'Organizačná štatistika' },
];

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className='bg-primary-700 w-full pt-10'>

    
    <div className="flex justify-between space-x-1 bg-primary-700  max-w-[80%] mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 text-sm font-medium rounded-md transition duration-150 ease-in-out ${
            activeTab === tab.id
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700'
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
