import React, { createContext, useState, useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./contact";
import NotFound from "./notfound";
import ContactForm from "./conform";
import Admin from "./admin";
import Login from "./login";

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

// --- Auth Context ---
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  const login = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
  };

  const contextValue = { isAuthenticated, login, logout, username };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function App() {
  const { isAuthenticated } = useAuth(); // Use the hook to get the value

  return (
    <Routes>
      {/* with navbar */}
      <Route element={<WithNavbarLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <Admin />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Route>

      {/* without navbar */}
      <Route element={<WithoutNavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/conform" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
export { useAuth, AuthProvider };
