import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Signin from './Components/Signin';
import Profile from './Components/Profile'; // Ensure you import Profile component
import { auth } from "./Components/firebase";

function App() {
  const [user,setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={user?<Navigate to="/profile"/>:<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="profile" element={<Profile />} /> {/* Ensure this route is defined */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
