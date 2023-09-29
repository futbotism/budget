import { css } from '@emotion/react';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import { theme } from 'theme';
import { DayI } from './analysis.selector';
import Purchase from './purchase';
import { NumericFormat } from 'react-number-format';

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

  return (
    <Card css={style}>
      <CardContent>
        <header>
          <Typography variant='caption'>{props.name}</Typography>
          <Typography variant='overline'>
            <NumericFormat displayType="text" value={props.day?.total} prefix={'$'} decimalScale={2} fixedDecimalScale/>
          </Typography>
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
