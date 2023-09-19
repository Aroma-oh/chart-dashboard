import styled from 'styled-components';
import ChartDisplay from './ChartDisplay';

import mockData from 'mock_data.json';
import { groupDataByDate } from 'utils/groupDataByDate';

const Dashboard = () => {
  const data = groupDataByDate(mockData.response);

  return (
    <Box>
      <h1>시계열 차트</h1>
      <div className="panel">
        <ChartDisplay data={data} />
      </div>
    </Box>
  );
};

export default Dashboard;

const Box = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 700;
    padding: 18px 0;
  }

  color: ${({ theme }) => theme.colors.fontPrimary};
`;
