import { GroupedData, OriginalData } from 'types/dataTypes';

export const groupDataByDate = (originalData: OriginalData) => {
  return Object.entries(originalData).reduce((groupedData: GroupedData, [timestamp, entry]) => {
    const [date, time] = timestamp.split(' ');

    groupedData[date] = groupedData[date] || [];
    groupedData[date].push({ time, ...entry });

    return groupedData;
  }, {});
};
