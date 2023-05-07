import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import SingUp from './SingUp';

const UserStatus = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Make an HTTP GET request to /api/user endpoint to check if the user is authenticated
    fetch('/api/user')
      .then(response => {
        if (response.ok) {
          setUserLoggedIn(true);
        }
      });
  }, []);

  const handleLogin = () => {
      
  };

  const handleLogout = () => {
    // Make an HTTP POST request to /logout endpoint to log out the user
    fetch('/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          setUserLoggedIn(false);
        }
      });
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {!userLoggedIn ? (
        <div className="flex space-x-4">
          <Link
            className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            to={'/login'}
          >
            Log in
          </Link>
          <Link
            className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            to={'/singup'}
          >
            Sign up
          </Link>
        </div>
      ) : (
        <div>
          <button
            className="bg-gray-300 hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-full shadow"
            onClick={handleToggleMenu}
          >
            P
          </button>
          {isMenuOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <li>
                <Link
                  to="/my-ads"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Mes Annonces
                </Link>
              </li>
              <li>
                <Link
                  to="/my-info"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Mes Informations
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UserStatus;
