
import { BrowserRouter, Routes, Route} from "react-router-dom";
import OnlineCourse from "./pages/online-courses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnlineCourse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
