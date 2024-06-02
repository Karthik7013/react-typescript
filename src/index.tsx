import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Todo/App"
import { Route, Routes, BrowserRouter, Outlet, useNavigate } from "react-router-dom"
import DashboardHome from "./Dashboard/Home"
import SignIn from './Todo/Signin/Signin';
import PostDetails from './Todo/PostDetails';
import Header from './Todo/Header';
import SignUp from './Todo/Signup/Signup';
import MessageBox from './Todo/MessageBox/MessageBox';
import NotificationBox from './Todo/NotificationBox/NotificationBox'
import Main from './Dashboard/Pages/Main';
import { store } from './Redux/Store';
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './Todo/Theme/theme';
import PageNotFound from './Todo/PageNotFound/PageNotFound';
import Profile from './Todo/Profile/Profile';
import MyPosts from './Todo/MyPosts/MyPosts';
import SavedPost from './Todo/SavedPost/SavedPost';
import Settings from './Todo/Settings/Settings';
import axios from 'axios';
import { BASE_URL_ } from './config';
import { getToken } from './Todo/Utils/utils';
import { GoogleOAuthProvider } from "@react-oauth/google"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const Root = () => {
  const dark = useSelector((e: any) => e.dark);
  let dispatch = useDispatch();



  const getProfile = async (token: string) => {
    const headers = {
      'Authorization': 'Bearer YourAccessToken',
      'Content-Type': 'application/json',
      'x-auth-token': token
    };
    try {
      dispatch({ type: 'LOADING', payload: true })
      let res = await axios.get(`${BASE_URL_}/user/profile`, { headers })
      if (res.status === 200) {
        dispatch({ type: 'LOGIN', payload: res.data.user })
      } else {
        console.log('invalid/expired login')
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      dispatch({ type: 'LOADING', payload: false })
    }
  }

  useEffect(() => {
    const token = getToken();
    if (token) {
      getProfile(token)
    }
  }, [dispatch])

  return <ThemeProvider theme={dark ? darkTheme : lightTheme}>
    <CssBaseline />
    <Routes>
      <Route path='/' element={<><Header /><Outlet /></>}>
        <Route index element={<App />}></Route>
        <Route path='postdetails/:id' element={<PostDetails />}></Route>
        <Route path='messages' element={<MessageBox />}></Route>
        <Route path='notifications' element={<NotificationBox />}></Route>
      </Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path="dashboard" element={<DashboardHome />} >
        <Route index element={<Main />}></Route>
        <Route path='post' element={<MyPosts />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='save' element={<SavedPost />}></Route>
        <Route path='settings' element={<Settings />}></Route>
      </Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  </ThemeProvider>

}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='180663477927-tr6u63n64m3taho8r3gm3eqmmncqhc1q.apps.googleusercontent.com'>
        <Root />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);