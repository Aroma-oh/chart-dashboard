import styled from 'styled-components';
import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  const formatNumber = (item: number) => item.toLocaleString();

  if (active && payload) {
    const { id, value_area, value_bar } = payload[0].payload;
    return (
      <Box>
        <p className="id">{`${id}`}</p>
        <p>{`area : ${formatNumber(value_area)}`}</p>
        <p>{`bar : ${formatNumber(value_bar)}`}</p>
      </Box>
    );
  }

  return null;
};
export default CustomTooltip;

const Box = styled.div`
  padding: 8px 16px 10px 16px;
  border-radius: 4px;
  line-height: 140%;
  background-color: ${({ theme }) => theme.colors.bgBoard};

  .id {
    background-color: ${({ theme }) => theme.colors.bgMain};
    padding: 2px 6px;
    margin-bottom: 4px;
    margin-left: -6px;
    border-radius: 2px;
    width: fit-content;
  }
`;
