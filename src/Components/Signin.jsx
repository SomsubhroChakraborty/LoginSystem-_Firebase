import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from './firebase'; 
import { setDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed in successfully!");

      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname
      });

      console.log("User data saved to Firestore");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
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
      <input
        type="text"
        placeholder="Enter Firstname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Lastname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <button onClick={handleRegister}>Sign Up</button>
      <p>
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </div>
  );
}

export default Signin;
