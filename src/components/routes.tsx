import { Route, Routes } from 'react-router-dom'
import Analysis from './analysis'
import Upload from './upload'
import Babies from './babies'

function Routing() {
    return (
        <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="/babies" element={<Babies />} />
            <Route path="*" element={<Analysis />} />
        </Routes>
    )
}

export default Routing
