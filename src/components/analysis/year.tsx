import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'
import { theme } from 'theme'
import Month from './month'
import { DayI } from './analysis.selector'

const style = css({
  display: 'flex',
  flexDirection: 'row-reverse',
  gap: theme.spacing(2),
  padding: `${theme.spacing(2)} ${theme.spacing(1)}`,
})

type Props = React.PropsWithChildren<{
  year: {
    id: string;
    months: {
      id: string;
      weeks: {
        id: string;
        days: Record<string, DayI>;
      }[];
    }[];
  }
}>;

function Year(props: Props) {
  return (
    <>
      <Typography color='GrayText' variant='subtitle2'>{props.year.id}</Typography>
      <main css={style}>
        {props.year.months.map(month =>
          <Month key={month.id} month={month} />
        )}
      </main>
    </>
  )
}

export default Year