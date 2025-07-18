import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Verify from './pages/Verify';
// import { UserData } from './context/UserContext';

const App = () => {
  // const {user} = UserData();
  // console.log(user);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
