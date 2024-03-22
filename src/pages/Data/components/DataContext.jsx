import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selection, setSelection] = useState({ type: 'slovakia', id: null });
    const [activeTab, setActiveTab] = useState('obyvatelstvo');
    const [data, setData] = useState({});
  
    // Function to determine which endpoint to hit based on selection type
    const fetchUrl = useCallback((type, id) => {
      switch (type) {
        case 'slovakia':
          console.log('slovakia');
          return `http://localhost:5500/api/slovakia/${id}/${activeTab}`;
        case 'region':
          console.log('region');
          return `http://localhost:5500/api/regions/${id}/${activeTab}`;
        case 'district':
          console.log('district');
          return `http://localhost:5500/api/districts/${id}/${activeTab}`;
        case 'city':
          console.log('city request sending...');
          console.log(activeTab)
          return `http://localhost:5500/api/cities/${id}/${activeTab}`;
        default:
          throw new Error(`Unknown selection type: ${type}`);
      }
    }, [activeTab]);

    useEffect(() => {
      const fetchData = async () => {
        if ((selection.type === 'slovakia' || selection.id) && selection.type) {
          const url = fetchUrl(selection.type, selection.id);
          try {
            const response = await axios.get(url);
            setData(prevData => ({
              ...prevData, 
              [activeTab]: {
                data: response.data,
                key: selection.key, // Adding a key to help React detect changes
              }
            }));
            console.log('Data fetched:', response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setData(prevData => ({ 
              ...prevData, 
              [activeTab]: null 
            }));
          }
        }
      };
  
      fetchData();
    }, [selection, fetchUrl, activeTab]); // Use selection as a dependency to trigger fetch
  
    const updateSelection = (type, id) => {
      setSelection({ type, id, key: Date.now() });

    };
  
    return (
      <DataContext.Provider value={{ selection, updateSelection, activeTab, setActiveTab, data }}>
      {children}
    </DataContext.Provider>
    );
};