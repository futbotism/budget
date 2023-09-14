import { ThemeProvider } from '@mui/material'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { useExpenses } from 'state/expenses'
import { theme } from 'theme'
import Navigation from './components/navigation'
import Routes from './components/routes'

function Auth(props: {
  children?: React.ReactNode
}) {

  const { getRows } = useExpenses()
  
  useEffect(() => {
    getRows()
  }, [])

  return (
    <>
      {props.children}
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="828784301072-67rcp4vmp4c308ufaa3a0qhkcugfpr0c.apps.googleusercontent.com">
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Auth>
              <Navigation />
              <Routes />
            </Auth>
          </ThemeProvider>
        </RecoilRoot>
      </GoogleOAuthProvider>
    </BrowserRouter>
  )
}

export default App
