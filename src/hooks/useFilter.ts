import { GroupedData } from 'types/dataType';
import { selectedDateState, selectedIdState } from 'store/atom';
import { useRecoilState } from 'recoil';

export const useFilter = (data: GroupedData) => {
  const date: string[] = Object.keys(data);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  if (!selectedDate) setSelectedDate(date[0]);

  const id: string[] = Array.from(
    new Set(data[selectedDate ? selectedDate : date[0]].map((item) => item.id))
  );
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  const dateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
    setSelectedId('all');
  };

  const filter = (id: string) => {
    if (id === selectedId) {
      setSelectedId('all');
    } else {
      setSelectedId(id);
    }
  };

  return { date, id, dateFilter, filter, selectedDate, selectedId };
};
