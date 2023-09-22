import { css } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import { theme } from 'theme'
import { getAnalysisList } from './analysis.selector'
import Month from './month'
import Year from './year'

const style = css({
  height: 'calc(100vh - 75px)',
  border: 'solid 1px red',
  margin: theme.spacing(2),
  padding: theme.spacing(2)
})

function Analysis() {
  const analysis = useRecoilValue(getAnalysisList)

  return (
    <main css={style}>
      {analysis.map(years =>
        <Year key={years.id}>
          {years.months.map(month =>
            <Month key={month.id} month={month}/>
          )}
        </Year>
      )}
    </main>
  )
}

export default Analysis

