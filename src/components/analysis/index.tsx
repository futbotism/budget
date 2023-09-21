import { css } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import { theme } from 'theme'
import { getAnalysisList } from './analysis.selector'
import Month from './month'
import Week from './week'
import Year from './year'
import Days from './days'

const style = css({
  height: 'calc(100vh - 75px)',
  border: 'solid 1px red',
  margin: theme.spacing(2),
  padding: theme.spacing(2)
})

function Analysis() {
  const analysis = useRecoilValue(getAnalysisList)

  console.log(analysis)

  return (
    <main css={style}>
      {analysis.map(years =>
        <Year key={years.id}>
          {years.months.map(month =>
            <Month key={month.id}>
              {month.weeks.map(week =>
                <Week key={week.id}>
                  <Days days={week.days} />
                </Week>
              )}
            </Month>
          )}
        </Year>
      )}
    </main>
  )
}

export default Analysis

