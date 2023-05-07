import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserVerifiction = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Your email address is: {user.email}</p>
        </div>
      )}
      {!user && (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserVerifiction;
