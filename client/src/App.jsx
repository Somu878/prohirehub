import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostJob from "./pages/postJob/PostJob";
import JobDetail from "./pages/jobDetails/JobDetail";
import Register from "./pages/registration/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addJob" element={<PostJob />} />
        <Route path="/jobdetails" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
