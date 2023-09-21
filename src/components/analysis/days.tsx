import { css } from '@emotion/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { theme } from 'theme'
import { Day, getAnalysisList } from './analysis.selector'
import { Tooltip } from '@mui/material'

const style = css({
  display: 'flex',
  border: 'solid 1px green',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
})

type Props = React.PropsWithChildren<{
  days: Record<string, Day>
}>;

function Days(props: Props) {
  const analysis = useRecoilValue(getAnalysisList)

  console.log(analysis)

  return (
    <main css={style}>
      <main>
        <section>
          {props.days['Mon']?.transactions.map(transaction =>
            <Tooltip title={transaction.narrative}>
              <>
                <p>{transaction.category}</p>
                <p>{transaction.debit}</p>
              </>
            </Tooltip>
          )}
        </section>
      </main>
      <footer>
        {props.days['Mon']?.total}
      </footer>
    </main>
  )
}

export default Days

