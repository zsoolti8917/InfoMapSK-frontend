import React from 'react';

const tabs = [
  { id: 'obyvatelstvo', label: 'Obyvateľstvo' },
  { id: 'ekonomickaAktivita', label: 'Ekonomická aktivita' },
  { id: 'pohnohospodarstvo', label: 'Poľnohospodárstvo' },
  { id: 'organizacnaStatistika', label: 'Organizačná štatistika' },
];

const Tabs = ({ activeTab , setActiveTab }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;