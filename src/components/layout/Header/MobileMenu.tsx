'use client';

import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  const navItems = [
    { href: '/services', label: 'Servicios' },
    { href: '/jobs', label: 'Ofertas de trabajo' },
    { href: '/help', label: 'Ayuda' },
  ];

  return (
    <div className="w-full">
      <button
        onClick={() => onToggle(!isOpen)}
        className="w-full flex items-center justify-between p-3 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-sm font-medium">Menú</span>
        <svg
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 bg-gray-50 rounded-md p-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-white transition-colors duration-200"
              onClick={() => onToggle(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
