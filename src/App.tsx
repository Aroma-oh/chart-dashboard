import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/globalStyles';
import Dashboard from 'components/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
