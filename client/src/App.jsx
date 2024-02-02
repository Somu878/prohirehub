import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Loader from "./components/loader/Loader";

const HomeLazy = lazy(() => import("./pages/home/Home"));
const LoginLazy = lazy(() => import("./pages/login/Login"));
const RegisterLazy = lazy(() => import("./pages/registration/Register"));
const PostJobLazy = lazy(() => import("./pages/postJob/PostJob"));
const JobDetailLazy = lazy(() => import("./pages/jobDetails/JobDetail"));
const EditJobLazy = lazy(() => import("./pages/editJob/EditJob"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomeLazy />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <LoginLazy />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <RegisterLazy />
            </Suspense>
          }
        />
        <Route
          path="/addjob"
          element={
            <Suspense fallback={<Loader />}>
              <PostJobLazy />
            </Suspense>
          }
        />
        <Route
          path="/job-details/:id"
          element={
            <Suspense fallback={<Loader />}>
              <JobDetailLazy />
            </Suspense>
          }
        />
        <Route
          path="/editjob/:id"
          element={
            <Suspense fallback={<Loader />}>
              <EditJobLazy />
            </Suspense>
          }
        />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
