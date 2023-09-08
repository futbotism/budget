import { css } from "@mui/material"
import { theme } from "theme"

const style = css({
    height: 'calc(100vh - 60px)',
    padding: theme.spacing(2)
})

export const Container: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <main css={style}>
        {children}
    </main>
  )
}
