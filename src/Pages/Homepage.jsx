import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Homepage = () => {
  return (
    <div
      className="relative w-full h-svh lg:h-screen overflow-hidden"
      style={{ fontFamily: 'Montserrat' }}
    >
      {/* Background Video */}
      <video
        src="/hero.mp4" // Replace with the path or URL of your video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 filter brightness-80"
      />

      {/* Overlay Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Homepage;
