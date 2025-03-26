import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Quiz from "./Pages/Quiz.jsx";
import Profile from "./Pages/Profile.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/quiz/:category", element: <Quiz /> },
  { path: "/profile", element: <Profile /> } 
]);

export default router;