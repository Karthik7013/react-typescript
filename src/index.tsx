import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Todo/App"
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import TravelHome from "./Travel/Home"
import HealthHome from "./Health/Home";
import LoanHome from "./Loan/Home";
import MotorHome from "./Motor/Home";
import DashboardHome from "./Dashboard/Home"
import { AppBar } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signin' element={<>signin</>}></Route>
        <Route path='/signup' element={<>signup</>}></Route>
        <Route path='/dashboard' element={<DashboardHome />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

