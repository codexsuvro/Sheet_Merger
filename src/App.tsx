import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import PreviewPage from "./pages/PreviewPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Homepage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Router>
  )
}

export default App
