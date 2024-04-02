import JSONstat from 'jsonstat-toolkit';

export const transformUniversalJsonStatToChartData = (jsonStatData) => {
  const jsonStat = JSONstat(jsonStatData);
  const dataset = jsonStat.Dataset(0);

  // A generalized approach to identify and process all dimensions
  const dimensionKeys = dataset.id;
  const timeDimensionKey = jsonStat.role.time[0];
  const geoDimensionKey = jsonStat.role.geo[0];
  const metricDimensionKey = jsonStat.role.metric[0];
  const pohDimensionKey = jsonStat.role.classification[1];
  const rawData = dataset.toTable({ type: 'arrobj', content: 'id' });
  const transformed = rawData.reduce((acc, item) => {
    const timeValue = item[timeDimensionKey];
    if (!acc[timeValue]) {
      acc[timeValue] = { year: timeValue };
    }

    // Process each dimension for the current data point
    dimensionKeys.forEach(key => {
      // Skip the time dimension since it's already handled as the year
      if (key === timeDimensionKey) return;
      if (key === geoDimensionKey) return;
      if (key === metricDimensionKey) return;
      if (key === pohDimensionKey) return;
      const dimensionValue = item[key];
      const dimensionLabel = dataset.Dimension(key).Category(dimensionValue).label;
      // Assign or aggregate values in the accumulator
      // This step could be customized depending on how you want to aggregate or display multiple dimensions
      acc[timeValue][dimensionLabel] = (acc[timeValue][dimensionLabel] || 0) + item.value;
    });

    return acc;
  }, {});

  // Convert the object into an array of objects for Recharts
  return Object.values(transformed);
};

export default transformUniversalJsonStatToChartData;
