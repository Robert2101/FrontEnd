import "./css/Dashboard.css"; 
import React from "react";

import DashboardTitle from "../Components/DashboardTitle.jsx";
import Categories from "../Components/Categories.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardTitle />
      <Categories />
    </div>
  );
};

export default Dashboard;