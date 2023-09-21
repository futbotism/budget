import { useRecoilValue } from 'recoil'
import { getCheckedTransactionList } from 'state'
import { getAnalysisList } from './analysis.selector'
import { css } from '@emotion/react'
import { theme } from 'theme'
import React from 'react'
import { Card } from '@mui/material'

const style = css({
  display: 'flex',
  width: '400px',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
})

type Props = React.PropsWithChildren<{}>;

function Week(props: Props) {
  const transactions = useRecoilValue(getCheckedTransactionList)
  const analysis = useRecoilValue(getAnalysisList)

  console.log(analysis)

  return (
    <Card css={style}>
      {props.children}
    </Card>
  )
}

export default Week

