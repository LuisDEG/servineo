'use client';

import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const navItems = [
    { href: '/services', label: 'Servicios' },
    { href: '/jobs', label: 'Ofertas de trabajo' },
    { href: '/help', label: 'Ayuda' },
  ];

  return (
    <nav className="flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
