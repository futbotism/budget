import TroubleshootIcon from '@mui/icons-material/Troubleshoot'
import CloudSyncIcon from '@mui/icons-material/CloudSync'
import { Button, styled, css } from '@mui/material'
import { useExpenses } from 'state/expenses'

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
  justifyContent: 'space-between'
})

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void
}

function Actions({ onChange }: Props) {
  const { addRows } = useExpenses()

  const upload = () => {
    addRows([])
  }

  return (
    <aside css={style}>
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
    </aside>
  )
}

export default Actions
