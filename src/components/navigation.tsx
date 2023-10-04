import { Button, Typography, css } from '@mui/material'
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getIsAuthed, sheetIdAtom } from 'state'
import { theme } from '../theme'

const styles = css({
  height: '60px',
  background: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${theme.spacing(2)}`,
  'aside': {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: theme.spacing(2)
  }
})

function Navigation() {
  const isAuthed = useRecoilValue(getIsAuthed)
  const setSheetId = useSetRecoilState(sheetIdAtom)

  return (
    <nav css={styles}>
      <Typography variant='h5'>Budget</Typography>

      <aside>

        {isAuthed
          && <>
            <Link to='/budget'>
              <Button variant='contained' color='secondary'>Analysis</Button>
            </Link>

            <Link to='/budget/upload'>
              <Button variant='contained' color='secondary'>Upload</Button>
            </Link>

            <Button onClick={() => setSheetId('')} variant='contained' color='secondary'>Logout</Button>
          </>
        }
      </aside>
    </nav>
  )
}

export default Navigation
