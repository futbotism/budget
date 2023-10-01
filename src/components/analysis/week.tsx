import { css } from '@emotion/react'
import { Card, Typography } from '@mui/material'
import React from 'react'
import { theme } from 'theme'
import { DayI } from './analysis.selector'
import Days from './days'

const style = css({
  display: 'grid',
  gridTemplateRows: '40px 1fr',
  alignItems: 'start',
  width: '400px',
  padding: theme.spacing(2),
  background: theme.palette.grey[100],
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
      <Typography>Week: {props.week.id}</Typography>
      <div>
        <Days days={props.week.days} />
      </div>
    </Card>
  )
}

export default Week

