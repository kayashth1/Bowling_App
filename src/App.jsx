import React from 'react';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import Packages from './Pages/Packages';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Homepage />
      <AboutUsPage />
      <Packages />
      <Footer />
    </>
  );
}
