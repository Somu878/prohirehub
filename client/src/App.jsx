import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostJob from "./pages/postJob/PostJob";
import JobDetail from "./pages/jobDetails/JobDetail";
import Register from "./pages/registration/Register";
import toast, { Toaster } from "react-hot-toast";
import EditJob from "./pages/editJob/EditJob";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addjob" element={<PostJob />} />
        <Route path="/job-details/:id" element={<JobDetail />} />
        <Route path="/editjob/:id" element={<EditJob />} />
      </Routes>
      <Toaster position="top-center" reverseOrder="false" />
    </BrowserRouter>
  );
}

export default App;
