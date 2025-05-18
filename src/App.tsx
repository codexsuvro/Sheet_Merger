import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import PreviewPage from "./pages/PreviewPage"
import OnlyPreviewPage from './pages/OnlyPreviewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Homepage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/onlypreview" element={<OnlyPreviewPage />} />
      </Routes>
    </Router>
  )
}

export default App
