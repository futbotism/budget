import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { Button, styled, css } from '@mui/material';

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
  onChange: (event: any) => void
}

function Actions({ onChange }: Props) {
  return (
    <aside css={style}>
        <Button
          component="label"
          variant="contained"
          startIcon={<TroubleshootIcon />}
          onChange={onChange}
          href="#file-upload">
          Upload a file
          <VisuallyHiddenInput type="file" />
        </Button>

        <Button
          component="label"
          variant="contained"
          color='secondary'
          startIcon={<CloudSyncIcon />}
          onChange={onChange}
          href="#file-upload">
          Submit
          <VisuallyHiddenInput type="file" />
        </Button>
    </aside>
  )
}

export default Actions