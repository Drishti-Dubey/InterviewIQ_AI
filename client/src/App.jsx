import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import Auth from './pages/Auth' 
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice'; 
import Interview_page from './pages/Interview_page' 
import Interview_history from './pages/Interview_history';
import Pricing from './pages/Pricing';
import Interview_report from './pages/Interview_report';

export const ServerUrl = "https://interviewiq-ai-zkki.onrender.com";



function App() {

  const dispatch=useDispatch();

useEffect(()=>{
const getUser=async()=>{
  try{
const result = await axios.get(
  ServerUrl + "/api/user/current_user",
  {
    withCredentials: true,
});


dispatch(setUserData(result.data));


  }
  catch(error)
  {
console.log(error);
dispatch(setUserData(null));
  }
}
getUser();
},[dispatch])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
       <Route path="/interview" element={<Interview_page/>} />
 <Route path="/history" element={<Interview_history/>} />
  <Route path="/pricing" element={<Pricing/>} />
 <Route path="/report/:id" element={<Interview_report/>} />


    </Routes>
  )
}

export default App

