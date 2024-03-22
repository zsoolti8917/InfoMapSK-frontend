export const transformJsonStatToUniversalChartData = (jsonStatData) => {
    // Identify the dimension that has been marked as "time"
    const timeDimensionName = jsonStatData.role.time[0];
    const timeDimension = jsonStatData.dimension[timeDimensionName];
    const years = Object.keys(timeDimension.category.index);
  
    // Assume all other dimensions except time are indicators/categories
    const dimensions = jsonStatData.id.filter(id => id !== timeDimensionName);
  
    // Prepare a structure to hold the chart data
    let chartData = [];
  
    // Compute the total combinations of dimension values (excluding time)
    const totalCombinations = dimensions.reduce((acc, dimensionName) => acc * jsonStatData.size[jsonStatData.id.indexOf(dimensionName)], 1);
    
    // Loop through each combination of dimension values
    for (let i = 0; i < totalCombinations; i++) {
      // For each year, create a data point
      for (let j = 0; j < years.length; j++) {
        const valueIndex = i * years.length + j;
        if (valueIndex < jsonStatData.value.length) {
          const dataPoint = {
            year: years[j],
            value: jsonStatData.value[valueIndex]
          };
  
          // Add dimension labels to the data point
          dimensions.forEach((dimensionName, dimIndex) => {
            const dimension = jsonStatData.dimension[dimensionName];
            const dimCategoryKeys = Object.keys(dimension.category.index);
            const dimCategoryValues = Object.values(dimension.category.label);
            // This calculation finds the correct category index for multi-dimensional datasets
            const categoryIndex = Math.floor(i / Math.pow(years.length, dimIndex)) % dimCategoryKeys.length;
            dataPoint[dimensionName] = dimCategoryValues[categoryIndex];
          });
  
          chartData.push(dataPoint);
        }
      }
    }
  
    return chartData;
  };
  
export default transformJsonStatToUniversalChartData;