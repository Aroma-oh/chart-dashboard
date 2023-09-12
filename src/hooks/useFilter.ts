import { useState } from 'react';
import { ActivePayload, GroupedData } from 'types/dataTypes';

export const useFilter = (data: GroupedData) => {
  const date: string[] = Object.keys(data);
  const [selectedDate, setSelectedDate] = useState('');

  if (!selectedDate) setSelectedDate(date[0]);

  const id: string[] = Array.from(
    new Set(data[selectedDate ? selectedDate : date[0]].map((item) => item.id))
  );
  const [selectedId, setSelectedId] = useState('all');

  const dateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
    setSelectedId('all');
  };

  const idFilter = (id: string) => {
    if (id === selectedId) {
      setSelectedId('all');
    } else {
      setSelectedId(id);
    }
  };

  const idSelector = ({ activePayload }: ActivePayload) => {
    setSelectedId(activePayload[0].payload.id);
  };

  return { date, id, dateFilter, idFilter, idSelector, selectedDate, selectedId };
};
