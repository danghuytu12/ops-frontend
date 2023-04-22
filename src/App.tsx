
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Projects from "./pages/projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
