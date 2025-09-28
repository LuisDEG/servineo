import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-responsive section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Encuentra el servicio que necesitas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Conectamos a personas con servicios de reparación y mantenimiento 
              de calidad en su área local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Buscar Servicios
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Ser Fixer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de reparación y mantenimiento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Plomería', icon: '🔧', description: 'Reparaciones y mantenimiento de fontanería' },
              { name: 'Electricidad', icon: '⚡', description: 'Instalaciones y reparaciones eléctricas' },
              { name: 'Carpintería', icon: '🔨', description: 'Trabajos en madera y muebles' },
              { name: 'Pintura', icon: '🎨', description: 'Pintura de interiores y exteriores' },
              { name: 'Limpieza', icon: '🧹', description: 'Servicios de limpieza profesional' },
              { name: 'Jardinería', icon: '🌱', description: 'Mantenimiento de jardines' },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-icon bg-primary-100 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encuentra y contrata servicios de manera fácil y segura
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Describe tu necesidad',
                description: 'Cuéntanos qué servicio necesitas y cuándo lo requieres'
              },
              {
                step: '2',
                title: 'Recibe propuestas',
                description: 'Los fixers calificados te enviarán sus propuestas'
              },
              {
                step: '3',
                title: 'Elige y contrata',
                description: 'Selecciona la mejor opción y programa tu servicio'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya confían en Servineo para sus necesidades de reparación y mantenimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Buscar Servicios
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Registrarse como Fixer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
