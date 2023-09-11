interface OriginalData {
  [timestamp: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

interface DataItem {
  time: string;
  id: string;
  value_area: number;
  value_bar: number;
}

interface GroupedData {
  [date: string]: DataItem[];
}

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
