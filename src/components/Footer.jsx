import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProviders';

function Footer() {

  const { loading } = useContext(AuthContext);

  if (loading) {
    return 
  }

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              About
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Recipes
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Contact
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Instagram
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Twitter
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Facebook
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 Japanese Chef. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
