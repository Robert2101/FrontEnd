import "./css/Dashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import DashboardTitle from "../Components/DashboardTitle.jsx";
import Categories from "../Components/Categories.jsx";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <DashboardTitle />
      <Categories />
      <button className="profile-btn" onClick={() => navigate("/profile")}>
        Go to Profile
      </button>
    </div>
  );
};

export default Dashboard;