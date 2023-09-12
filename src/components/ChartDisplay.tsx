import styled from 'styled-components';
import theme from 'styles/theme';

import mockData from 'mock_data.json';

import { groupDataByDate } from 'utils/groupDataByDate';
import { formatNumber } from 'utils/dataHelpers';
import { useFilter } from 'hooks/useFilter';

import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import Filter from './Filter';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';

const ChartDisplay = () => {
  const data = groupDataByDate(mockData.response);

  const { date, id, dateFilter, idFilter, idSelector, selectedDate, selectedId } = useFilter(data);

  const filterProps = { data, date, id, dateFilter, idFilter, selectedDate, selectedId };

  return (
    <Box>
      <Filter filterProps={filterProps} />
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data[selectedDate]}
          margin={{
            top: 40,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          onClick={idSelector as CategoricalChartFunc}
        >
          <CartesianGrid stroke={theme.colors.grid} />
          <XAxis dataKey="time" scale="band" className="XAxis" padding={{ left: 2, right: 2 }} />
          <Tooltip content={<CustomTooltip />} formatter={formatNumber} />
          <YAxis
            yAxisId="left"
            tickFormatter={formatNumber}
            label={{ value: 'Bar', position: 'top', offset: 18, fontSize: '16' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: 'Area', position: 'top', offset: 18, fontSize: '16' }}
          />
          <Legend
            align="center"
            payload={[
              { value: 'Bar', type: 'square', color: theme.colors.barStroke },
              { value: 'Area', type: 'square', color: theme.colors.areaStroke },
            ]}
          />
          <Bar dataKey="value_bar" yAxisId="left" barSize={20} stroke={theme.colors.barStroke}>
            {data[selectedDate]?.map((item, idx) => (
              <Cell
                key={idx}
                fill={item.id === selectedId ? theme.colors.barFillHighlight : theme.colors.barFill}
              />
            ))}
          </Bar>
          <Area
            type="monotone"
            dataKey="value_area"
            yAxisId="right"
            fill={theme.colors.areaFill}
            stroke={theme.colors.areaStroke}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ChartDisplay;

const Box = styled.section`
  background-color: ${({ theme }) => theme.colors.bgBoard};
  font-size: 10px;

  height: 680px;
  max-width: 95vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
