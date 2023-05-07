import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [CIN, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
 

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('CIN', CIN);
    formData.append('password', password);
    formData.append('remember_me', rememberMe);

    axios.post('http://127.0.0.1:8000/login', formData)
      .then(response => {
        navigate('/home');
      })
      .catch(error => {
        console.log('email or password not correct!!');
      });
  } 


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="w-full max-w-md">
    <div className="bg-white rounded-lg shadow-lg px-8 py-6 mb-4">
      <h2 className="text-xl text-center font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-400 p-2 rounded-lg"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="mb-4">
          <label htmlFor="CIN" className="block text-gray-700 font-bold mb-2">
            CIN
          </label>
          <input
            type="text"
            id="CIN"
            className="w-full border border-gray-400 p-2 rounded-lg"
            name="CIN"
            value={CIN}
            onChange={e => setCin(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-400 p-2 rounded-lg"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember_me"
              className="mr-2"
              name="remember_me"
              value={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember_me" className="text-gray-700 font-bold">
              Remember Me
            </label>
          </div>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </div>

        <div className="text-center">
          <Link to={'/reset/password'} className="text-blue-500">
            Forgot Your Password?
          </Link>
        </div>

      </form>
    </div>
  </div>
</div>

  );
}

export default Login;
