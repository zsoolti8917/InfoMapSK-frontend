import JSONstat from 'jsonstat-toolkit';

export const transformUniversalJsonStatToChartData = (jsonStatData) => {

    const jsonStat = JSONstat(jsonStatData.data);

    const dataset = jsonStat.Dataset(0);
    const rawData = dataset.toTable({ type: 'arrobj' });
    const transformed = {};

    // Iterate over each item in the raw data
    rawData.forEach(item => {
      const year = item.om7011rr_obd; // This is your universal key
      const category = item.om7011rr_ukaz; // Dynamic category based on data
      const value = item.value;
  
      // Initialize the year object if it doesn't exist
      if (!transformed[year]) {
        transformed[year] = { year };
      }
  
      // Assign the value to the specific category within the year
      transformed[year][category] = value;
    });
  
    // Convert the object into an array of objects for Recharts
    console.log(transformed)
    return Object.values(transformed);
  };


export default transformUniversalJsonStatToChartData;
