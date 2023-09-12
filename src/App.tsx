import { RecoilRoot } from 'recoil';

import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/globalStyles';
import Dashboard from 'components/Dashboard';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Dashboard />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
