import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScrollLink = (to: string) => {
    if (location.pathname === '/') {
      scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    } else {
      window.location.href = `/#${to}`;
    }
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="bg-secondary text-textPrimary p-4 flex items-center shadow-lg">
      <div className="mr-auto">
        <RouterLink to="/" className="hover:text-primary transition duration-300">
          <img src="/images/ajslogo.jpg" alt="AJS Scaffolding" className="h-32 w-auto" />
        </RouterLink>
      </div>
      <div className="flex-grow flex justify-center space-x-6 text-lg font-bold hidden md:flex">
        <RouterLink
          to="/"
          onClick={() => handleScrollLink('services')}
          className="hover:text-primary hover:underline transition duration-300 cursor-pointer">
          Services
        </RouterLink>
        <RouterLink
          to="/"
          onClick={() => handleScrollLink('news')}
          className="hover:text-primary hover:underline transition duration-300 cursor-pointer">
          News
        </RouterLink>
        <RouterLink to="/about" className="hover:text-primary hover:underline transition duration-300">
          About Us
        </RouterLink>
        <RouterLink to="/meet-the-team" className="hover:text-primary hover:underline transition duration-300">
          Meet the Team
        </RouterLink>
        <RouterLink to="/contact-us" className="hover:text-primary hover:underline transition duration-300">
          Contact Us
        </RouterLink>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary text-textPrimary flex flex-col items-center space-y-4 py-4 md:hidden">
          <RouterLink
            to="/"
            onClick={() => handleScrollLink('services')}
            className="hover:text-primary hover:underline transition duration-300 cursor-pointer">
            Services
          </RouterLink>
          <RouterLink
            to="/"
            onClick={() => handleScrollLink('news')}
            className="hover:text-primary hover:underline transition duration-300 cursor-pointer">
            News
          </RouterLink>
          <RouterLink to="/about" className="hover:text-primary hover:underline transition duration-300">
            About Us
          </RouterLink>
          <RouterLink to="/meet-the-team" className="hover:text-primary hover:underline transition duration-300">
            Meet the Team
          </RouterLink>
          <RouterLink to="/contact-us" className="hover:text-primary hover:underline transition duration-300">
            Contact Us
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
