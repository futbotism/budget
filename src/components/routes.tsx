import { Route, Routes } from 'react-router-dom'
import Analysis from './analysis'
import Upload from './upload'

function Routing() {
    return (
        <Routes>
            <Route path="/budget/" element={<Analysis />} />
            <Route path="/budget/upload" element={<Upload />} />
        </Routes>
    )
}

export default Routing
