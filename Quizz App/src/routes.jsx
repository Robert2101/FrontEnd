import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Quiz from "./Pages/Quiz.jsx"; 

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/quiz/:category", element: <Quiz /> } 
  
]);

export default router;