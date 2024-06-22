import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  Routes,
  BrowserRouter,
  Outlet
} from "react-router-dom";
import DashboardHome from "./Dashboard/User/Home/Home";
import SignIn from "./Pages/Signin/Signin";
import PostDetails from "./Components/PostDetails/PostDetails";
import Header from "./Components/Header/Header";
import SignUp from "./Pages/Signup/Signup";
import MessageBox from "./Pages/MessageBox/MessageBox";
import NotificationBox from "./Pages/NotificationBox/NotificationBox";
import Analytics from "./Dashboard/User/Analytics/Analytics";
import { store } from "./Redux/Store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme/theme";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Profile from "./Dashboard/User/Profile/Profile";
import MyPosts from "./Dashboard/User/MyPosts/MyPosts";
import SavedPost from "./Dashboard/User/SavedPost/SavedPost";
import Settings from "./Dashboard/User/Settings/Settings";
import axios from "axios";
import { BASE_URL_ } from "./config";
import { getToken } from "./Utils/utils";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { handleAlert, handleLoading, handleLogin } from "./Redux/Actions/actions";
import { initialStateProps } from "./Types/Types";
import AlertBox from "./Components/AlertBox/AlertBox";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Root = () => {

  const mode = useSelector((e: initialStateProps) => e.theme);
  const dispatch = useDispatch();

  const getProfile = async (token: string) => {

    const headers = {
      Authorization: "Bearer YourAccessToken",
      "Content-Type": "application/json",
      "x-auth-token": token,
    };

    try {
      dispatch(handleLoading(true));
      const res = await axios.get(`${BASE_URL_}/user/profile`, { headers });
      if (res.status === 200) {
        dispatch(handleLogin(res.data.user));
      } else {
        console.log("invalid/expired login");
      }
    }
    catch (error) {
      dispatch(handleAlert({ type: 'error', message: 'Internal Error', state: true }))
    } finally {
      dispatch(handleLoading(false));
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      getProfile(token);
    }
  }, []);


  // const UserRoutes = () => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<><Header /><Outlet /></>}>
  //         <Route index element={<App />} />
  //         <Route path='postdetails/:id' element={<PostDetails />} />
  //         <Route path='messages' element={<MessageBox />} />
  //         <Route path='notifications' element={<NotificationBox />} />
  //       </Route>
  //     </Routes>
  //   );
  // };

  // const AdminRoutes = () => {
  //   return <Box><AppBar color="info"><Toolbar>ADMIN</Toolbar></AppBar></Box>;
  // };

  return (
    <ThemeProvider theme={!(mode === 'light') ? lightTheme : darkTheme}>
      <CssBaseline />
      {/* <Routes>
        <Route path="/" element={isAdmin ? <AdminRoutes /> : <UserRoutes />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes> */}
      {/*  */}
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
          <Route index element={<Analytics />}></Route>
          <Route path='post' element={<MyPosts />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='save' element={<SavedPost />}></Route>
          <Route path='settings' element={<Settings />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <AlertBox />
    </ThemeProvider>
  );
};

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="180663477927-tr6u63n64m3taho8r3gm3eqmmncqhc1q.apps.googleusercontent.com">
        <Root />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);
