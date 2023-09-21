import { css } from '@emotion/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { theme } from 'theme'
import { getAnalysisList } from './analysis.selector'

const style = css({
  display: 'flex',
  border: 'solid 1px red',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
})

type Props = React.PropsWithChildren<{}>;

function Year(props: Props) {
  const analysis = useRecoilValue(getAnalysisList)

  console.log(analysis)

  return (
    <main css={style}>
      {props.children}
    </main>
  )
}

export default Year

