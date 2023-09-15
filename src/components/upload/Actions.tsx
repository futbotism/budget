import TroubleshootIcon from '@mui/icons-material/Troubleshoot'
import CloudSyncIcon from '@mui/icons-material/CloudSync'
import { Button, styled, css, Alert } from '@mui/material'
import { checkedTranastionsAtom, useChecked } from 'state/transactoins'
import { useRecoilValue } from 'recoil'
import { getUnCheckedTransactionList } from 'state'
import { useEffect, useState } from 'react'
import { theme } from 'theme'

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`

const style = css({
  display: 'flex',
  justifyContent: 'space-between',
  div: {
    display: 'flex',
    gap: theme.spacing(1)
  }
})

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void
}

function Actions({ onChange }: Props) {
  const [hasntCheckedAllTransactions, setHasntCheckedAllTransactions] = useState(false)
  const { addRows } = useChecked()
  const transactionList = useRecoilValue(getUnCheckedTransactionList)
  const checkedTransactions = useRecoilValue(checkedTranastionsAtom)

  const upload = () => {
    const t = transactionList.filter(transaction => {
      if (transaction.category && !checkedTransactions[transaction.id!]) {
        return true
      } else {
        setHasntCheckedAllTransactions(true)
      }
    })
    addRows(t)
  }

  useEffect(() => {
    if (hasntCheckedAllTransactions) {
      setTimeout(() => {
        setHasntCheckedAllTransactions(false)
      }, 3000);
    }
  }, [hasntCheckedAllTransactions])

  return (
    <aside css={style}>
      <div>
        <Button
          component="label"
          variant="contained"
          startIcon={<TroubleshootIcon />}
          onChange={onChange}
          href="#file-upload"
        >
          Upload a file
          <VisuallyHiddenInput type="file" />
        </Button>

        <Button
          component="label"
          variant="contained"
          color="secondary"
          startIcon={<CloudSyncIcon />}
          onClick={upload}
        >
          Submit
        </Button>
      </div>
      {
        hasntCheckedAllTransactions && <Alert severity="info">Only unsubmitted transaction with a category will be sent</Alert>
      }
    </aside>
  )
}

export default Actions
