import React from 'react';
import { Outlet } from 'react-router-dom';
import ExtraSection from './components/extraSection/ExtraSection';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home';

const App = () => {

  return (
    <div>
      <Header></Header>
      <Home></Home>
      <ExtraSection />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;