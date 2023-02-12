import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Business from './Pages/AddBusiness/Business';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllState from './Redux/Global/AllState';
import { useSelector } from 'react-redux';
import Loader from './Components/Loader';
import Lock from './Components/Lock';

const theme = createTheme({
  palette: {
    primary: {
      main: "#163172"
    }
  }
})

function App() {

  let user = useSelector((state) => state.UserReducer);
  const [bool, setBool] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setBool(user.loader);
  }, [user.loader]);

  useEffect(() => {
    setFlag(true);
    setInterval(() => {
      setFlag(false);
    }, 4000);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AllState>
          {(bool || flag) && <Loader/>}
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/business' element={<Lock component={<Business/>} />} />
            <Route path='/dashboard' element={<Lock component={<Dashboard/>} />} />
          </Routes>
        </AllState>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;