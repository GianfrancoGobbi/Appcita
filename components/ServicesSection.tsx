import React from 'react';
import { SERVICES_DATA } from '../constants.tsx';
import { Service } from '../types.ts';
import Card from './common/Card.tsx';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros Servicios <span className="text-green-400">Expertos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios para llevar tu proyecto digital al siguiente nivel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service: Service) => (
            <Card key={service.id} className="text-center group" hoverEffect={true}>
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;