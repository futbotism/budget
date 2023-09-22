import { css } from '@emotion/react'
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React from 'react'
import { DayI } from './analysis.selector';
import Purchase from './purchase';
import { theme } from 'theme';

const style = css({
  display: 'grid',
  marginBottom: theme.spacing(2),
  div: {
    display: 'flex',
    gap: theme.spacing(0.5),
    padding: theme.spacing(1)
  }
})

type Props = React.PropsWithChildren<{
  name: string,
  day: DayI
}>;

function Day(props: Props) {

  return (
    <Card css={style}>
      <CardContent>
        <Typography variant='caption'>{props.name}</Typography>
        <Divider />
        <div>
          {props.day?.transactions.map(
            transaction => <Purchase key={transaction.narrative} transaction={transaction} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default Day
