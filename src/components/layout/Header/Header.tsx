'use client';

import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/images/logo/servineo-logo.svg"
                alt="Servineo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <SearchBar />
          </div>

          {/* User Menu */}
          <UserMenu />

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
