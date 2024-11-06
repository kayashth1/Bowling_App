import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Homepage = () => {
  return (
    <div
      className="bg-black w-full h-svh lg:h-screen"
      style={{ fontFamily: 'Montserrat' }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
