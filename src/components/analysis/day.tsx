import { css } from '@emotion/react';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import React from 'react';
import { theme } from 'theme';
import { DayI } from './analysis.selector';
import Purchase from './purchase';
import Total from './total';

const style = css({
  display: 'grid',
  marginBottom: theme.spacing(2),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '.transactions': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.5),
    padding: theme.spacing(1)
  }
})

type Props = React.PropsWithChildren<{
  name: string,
  day: DayI
}>;

function Day(props: Props) {

  const date = DateTime.fromISO(props.day?.transactions[0].date)

  return (
    <Card css={style}>
      <CardContent>
        <header>
          <Typography variant='caption'>{date.isValid ? date.toFormat('ccc, d/L') : props.name}</Typography>
          <Total total={props.day?.total} />
        </header>
        <Divider />
        <div className='transactions'>
          {props.day?.transactions.map(
            transaction => <Purchase key={transaction.id} transaction={transaction} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default Day
