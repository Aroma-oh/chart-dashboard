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
import FilterComponent from './Filter';

const ChartDisplay = () => {
  const data = groupDataByDate(mockData.response);
  const { selectedDate, selectedId } = useFilter(data);

  return (
    <Box>
      <FilterComponent data={data} />
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data[selectedDate]}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" scale="band" className="XAxis" />
          <Tooltip content={<CustomTooltip />} formatter={formatNumber} />
          <YAxis yAxisId="left" tickFormatter={formatNumber} />
          <YAxis yAxisId="right" orientation="right" />
          <Legend
            align="center"
            payload={[
              { value: 'value_area', type: 'square', color: theme.colors.areaStroke },
              { value: 'value_bar', type: 'square', color: theme.colors.barStroke },
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

  height: 650px;
  max-width: 95vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
