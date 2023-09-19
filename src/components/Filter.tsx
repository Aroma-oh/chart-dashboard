import styled from 'styled-components';

interface FilterProps {
  filter: {
    date: string[];
    id: string[];
    // eslint-disable-next-line no-unused-vars
    dateFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    // eslint-disable-next-line no-unused-vars
    idFilter: (id: string) => void;
    selectedDate: string;
    selectedId: string;
  };
}

const Filter = ({ filter }: FilterProps) => {
  const { date, id, dateFilter, idFilter, selectedDate, selectedId } = filter;

  return (
    <Box>
      <DateFilter className="date-filter">
        <p>날짜: </p>
        <select onChange={dateFilter} value={selectedDate}>
          {date.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </DateFilter>
      <IdFilter className="id-filter">
        {id.map((item) => (
          <button
            key={item}
            onClick={() => idFilter(item)}
            className={selectedId === item ? 'selected' : ''}
          >
            {item}
          </button>
        ))}
      </IdFilter>
    </Box>
  );
};

export default Filter;

const Box = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 15vw;
  min-width: 200px;
  margin: auto;

  gap: 8px;
  font-size: 14px;
  margin-bottom: 12px;
`;
const IdFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  width: 70vw;
  margin-right: 15vw;

  button {
    background-color: ${({ theme }) => theme.colors.bgBoard};
    border: solid 1px ${({ theme }) => theme.colors.fontSecondary};
    border-radius: 12px;
    text-align: center;
    padding: 4px 10px;
    line-height: 130%;
    min-width: 56.42px;
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.select};
  }
`;
