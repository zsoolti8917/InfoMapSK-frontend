import JSONstat from 'jsonstat-toolkit';

export const transformUniversalJsonStatToChartData = (jsonStatData) => {

    const jsonStat = JSONstat(jsonStatData);
   const dataset = jsonStat.Dataset(0);
    const rawData = dataset.toTable({ type: 'arrobj' });
    const transformed = {};

    const findYearKey = (item) => {
        // Regular expression to match keys that end with "_rok" or "_obd"
        const regex = /(_rok|_obd)$/;
      
        // Find the first key that matches the regex
        const key = Object.keys(item).find(key => regex.test(key));
      
        // Return the value associated with the found key, or undefined if no matching key was found
        return key ? item[key] : undefined;
      };

      const findDataKey = (item) => {
        // Regular expression to match keys that end with "_rok" or "_obd"
        const regex = /(_ukaz)$/;
      
        // Find the first key that matches the regex
        const key = Object.keys(item).find(key => regex.test(key));
      
        // Return the value associated with the found key, or undefined if no matching key was found
        return key ? item[key] : undefined;
      };
    // Iterate over each item in the raw data
    rawData.forEach(item => {
      const year = findYearKey(item); // This is your universal key
      const category = findDataKey(item); // Dynamic category based on data
      const value = item.value;
  
      // Initialize the year object if it doesn't exist
      if (!transformed[year]) {
        transformed[year] = { year };
      }
  
      // Assign the value to the specific category within the year
      transformed[year][category] = value;
    });
  
    // Convert the object into an array of objects for Recharts
    return Object.values(transformed);
  };


export default transformUniversalJsonStatToChartData;
