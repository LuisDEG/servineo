'use client';

import React from 'react';
import Link from 'next/link';

const LegalLinks: React.FC = () => {
  const legalSections = [
    {
      title: 'Soporte',
      links: [
        { href: '/help', label: 'Centro de Ayuda' },
        { href: '/contact', label: 'Contacto' },
        { href: '/faq', label: 'Preguntas Frecuentes' },
        { href: '/support', label: 'Soporte Técnico' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacidad' },
        { href: '/terms', label: 'Términos' },
        { href: '/cookies', label: 'Cookies' },
        { href: '/legal', label: 'Aviso Legal' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {legalSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LegalLinks;
