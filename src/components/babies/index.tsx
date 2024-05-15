import { css } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import { babyEventsAtom } from 'state/babies'
import { theme } from 'theme'
import { Growth } from './growth'
import { DownTime } from './downTime'

const style = css({
  height: 'calc(100vh - 75px)',
  overflowX: 'auto',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  padding: theme.spacing(2)
})

function Babies() {
  const babyEvents = useRecoilValue(babyEventsAtom)
  return (
    <main css={style}>
      <Growth data={babyEvents}/>
      <DownTime data={babyEvents}/>
    </main>
  )
}

export default Babies

