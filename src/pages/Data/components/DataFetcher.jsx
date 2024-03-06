import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [datasets, setDatasets] = useState([]);
  const [selectedDatasetUrl, setSelectedDatasetUrl] = useState('');
  const [dimensionDetails, setDimensionDetails] = useState({});
  const [selectedDimensions, setSelectedDimensions] = useState({});
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Fetch datasets on component mount
    fetch('https://data.statistics.sk/api/v2/collection?lang=en')
      .then(response => response.json())
      .then(data => {
        const filteredDatasets = data.link.item.filter(dataset => dataset.dimension && dataset.dimension.nuts13);
        setDatasets(filteredDatasets);
      })
      .catch(error => console.error('Error fetching datasets:', error));
  }, []);

  useEffect(() => {
    if (selectedDatasetUrl) {
      const datasetCode = selectedDatasetUrl.split('/').slice(-1)[0].split('_')[0];
      fetch(selectedDatasetUrl)
        .then(response => response.json())
        .then(jsonStat => {
          if (jsonStat && jsonStat.dimension) {
            const allDimensionKeys = Object.keys(jsonStat.dimension).filter(dim => !dim.endsWith('_data'));
            let newDimensionDetails = {};
            allDimensionKeys.forEach(dimName => {
              fetchDimensionDetails(datasetCode, dimName, jsonStat, newDimensionDetails);
            });
          }
        })
        .catch(error => console.error('Error fetching dimensions:', error));
    }
  }, [selectedDatasetUrl]);

  const fetchDimensionDetails = (datasetCode, dimensionName, datasetMetadata, newDimensionDetails) => {
    const url = `https://data.statistics.sk/api/v2/dimension/${datasetCode}/${dimensionName}?lang=en`;
    
    fetch(url)
      .then(response => response.json())
      .then(dimensionData => {
        newDimensionDetails[dimensionName] = dimensionData;
        setDimensionDetails({ ...newDimensionDetails });
      })
      .catch(error => console.error('Error fetching dimension details:', error));
  };

  const handleDatasetChange = (e) => {
    setSelectedDatasetUrl(e.target.value);
    setDimensionDetails({}); // Reset dimension details for new dataset
    setSelectedDimensions({}); // Reset selected dimensions for new dataset
  };

  const handleDimensionChange = (dimensionName, value) => {
    setSelectedDimensions(prevDimensions => ({ ...prevDimensions, [dimensionName]: value }));
  };

  const sendApiUrlToBackend = (apiUrl) => {
    fetch('http://localhost:5500/process-data', { // Adjust the URL as per your backend setup
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ apiUrl }),
    })
      .then(response => response.json())
      .then(data => {
        setResponse(JSON.stringify(data, null, 2));
      })
      .catch(error => {
        console.error('Error sending API URL to backend:', error);
      });
  };

  const fetchDataAndDisplay = (apiUrl) => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setResponse(JSON.stringify(data, null, 2));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setResponse(`Error fetching data: ${error}`);
      });
  };

  const fetchData = () => {
    const selectedDatasetCode = selectedDatasetUrl.split('/').slice(-1)[0].split('_')[0];
    
    // Construct the dimension part of the URL.
    // For each dimension that has not been selected by the user, use 'all'.
    const dimensionParts = Object.keys(dimensionDetails).map((dimensionName) => {
      return selectedDimensions[dimensionName] || 'all';
    });
  
    const apiUrl = `https://data.statistics.sk/api/v2/dataset/${selectedDatasetCode}/${dimensionParts.join('/')}?lang=en&type=json`;
  
    fetchDataAndDisplay(apiUrl);
    sendApiUrlToBackend(apiUrl);
    console.log('Fetching data from:', apiUrl);
  };

  return (
    <div>
      <select onChange={handleDatasetChange} value={selectedDatasetUrl}>
        {datasets.map((dataset, index) => (
          <option key={index} value={dataset.href}>
            {dataset.label}
          </option>
        ))}
      </select>

      <div id="dimension-details">
        {Object.entries(dimensionDetails).map(([dimensionName, dimensionData]) => (
          <React.Fragment key={dimensionName}>
            <label htmlFor={`select-${dimensionName}`}>{dimensionName}:</label>
            <select
              id={`select-${dimensionName}`}
              onChange={(e) => handleDimensionChange(dimensionName, e.target.value)}
            >
              <option value="all">All</option>
              {dimensionData.category && dimensionData.category.label &&
                Object.entries(dimensionData.category.label).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))
              }
            </select>
          </React.Fragment>
        ))}
      </div>

      <button onClick={fetchData}>Fetch Data</button>

      <div id="response-container" style={{ whiteSpace: 'pre-wrap' }}>
        {response}
      </div>
    </div>
  );
};

export default DataFetcher;
