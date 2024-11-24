import React from 'react';

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 border-2 border-slate-500 rounded-xl bg-blue-600">
      <ul className="text-xs md:text-sm flex flex-row items-center justify-center gap-5 rounded-2xl p-5 text-white">
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollToSection('education')}
        >
          Education
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollToSection('experience')}
        >
          Experience
        </li>
        <li
          className="hover:cursor-pointer"
          onClick={() => scrollToSection('documents')}
        >
          Documents
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
