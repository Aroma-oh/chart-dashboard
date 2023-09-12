import styled from 'styled-components';
import ChartDisplay from './ChartDisplay';

const Dashboard = () => {
  return (
    <Box>
      <div className="title-box">
        <h1>시계열 차트</h1>
      </div>
      <div className="panel">
        <ChartDisplay />
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

  .title-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 12px;
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  background-color: ${({ theme }) => theme.colors.bgMain};
  color: ${({ theme }) => theme.colors.fontPrimary};
`;
