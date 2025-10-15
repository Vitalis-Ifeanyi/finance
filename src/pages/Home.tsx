// src/pages/Home.tsx
import React from 'react';
import Hero from '../component/Hero';

import Navbar from '../component/NavBar';

const Home: React.FC = () => {
  return (
    <>
     <Navbar/>
      <Hero />
    </>
  );
};

export default Home;