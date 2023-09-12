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
    const payloadId = activePayload[0].payload.id;

    console.info('payloadId', payloadId);
    console.info('selectedId', selectedId);

    if (payloadId === selectedId) {
      setSelectedId('all');
    } else {
      setSelectedId(payloadId);
    }
  };

  return { date, id, dateFilter, idFilter, idSelector, selectedDate, selectedId };
};
