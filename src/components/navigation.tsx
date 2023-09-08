import { Button, Typography, css } from '@mui/material'
import { theme } from '../theme'
import { Link, NavLink } from 'react-router-dom'

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
  return (
    <nav css={styles}>
        <Typography variant='h5'>Budget</Typography>

        <aside>
          <Link to='/'>
            <Button variant='contained' color='secondary'>Analysis</Button>
          </Link>
          
          <Link to='/review'>
            <Button variant='contained' color='secondary'>Review</Button>
          </Link>

          <Link to='/upload'>
            <Button variant='contained' color='secondary'>Upload</Button>
          </Link>
        </aside>
    </nav>
  )
}

export default Navigation
