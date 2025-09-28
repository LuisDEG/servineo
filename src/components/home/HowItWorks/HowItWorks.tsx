import React from 'react';

interface HowItWorksProps {
  className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className = "" }) => {
  const steps = [
    {
      number: '1',
      title: 'Describe tu necesidad',
      description: 'Cuéntanos qué servicio necesitas y cuándo lo requieres'
    },
    {
      number: '2',
      title: 'Recibe ofertas',
      description: 'Profesionales verificados te enviarán sus propuestas'
    },
    {
      number: '3',
      title: 'Elige el mejor',
      description: 'Compara precios, reseñas y elige al profesional ideal'
    },
    {
      number: '4',
      title: 'Disfruta el servicio',
      description: 'Recibe el servicio de calidad que mereces'
    }
  ];

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600">
            En pocos pasos tendrás el servicio que necesitas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-servineo-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
