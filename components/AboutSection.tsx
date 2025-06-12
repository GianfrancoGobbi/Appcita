import React from 'react';
import { TEAM_MEMBERS_DATA, WHY_CHOOSE_US_POINTS } from '../constants.tsx';
import { TeamMember } from '../types.ts';
import Card from './common/Card.tsx';
import AnimatedCheckCircleIcon from './common/AnimatedCheckCircleIcon.tsx'; // Import the new animated icon

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conoce a <span className="text-green-400">Appcita</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Somos un equipo apasionado por la tecnología, dedicado a crear soluciones digitales que marcan la diferencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Por Qué Elegirnos</h3>
            <p className="text-gray-300 mb-6">
              En Appcita, no solo construimos software, construimos relaciones. Nuestro compromiso es con tu visión y tu éxito.
            </p>
            <ul className="space-y-4">
              {WHY_CHOOSE_US_POINTS.map((point, index) => (
                <li key={index} className="flex items-start">
                  <AnimatedCheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-100">{point.title}</h4>
                    <p className="text-gray-400 text-sm">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/office1/600/400" alt="Team working" className="rounded-lg shadow-lg aspect-square object-cover"/>
            <img src="https://picsum.photos/seed/office2/600/400" alt="Modern office" className="rounded-lg shadow-lg aspect-square object-cover mt-8"/>
             <img src="https://picsum.photos/seed/office3/600/400" alt="Collaboration" className="rounded-lg shadow-lg aspect-square object-cover"/>
             <img src="https://picsum.photos/seed/office4/600/400" alt="Innovative workspace" className="rounded-lg shadow-lg aspect-square object-cover mt-8"/>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 md:mb-12">Nuestro Equipo de Expertos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS_DATA.map((member: TeamMember) => (
              <Card key={member.id} className="text-center group" hoverEffect={true}>
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700 group-hover:border-green-400 transition-all duration-300"
                />
                <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                <p className="text-green-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm px-2">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;