import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Todo/App"
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom"
import DashboardHome from "./Dashboard/Home"
import SignIn from './Todo/Signin/Signin';
import PostDetails from './Todo/PostDetails';
import Header from './Todo/Header';
import SignUp from './Todo/Signup/Signup';
import MessageBox from './Todo/MessageBox/MessageBox';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Header /><Outlet /></>}>
        <Route index element={<App />}></Route>
        <Route path='postdetails' element={<PostDetails />}></Route>
        <Route path='messages' element={<MessageBox />}></Route>
        <Route path='notifications' element={<MessageBox />}></Route>
      </Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path="/dashboard" element={<>Dashboard</>}></Route>
    </Routes>
  </BrowserRouter>
);

