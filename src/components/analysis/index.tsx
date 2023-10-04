import { css } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import { theme } from 'theme'
import { getAnalysisList } from './analysis.selector'
import Year from './year'
import { useEffect } from 'react'
import { useChecked } from 'state'

const style = css({
  height: 'calc(100vh - 75px)',
  overflowX: 'auto',
  display: 'grid',
  gridTemplateRows: '20px 1fr',
  padding: theme.spacing(2)
})

function Analysis() {
  const analysis = useRecoilValue(getAnalysisList)
  const { getRows } = useChecked()

  useEffect(() => {
    getRows()
  }, [])

  return (
    <main css={style}>
      {analysis.map(year =>
        <Year year={year} key={year.id}/>
      )}
    </main>
  )
}

export default Analysis

