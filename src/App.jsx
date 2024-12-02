import React from 'react';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import Packages from './Pages/Packages';
import Footer from './components/Footer';
import SchedulePage from './Pages/SchedulePage';

export default function App() {
  return (
    <>
      <Homepage />
      <SchedulePage />
      <AboutUsPage />
      <Packages />
      <Footer />
    </>
  );
}
