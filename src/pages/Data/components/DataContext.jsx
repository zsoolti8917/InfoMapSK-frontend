import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { set } from 'lodash';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selection, setSelection] = useState({ type: 'slovakia', id: null });
    const [activeTab, setActiveTab] = useState('obyvatelstvo');
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track errors
    // Function to determine which endpoint to hit based on selection type
    const STORAGE_KEYS = 'storage-keys';


    const updateStorageKeys = (newKey) => {
      const keys = JSON.parse(localStorage.getItem(STORAGE_KEYS)) || [];
      if (!keys.includes(newKey)) {
        keys.push(newKey);
      }
      localStorage.setItem(STORAGE_KEYS, JSON.stringify(keys));
    };
    
    const removeOldestItem = () => {
      const keys = JSON.parse(localStorage.getItem(STORAGE_KEYS)) || [];
      if (keys.length > 0) {
        const oldestKey = keys.shift(); // Remove the oldest key
        localStorage.removeItem(oldestKey);
        localStorage.setItem(STORAGE_KEYS, JSON.stringify(keys)); // Update the keys in local storage
      }
    };
    
    const safeSetItem = (key, value) => {
      try {
        localStorage.setItem(key, value);
        updateStorageKeys(key);
      } catch (e) {
        if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {
          removeOldestItem();
          localStorage.setItem(key, value);
          updateStorageKeys(key);
        }
      }
    };
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
        const storageKey = `${selection.type}-${selection.id}-${activeTab}`;
        const cachedData = localStorage.getItem(storageKey);
        const now = new Date();
    
        if (cachedData) {
          const { expiry, data } = JSON.parse(cachedData);
          if (now.getTime() < expiry) {
            console.log(`Loading data from local storage for ${activeTab}`);
            setData(prevData => ({
              ...prevData, 
              [activeTab]: {
                data,
                key: selection.key,
              }
            }));
            return; // Stop execution here to use the cached data
          } else {
            localStorage.removeItem(storageKey); // Remove expired data
          }
        }
    
        setIsLoading(true);
        setError(null);
        const url = fetchUrl(selection.type, selection.id);
        try {
          const response = await axios.get(url);
          const dataToStore = {
            data: response.data,
            expiry: now.getTime() + (7 * 24 * 60 * 60 * 1000), // 1 week expiry
          };
          safeSetItem(storageKey, JSON.stringify(dataToStore));
          console.log('Data fetched from server:', response.data);
          setData(prevData => ({
            ...prevData, 
            [activeTab]: {
              data: response.data,
              key: selection.key,
            }
          }));
        } catch (error) {
          setError('Failed to fetch data');
          console.error('Error fetching data:', error);
          setData(prevData => ({ 
            ...prevData, 
            [activeTab]: null 
          }));
        } finally {
          setIsLoading(false);
        }
      };
    
      fetchData();
    }, [selection, fetchUrl, activeTab]);
    
    
  
    const updateSelection = (type, id) => {
      setSelection({ type, id, key: Date.now() });

    };
  
    return (
      <DataContext.Provider value={{ selection, updateSelection, activeTab, setActiveTab, data, isLoading, error  }}>
      {children}
    </DataContext.Provider>
    );
}; 