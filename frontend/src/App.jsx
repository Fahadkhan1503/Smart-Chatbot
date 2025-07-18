import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Verify from './pages/Verify';
import { UserData } from './context/UserContext';
import { LoadingBig } from './components/Loading';
// import { UserData } from './context/UserContext';

const App = () => {
  // const {user} = UserData();
  // console.log(user);
  const {user, isAuth, loading} = UserData();
  return (
    <>
    {loading? <LoadingBig /> :<BrowserRouter>
    <Routes>
      <Route path="/" element={ isAuth?<Home />: <Login />} />
      <Route path="/login" element={ isAuth?<Home />: <Login /> } />
      <Route path="/verify" element={ isAuth? <Home />: <Verify />} />
    </Routes>
    </BrowserRouter>}
    </>
  )
}

export default App;
