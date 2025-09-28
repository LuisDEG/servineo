'use client';

import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const navItems = [
    { href: '/services', label: 'Servicios' },
    { href: '/fixers', label: 'Fixers' },
    { href: '/jobs', label: 'Trabajos' },
    { href: '/about', label: 'Acerca de' },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
