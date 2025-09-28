import React from 'react';

interface FeaturedServicesProps {
  className?: string;
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ className = "" }) => {
  const services = [
    { name: 'Plomería', icon: '🔧', description: 'Reparaciones y mantenimiento' },
    { name: 'Electricidad', icon: '⚡', description: 'Instalaciones eléctricas' },
    { name: 'Limpieza', icon: '🧹', description: 'Servicios de limpieza' },
    { name: 'Jardinería', icon: '🌱', description: 'Mantenimiento de jardines' },
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Servicios Destacados
          </h2>
          <p className="text-lg text-gray-600">
            Los servicios más solicitados en tu área
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:border-servineo-primary border-2 border-transparent transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
