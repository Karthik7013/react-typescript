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
import NotificationBox from './Todo/NotificationBox/NotificationBox'
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
        <Route path='notifications' element={<NotificationBox />}></Route>
      </Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path="dashboard" element={<DashboardHome />} >
        <Route index element={<>main dashboard</>}></Route>
        <Route path='post' element={<>Post dashboard</>}></Route>
        <Route path='profile' element={<>Profile dashboard</>}></Route>
        <Route path='save' element={<>save dashboard</>}></Route>
        <Route path='like' element={<>like dashboard</>}></Route>
        <Route path='analytics' element={<>analytics dashboard</>}></Route>
        <Route path='settings' element={<>settings dashboard</>}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
);

