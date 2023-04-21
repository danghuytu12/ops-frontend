
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/login";
import OnlineCoures from "./pages/online-courses";
import School from "./pages/school";
import OverviewProfile from "./pages/user-profile/overview";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<OnlineCoures />} />
        <Route path="/school" element={<School />} />
        <Route path="/user-profile/overview" element={<OverviewProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
