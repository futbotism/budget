import { ThemeProvider } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { useChecked } from 'state/transactoins'
import { theme } from 'theme'
import Navigation from './components/navigation'
import Routes from './components/routes'
import { useCategories } from 'state/categories'
import { getIsAuthed } from 'state'
import Login from 'components/login'

function Auth(props: {
  children?: React.ReactNode
}) {
  const isAuthed = useRecoilValue(getIsAuthed)
  const { getRows } = useChecked()
  const { getCategories } = useCategories()

  useEffect(() => {
    getRows()
    getCategories()
  }, [])

  return (
    <>
      {
        !isAuthed
          ? <Login />
          : props.children
      }
    </>
  )
}


function App() {
  return (
    <BrowserRouter basename='/budget'>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Navigation />
          <Auth>
            <Routes />
          </Auth>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
