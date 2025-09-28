'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This would come from auth context

  if (!isAuthenticated) {
    return (
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/login"
          className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/register"
          className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
        >
          Registrarse
        </Link>
      </div>
    );
  }

  return (
    <div className="relative hidden md:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
      >
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium text-primary-600">U</span>
        </div>
        <svg
          className="w-4 h-4"
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
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Mi Perfil
          </Link>
          <Link
            href="/jobs"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Mis Trabajos
          </Link>
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Configuración
          </Link>
          <hr className="my-1" />
          <button
            onClick={() => setIsAuthenticated(false)}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
