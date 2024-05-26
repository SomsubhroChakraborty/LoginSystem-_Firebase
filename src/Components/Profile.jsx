import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase'; // Ensure correct path to firebase.js
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'Users', currentUser.uid));
        if (userDoc.exists()) {
          setUserDetails(userDoc.data());
        } else {
          console.log('No such document!');
        }
      } else {
        console.log('No user is signed in');
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome {userDetails.firstName}</h1>
      <div>
        <p>Email: {userDetails.email}</p>
        <p>First Name: {userDetails.firstName}</p>
        <p>Last Name: {userDetails.lastName}</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
