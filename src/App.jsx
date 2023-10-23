import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./ProtectedRoute";
const Privacy = lazy(() => import("./pages/Privacy"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Payment = lazy(() => import("./pages/Payment"));
const Loading = lazy(() => import("./components/Loader"));
const TnC = lazy(() => import("./pages/TnC"));

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
            <Route
              path="/payment"
              element={<ProtectedRoute element={<Payment />} />}
            />
            <Route
              path="/privacy"
              element={<ProtectedRoute element={<Privacy />} />}
            />
            <Route path="/tnc" element={<ProtectedRoute element={<TnC />} />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
