import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/theme/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <GlobalStyle />
    </ThemeProvider>
  );
}
