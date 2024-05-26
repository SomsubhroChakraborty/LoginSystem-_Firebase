import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");
      navigate("/profile");
    } catch (error) {
      alert(error.message); // Provide a more detailed error message
    }
  };

  return (
    <div className="container">
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
      <p>
        Don't have an account? <Link to="/signin">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
