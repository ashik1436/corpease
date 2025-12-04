import React, { useState } from 'react';
import { NavItem } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedElement from './ui/AnimatedElement';

const navItems: NavItem[] = [
  { name: 'Home', id: 'home' },
  { name: 'About Us', id: 'about-us' },
  { name: 'Our Services', id: 'core-offerings' },
  { name: 'Contact Us', id: 'contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're on a legal page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  const navigateToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <AnimatedElement
      animationType="fadeInDown"
      duration="duration-1000"
      className="sticky top-0 z-50"
    >
      <header className="bg-beige-50/90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => {
                navigateToHome();
                setTimeout(() => {
                  const element = document.getElementById('home');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
            >
              <img
                src="/images/corpeas_logo.png"
                alt="Corpeas Logo"
                className="h-16 w-16 object-contain"
              />
              <h1 className="ml-3 text-3xl font-bold text-brown-700 tracking-tight">CORPEAS</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-brown-700 hover:text-brown-600 transition-colors duration-300 text-base lg:text-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brown-700 hover:text-brown-600 focus:outline-none"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-beige-50 shadow-lg absolute top-20 left-0 right-0 z-40">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-brown-700 hover:text-brown-600 transition-colors duration-300 text-lg"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </AnimatedElement>
  );
};

export default Header;