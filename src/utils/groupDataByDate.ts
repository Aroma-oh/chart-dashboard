import { GroupedData, OriginalData } from 'types/dataType';

export const groupDataByDate = (originalData: OriginalData) => {
  const groupedData: GroupedData = {};

  for (const timestamp in originalData) {
    const entry = originalData[timestamp];
    const [date, time] = timestamp.split(' ');

    if (!groupedData[date]) {
      groupedData[date] = [];
    }

    groupedData[date].push({ time, ...entry });
  }

  return groupedData;
};
