import React from "react";
import { useAuth } from "./App"; // correct path

const Admin = () => {
  const { logout, username } = useAuth();

  return (
    <div>
      <h2>Admin Secret Page</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Admin;
