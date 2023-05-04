import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProviders';
import { useNavigate, useLocation  } from "react-router-dom";


const auth = getAuth(app);

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.username.value;
    const password = event.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleSignIn = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);

      });
  };

  const gitHubSignIn = () => {
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Header />
      <div className='text-center'>
        <div className="w-full max-w-xs mx-auto">
          <p className="text-center font-bold text-gray-500 text-2xl mt-5">
            Please Sign In
          </p>

          <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" />
              <p className="text-red-500 text-sm italic">{error}</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
              <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">New here? Register</Link>
            </div>
          </form>
          <p className="text-center font-bold text-gray-500 text-2xl mb-5">
            OR Login Using
          </p>
        </div>

        <button className='btn bg-red-400 mb-5' onClick={googleSignIn} >
          Login With Google
        </button>
        <button className='bg-black btn ml-5 mb-5' onClick={gitHubSignIn} >
          Login With GitHub
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Login;

