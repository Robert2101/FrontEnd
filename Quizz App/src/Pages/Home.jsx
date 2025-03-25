import React from "react";
import "./css/Home.css"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
    return (
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to the Ultimate Quiz Experience</h1>
          <p className="hero-subtitle">
            Challenge your mind, test your skills, and compete with the best.
          </p>
          <button className="hero-button" onClick={() => navigate("/dashboard")}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  };

export default Home;