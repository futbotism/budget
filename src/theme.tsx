import { ThemeOptions, createTheme } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8bc34a'
    },
    secondary: {
      main: '#2979ff'
    }
  }
}

export const theme = createTheme(themeOptions)
