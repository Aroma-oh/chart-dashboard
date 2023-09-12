export interface OriginalData {
  [timestamp: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

export interface DataItem {
  time: string;
  id: string;
  value_area: number;
  value_bar: number;
}

export interface GroupedData {
  [date: string]: DataItem[];
}

export interface ActivePayload {
  activePayload: {
    payload: DataItem;
  }[];
}
