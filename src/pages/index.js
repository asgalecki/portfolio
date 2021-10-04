import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <title>Home Page</title>
        <h1>Artur Gałecki</h1>
        <h4 id="projects">Portfolio Website</h4>
        <p id="contact">ARTUR GAŁECKI</p>
      </main>
    </div>
  );
};

export default Home;
