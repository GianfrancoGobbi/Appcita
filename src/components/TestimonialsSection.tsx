
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Testimonial } from '../types';
import Card from './common/Card';

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
        <path d="M9.983 3c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zM22.017 3c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zM9.983 15c-3.141 0-5.983 1.629-7.983 4.049v7.918h16v-7.918c-2-2.42-4.842-4.049-7.983-4.049zM22.017 15c-3.141 0-5.983 1.629-7.983 4.049v7.918h16v-7.918c-2-2.42-4.842-4.049-7.983-4.049z"></path>
    </svg>
);


const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo Que Dicen <span className="text-green-400">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Historias de éxito y colaboraciones que nos enorgullecen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial: Testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              <QuoteIcon className="w-10 h-10 text-green-600 mb-4"/>
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                {testimonial.avatarUrl && (
                    <img 
                    src={testimonial.avatarUrl.startsWith('http') ? testimonial.avatarUrl : `https://picsum.photos/seed/${testimonial.author.replace(/\s+/g, '')}/100/100`}
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                )}
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;