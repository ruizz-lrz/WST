import React from "react";
import { Routes, Route, Outlet, Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import NotFound from "./notfound";
import ContactForm from "./conform";

function Dashboard() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
    </div>
  );
}
const isAuthenticated = false; // change to true to allow access


function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}


//navbar
function WithNavbarLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

function WithoutNavbarLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* with navbar */}
      <Route element={<WithNavbarLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* without navbar */}
      <Route element={<WithoutNavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/conform" element={<ContactForm />} />
      </Route>
    </Routes>
  );
}


export default App;
