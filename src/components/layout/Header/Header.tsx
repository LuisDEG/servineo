'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">SERVINEO</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <Navigation />

            {/* User Actions */}
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="px-4 py-3">
          {/* Top Row - Logo and User Actions */}
          <div className="flex justify-between items-center mb-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-lg font-bold text-gray-900">SERVINEO</span>
              </div>
            </Link>

            {/* User Actions */}
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className="text-sm text-gray-700 hover:text-primary-600 px-2 py-1"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="bg-primary-600 text-white text-sm px-3 py-1 rounded-md hover:bg-primary-700 transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu isOpen={isMobileMenuOpen} onToggle={setIsMobileMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
