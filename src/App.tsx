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
import { useBabies } from 'state/babies'

function Auth(props: {
  children?: React.ReactNode
}) {
  const isAuthed = useRecoilValue(getIsAuthed)
  const { getRows } = useChecked()
  const { getCategories } = useCategories()
  const { getbabies } = useBabies()

  useEffect(() => {
    getRows()
    getCategories()
    getbabies()
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
    <BrowserRouter basename='/'>
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
