import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ToDo from "./pages/ToDo";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/to-do" element={user ? <ToDo /> : <Navigate to="/" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
