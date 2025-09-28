import React from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section className={`bg-gradient-to-r from-servineo-primary to-servineo-secondary text-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encuentra el servicio que necesitas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-servineo-accent">
            Conectamos a personas con servicios de reparación y mantenimiento de calidad
          </p>
          {/* Aquí se integrará el SearchBar del layout */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
