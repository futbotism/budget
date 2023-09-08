import { ThemeProvider, createTheme } from '@mui/material'
import Navigation from './navigation';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'
import { theme } from 'theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
