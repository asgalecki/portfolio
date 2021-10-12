import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div id="home">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
