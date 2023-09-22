import { css } from '@emotion/react'
import { Card, Typography } from '@mui/material'
import React from 'react'
import { theme } from 'theme'
import { DayI } from './analysis.selector'
import Days from './days'

const style = css({
  display: 'grid',
  width: '400px',
  padding: theme.spacing(2),
})

type Props = React.PropsWithChildren<{
  week: {
    id: string;
    days: Record<string, DayI>;
  }
}>;

function Week(props: Props) {

  return (
    <Card css={style}>
      <Typography variant='overline'>Week: 52</Typography>
      <div>
        <Days days={props.week.days} />
      </div>
    </Card>
  )
}

export default Week

