import * as React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <title>Home Page</title>
      </main>
    </div>
  );
};

export default Home;
