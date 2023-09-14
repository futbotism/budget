import { ThemeProvider } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { useChecked } from 'state/transactoins'
import { theme } from 'theme'
import Navigation from './components/navigation'
import Routes from './components/routes'

function Auth(props: {
  children?: React.ReactNode
}) {

  const { getRows } = useChecked()
  
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
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Auth>
              <Navigation />
              <Routes />
            </Auth>
          </ThemeProvider>
        </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
