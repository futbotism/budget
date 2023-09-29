import { css } from '@emotion/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { DayI, getAnalysisList } from './analysis.selector'
import Week from './week'
import { Typography } from '@mui/material'
import { theme } from 'theme'

const style = css({
  display: 'grid',
  gridTemplateRows: '40px 1fr',
  alignItems: 'start',
  article: {
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: theme.spacing(2)
  }
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
      <Typography textTransform='uppercase' color='GrayText' variant='h6'>{props.month.id}</Typography>
      <article>
        {props.month.weeks.map(week => <Week week={week} key={week.id} />)}
      </article>
    </main>
  )
}

export default Month

