import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Todo/App"
import { Route, Routes, BrowserRouter, Outlet, useLocation } from "react-router-dom"
import DashboardHome from "./Dashboard/Home"
import SignIn from './Todo/Signin/Signin';
import PostDetails from './Todo/PostDetails';
import Header from './Todo/Header';
import SignUp from './Todo/Signup/Signup';
import MessageBox from './Todo/MessageBox/MessageBox';
import NotificationBox from './Todo/NotificationBox/NotificationBox'
import Main from './Dashboard/Pages/Main';
import { store } from './Redux/Store';
import { Provider } from "react-redux";
import { useEffect } from "react";
import { ThemeProvider } from '@mui/material';
import theme from './Todo/Theme/theme';
import PageNotFound from './Todo/PageNotFound/PageNotFound';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);




const Root = () => {
  const location = useLocation();
  useEffect(() => {
    const routeName = location.pathname.replace('/', '');
    document.title = `Blogger | ${routeName ? routeName : 'Home'}`;
  }, [location.pathname]);
  return <Routes>
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
      <Route path='post' element={<>Post dashboard</>}></Route>
      <Route path='profile' element={<>Profile dashboard</>}></Route>
      <Route path='save' element={<>save dashboard</>}></Route>
      <Route path='like' element={<>like dashboard</>}></Route>
      <Route path='analytics' element={<>analytics dashboard</>}></Route>
      <Route path='settings' element={<>settings dashboard</>}></Route>
    </Route>
    <Route path='*' element={<PageNotFound />}></Route>
  </Routes>

}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

