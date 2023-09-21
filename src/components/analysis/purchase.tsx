import { css } from '@emotion/react'
import { Tooltip } from '@mui/material'
import Icon from '@mui/material/Icon'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Transaction } from 'state'
import { getCategoiresRecord } from 'state/categories/selectors'
import { theme } from 'theme'

const style = css({
  display: 'grid',
  justifyItems: 'center',
  borderRadius: '50%',
  border: 'solid 1px green',
  padding: theme.spacing(0.5),
})

type Props = React.PropsWithChildren<{
  transaction: Transaction
}>;

function Purchase(props: Props) {
  const catgeoriesRecord = useRecoilValue(getCategoiresRecord)

  return (
    <>
      <Tooltip title={props.transaction.narrative}>
        <div css={style}>
          {props.transaction.category && <Icon>{catgeoriesRecord[props.transaction.category]?.icon}</Icon>}
          <p>{props.transaction.debit}</p>
        </div>
      </Tooltip>
    </>
  )
}

export default Purchase
