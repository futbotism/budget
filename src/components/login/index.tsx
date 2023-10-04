import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useSetRecoilState } from "recoil";
import { sheetIdAtom } from "state";

function Login() {
  const [sheetId, setSheetId] = useState('');
  const setSheetIdAtom = useSetRecoilState(sheetIdAtom)

  const doLogin = () => {
    setSheetIdAtom(sheetId)
    localStorage.setItem('sheetId', sheetId)
  }

  return (
    <>
      <TextField onChange={val => setSheetId(val.target.value)} />
      <Button onClick={doLogin}>
        Login
      </Button>
    </>
  )
}

export default Login
