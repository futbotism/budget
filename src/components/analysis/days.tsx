import { css } from '@emotion/react'
import React from 'react'
import { DayI } from './analysis.selector'
import Day from './day'

const style = css({
  display: 'grid',
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

  return (
    <main css={style}>
      <main>
        <Day day={props.days['Mon']} name='Mon'/>
        <Day day={props.days['Tue']} name='Tue'/>
        <Day day={props.days['Wed']} name='Wed'/>
        <Day day={props.days['Thu']} name='Thu'/>
        <Day day={props.days['Fri']} name='Fri'/>
        <Day day={props.days['Sat']} name='Sat'/>
        <Day day={props.days['Sun']} name='Sun'/>
      </main>
      <footer>
        {props.days['Mon']?.total}
      </footer>
    </main>
  )
}

export default Days

