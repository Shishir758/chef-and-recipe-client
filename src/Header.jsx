import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './provider/AuthProviders';

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  console.log(user);

  if (loading) {
    return 
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    logOut()
      .then(() => { })
      .catch(error)
  }

  return (
    <nav className=" flex items-center justify-between flex-wrap bg-white p-6 ">
      <div className="flex items-center flex-shrink-0">
        <span className="font-bold text-red-500 text-3xl tracking-tight">
          Special JP CHEF
        </span>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${isMenuOpen ? '' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow text-center mx-auto">
          <NavLink
            exact
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl"
            activeClassName="text-blue-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl"
            activeClassName="text-blue-500"
          >
            Blog
          </NavLink>

        </div>
        <div>
          {!user ? (
            <React.Fragment>
              <NavLink exact to="/register" activeClassName="text-blue-500" className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl">
                Register
              </NavLink>

              <NavLink exact to="/login" activeClassName="text-blue-500" className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl">
                Sign In
              </NavLink>
            </React.Fragment>
          ) : (

            <button onClick={handleLogin} className="inline-block text-xl px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 last-child">Log Out</button>

          )}
          {user && <img
            src={user.profileURL}
            className="h-[45px] w-[45px] rounded-full inline-block"
            alt="" />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
