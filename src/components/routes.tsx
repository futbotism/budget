import { Route, Routes } from 'react-router-dom'
import Analysis from './analysis'
import Login from './login'
import Upload from './upload'
import { useRecoilValue } from 'recoil'
import { getIsAuthed } from 'state'

function Routing() {
  const isAuthed = useRecoilValue(getIsAuthed)
    return (
        <Routes>
            {isAuthed
                ? <>
                    <Route path="/" element={<Analysis />} />
                    <Route path="/upload" element={<Upload />} />
                </>
                : <>
                    <Route path="/" element={<Login />} />
                </>}
        </Routes>
    )
}

export default Routing
