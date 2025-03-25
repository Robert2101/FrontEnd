import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";


function App() {

  return <RouterProvider router={router} />;
}

export default App
