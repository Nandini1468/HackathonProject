import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./Register";
import HomePage from "./HomePage";
import InputForm from "./InputForm";
import Dashboard from "./Dashboard";
import LoginForm from "./LoginForm"

function App() {
  const [user, setUser] = useState(null);

  // Simulate checking for logged-in user (replace with actual logic later)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={!!user} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/input-form" element={<InputForm/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/signin" element={<LoginForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;

