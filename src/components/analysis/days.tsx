import { css } from '@emotion/react'
import React from 'react'
import { theme } from 'theme'
import { Day } from './analysis.selector'
import Purchase from './purchase'
import { Typography, Divider } from '@mui/material'

const style = css({
  display: 'grid',
  border: 'solid 1px green',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  section: {
    '> div': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr;'
    }
  }
})

type Props = React.PropsWithChildren<{
  days: Record<string, Day>
}>;

function Days(props: Props) {

  return (
    <main css={style}>
      <main>
        <section>
          <Typography>Mo</Typography>
          <Divider />
          <div>
            {props.days['Mon']?.transactions.map(
              transaction => <Purchase key={transaction.narrative} transaction={transaction} />
            )}
          </div>
        </section>
        <section>
          <Typography>Tu</Typography>
          <Divider />
          <div>
            {props.days['Tue']?.transactions.map(transaction =>
              <Purchase key={transaction.narrative} transaction={transaction} />
            )}
          </div>
        </section>
        <section>
          <Typography>We</Typography>
          <Divider />
          <div>
            {props.days['Wed']?.transactions.map(transaction =>
              <Purchase key={transaction.narrative} transaction={transaction} />
            )}
          </div>
        </section>
        <section>
          <Typography>Th</Typography>
          <Divider />
          <div>
            {props.days['Thu']?.transactions.map(transaction =>
              <Purchase key={transaction.narrative} transaction={transaction} />
            )}
          </div>
        </section>
        <section>
          <Typography>Fr</Typography>
          <Divider />
          <div>
            {props.days['Fri']?.transactions.map(transaction =>
              <Purchase key={transaction.narrative} transaction={transaction} />
            )}
          </div>
        </section>
        <section>
          <Typography>Sa</Typography>
          <Divider />
          <div>
            {props.days['Sat']?.transactions.map(transaction =>
              <Purchase key={transaction.narrative} transaction={transaction} />
            )}
          </div>
        </section>
        <section>
          <Typography>Su</Typography>
          <Divider />
          <div>
            {props.days['Sun']?.transactions.map(transaction =>
              <Purchase key={transaction.narrative} transaction={transaction} />
            )}
          </div>
        </section>
      </main>
      <footer>
        {props.days['Mon']?.total}
      </footer>
    </main>
  )
}

export default Days

