import { Route, Routes } from 'react-router-dom'
import Analysis from './analysis'
import Review from './review'
import Upload from './upload'

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Analysis />} />
            <Route path="/review" element={<Review />} />
            <Route path="/upload" element={<Upload />} />
        </Routes>
    )
}

export default Routing
