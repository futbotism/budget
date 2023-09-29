import { css } from '@emotion/react'
import { Chip, Tooltip } from '@mui/material'
import Icon from '@mui/material/Icon'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Transaction } from 'state'
import { getCategoiresRecord } from 'state/categories/selectors'
import { theme } from 'theme'

const style = css({
  display: 'flex',
  justifyItems: 'center',
  color: 'white',
  padding: theme.spacing(0.5),
  span: {
    color: 'white!important',
  }
})

type Props = React.PropsWithChildren<{
  transaction: Transaction
}>;

function Purchase(props: Props) {
  const catgeoriesRecord = useRecoilValue(getCategoiresRecord)

  const category = props.transaction.category
    ? catgeoriesRecord[props.transaction.category]
    : undefined

  return (
    <Tooltip title={props.transaction.narrative}>
      <Chip style={{
        background: category?.color
      }} label={props.transaction.debit} css={style} icon={props.transaction.category && <Icon>{category?.icon}</Icon>} />
    </Tooltip>
  )
}

export default Purchase
