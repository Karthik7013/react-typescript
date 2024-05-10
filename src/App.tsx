import React from 'react';
import './App.css';
import { createTheme, colors, ThemeProvider, Grid, Typography, AppBar, Box, Stack } from '@mui/material';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AppHeader from './AppHeader/AppHeader';
import AppFooter from './AppFooter/AppFooter';
import TravelHome from "./Travel/Home";
import LoanHome from "./Loan/Home";
import MotorHome from "./Motor/Home";
import HealthHome from "./Health/Home"
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ height: '100dvh' }}>
        <AppHeader />
        <Routes>
          <Route path='/travel' element={<TravelHome />}></Route>
          <Route path='/loan' element={<LoanHome />}></Route>
          <Route path='health' element={<HealthHome />}></Route>
          <Route path='motor' element={<MotorHome />}></Route>
        </Routes>


        <Grid container>
          <Grid item xs={3}><Link to="travel">Travel</Link></Grid>
          <Grid item xs={3}><Link to="health">Health</Link></Grid>
          <Grid item xs={3}><Link to="loan">Loan</Link></Grid>
          <Grid item xs={3}><Link to="motor">Motor</Link></Grid>
        </Grid>
        <Outlet />
        <AppFooter />
      </Box>
    </ThemeProvider>

  );
}

export default App;
