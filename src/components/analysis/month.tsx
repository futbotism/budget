import { css } from '@emotion/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { theme } from 'theme'
import { DayI, getAnalysisList } from './analysis.selector'
import Week from './week'

const style = css({
  display: 'flex',
  border: 'solid 1px green',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
})

type Props = React.PropsWithChildren<{
  month: {
    id: string;
    weeks: {
      id: string;
      days: Record<string, DayI>;
    }[];
  }
}>;

function Month(props: Props) {
  const analysis = useRecoilValue(getAnalysisList)

  console.log(analysis)

  return (
    <main css={style}>
      {
        props.month.weeks.map(week => <Week week={week} key={week.id}/>)
      }
    </main>
  )
}

export default Month

