import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import UserStatus from './UserStatus';

const Header = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Make an HTTP GET request to /api/user endpoint to check if the user is authenticated
    fetch('/api/user')
      .then(response => {
        if (response.ok) {
          setUserLoggedIn(false);
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
    <header className=" bg-white shadow-lg p-1 fixed top-0 left-0 w-full z-10 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-white font-bold hover:text-gray-200">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-12 w-52 mr-2 fill-current text-white"
          />
        </Link>
      </div>

      

      {!userLoggedIn ? (
        <div className="flex space-x-4">
          <Link to={'/singup'}>
            <button class="relative inline-flex items-center justify-center p-0.5 my-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  S'inscrire
              </span>
            </button>
          </Link>
          <Link to={'/login'}>
            <button class="relative inline-flex items-center justify-center p-0.5 my-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Se connecter
              </span>
            </button>
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
    </header>
  );
};

export default Header;
