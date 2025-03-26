import React from "react";
import "./css/Home.css"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the Ultimate Quiz Experience</h1>
        <p className="hero-subtitle">
          Challenge your mind, test your skills, and compete with the best.
        </p>
        <button className="hero-button" onClick={() => navigate("/dashboard")}>
          Start Quiz
        </button>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Our Quiz Platform</h2>
        <p>
          Our platform provides a fun and engaging way to test your knowledge across various topics.
          Whether you're a student, a professional, or just someone who loves trivia, we've got something for you!
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🌍 Wide Range of Categories</h3>
            <p>Test your knowledge in programming, science, history, and more!</p>
          </div>
          <div className="feature-card">
            <h3>🏆 Compete & Win</h3>
            <p>Earn points, track your progress, and climb the leaderboard.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Instant Feedback</h3>
            <p>Get real-time results and detailed explanations for each answer.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Mobile-Friendly</h3>
            <p>Enjoy seamless experience across all devices.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"This quiz platform is amazing! I love the variety of topics and the instant feedback!"</p>
          <span>- Alex R.</span>
        </div>
        <div className="testimonial">
          <p>"A great way to test my programming knowledge. The challenges keep me coming back!"</p>
          <span>- Sarah K.</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ultimate Quiz Experience. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;