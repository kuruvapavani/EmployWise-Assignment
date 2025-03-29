import React from 'react'
import Home from "../components/home/Home"
import { useEffect} from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect to login if no token
        return;
      }
      navigate("/users");
    }, [navigate]);

  return (
    <Home />
  )
}

export default HomePage