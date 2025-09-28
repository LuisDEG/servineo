'use client';

import React from 'react';
import Link from 'next/link';

const UserMenu: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/login"
        className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      >
        Iniciar Sesión
      </Link>
      <Link
        href="/register"
        className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
      >
        Registrarse
      </Link>
    </div>
  );
};

export default UserMenu;
