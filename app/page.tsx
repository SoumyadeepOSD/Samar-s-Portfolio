"use client";
import NavBar from '@/components/navbar';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Documents from '@/components/sections/documents';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 h-full flex flex-col items-center justify-start py-10 z-0 overflow-hidden">
      <NavBar />
      <div id="about" className="mt-10">
        <About />
      </div>
      <div id="contact" className="mt-10">
        <Contact />
      </div>
      <div id="education" className="mt-10">
        <Education />
      </div>
      <div id="experience" className="mt-10">
        <Experience />
      </div>
      <div id="documents" className="mt-10">
        <Documents />
      </div>
    </div>
  );
};

export default Home;
