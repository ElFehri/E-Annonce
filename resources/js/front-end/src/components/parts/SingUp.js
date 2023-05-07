import { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [password_conf, setPasswordConf] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          cin,
          password,
          password_conf: password_conf,
          role,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 mt-6">
        <div className="bg-white shadow-2xl shadow-gray-600 rounded-lg px-8 pt-6 pb-4 my-10">
          <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
          <hr className="my-4" />
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="name"
              >
                Name:
              </label>
              <input required placeholder='Prenom & Nom'
                type="text"
                id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="email"
              >
                Email:
              </label>
              <input required placeholder='Email' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-1" htmlFor="cin">
                CIN:
              </label>
              <input required placeholder='CIN' type="text" id="cin" name="cin" value={cin} onChange={(e) => setCin(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-1" htmlFor="password">
                Password:
              </label>
              <input required placeholder='Password' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold mb-1" htmlFor="password_conf">
                Confirm Password:
              </label>
          <input required placeholder='Password confirmation' type="password" id="password_conf" name="password_conf" value={password_conf} onChange={(e)=> setPasswordConf(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="role" >
            Role:
          </label>
          <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">--Please select a role--</option>
            <option value="member">Membre</option>
            <option value="admin">Admin</option>
            <option value="responsable">Responsable</option>
          </select>
        </div>
        <div className="flex items-center justify-between mt-4">
                  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => { navigate('/');}} >
                    Cancel
                  </button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
);
}

export default SignUp;
