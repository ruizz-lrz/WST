import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./App"; // Adjust the path if your authContext.js is in a different folder

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const allowedUsers = ["diannel", "ayen"];

  const handleLogin = () => {
    if (allowedUsers.includes(username.toLowerCase())) {
      login(username); // Pass the actual username into context
      navigate("/admin");
    } else {
      setError("Invalid username. Access denied.");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;