import { Route, Routes } from 'react-router-dom'
import Analysis from './analysis'
import Upload from './upload'

function Routing() {
    return (
        <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="*" element={<Analysis />} />
        </Routes>
    )
}

export default Routing
