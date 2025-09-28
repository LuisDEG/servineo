'use client';

import React from 'react';
import Link from 'next/link';

const FooterLinks: React.FC = () => {
  const linkSections = [
    {
      title: 'Servicios',
      links: [
        { href: '/services/plumbing', label: 'Plomería' },
        { href: '/services/electrical', label: 'Electricidad' },
        { href: '/services/carpentry', label: 'Carpintería' },
        { href: '/services/painting', label: 'Pintura' },
        { href: '/services/cleaning', label: 'Limpieza' },
        { href: '/services/gardening', label: 'Jardinería' },
      ],
    },
    {
      title: 'Para Fixers',
      links: [
        { href: '/fixers/register', label: 'Registrarse como Fixer' },
        { href: '/fixers/benefits', label: 'Beneficios' },
        { href: '/fixers/support', label: 'Soporte' },
        { href: '/fixers/guidelines', label: 'Guías' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {linkSections.map((section) => (
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

export default FooterLinks;
