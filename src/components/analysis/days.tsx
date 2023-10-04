import { css } from '@emotion/react'
import React from 'react'
import { DayI } from './analysis.selector'
import Day from './day'
import Total from './total'
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { categoryAtom } from 'state'
import { daysOfWeek } from './const'
import { Accordion } from '@mui/material';

const style = css({
  display: 'grid',
  header: {
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  section: {
    '> div': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr;'
    }
  }
})

type Props = React.PropsWithChildren<{
  days: Record<string, DayI>
}>;

function Days(props: Props) {
  const categories = useRecoilValue(categoryAtom)

  const weekTotal = daysOfWeek.reduce((prev, curr) => {
    prev += props.days[curr]?.total || 0
    return prev
  }, 0)

  const weekCategoriesTotal = categories.reduce((prev, curr) => {
    prev[curr.name] = daysOfWeek.reduce((prev, day) => {
      prev += props.days[day]?.categoryTotals[curr.name] ?? 0
      return prev
    }, 0)
    return prev
  }, {} as Record<string, number>)

  console.log(weekCategoriesTotal)

  return (
    <main css={style}>
      <header>
        <section>
          <Typography>Total</Typography>
          <Total total={weekTotal} />
        </section>
        <Accordion>
          <AccordionSummary>
            <Typography variant='overline'>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>
          {categories.map(category =>
            <section key={category.name}>
              <Typography variant='overline'>{category.name}</Typography>
              <Total total={weekCategoriesTotal[category.name]} />
            </section>
          )}
          </AccordionDetails>
        </Accordion>
      </header>
      <main>
        {props.days['Mon']?.total && <Day day={props.days['Mon']} name='Mon' />}
        {props.days['Tue']?.total && <Day day={props.days['Tue']} name='Tue' />}
        {props.days['Wed']?.total && <Day day={props.days['Wed']} name='Wed' />}
        {props.days['Thu']?.total && <Day day={props.days['Thu']} name='Thu' />}
        {props.days['Fri']?.total && <Day day={props.days['Fri']} name='Fri' />}
        {props.days['Sat']?.total && <Day day={props.days['Sat']} name='Sat' />}
        {props.days['Sun']?.total && <Day day={props.days['Sun']} name='Sun' />}
      </main>
    </main>
  )
}

export default Days

