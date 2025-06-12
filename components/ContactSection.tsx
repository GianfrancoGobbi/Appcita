import React, { useState } from 'react';
import Button from './common/Button.tsx';
import Card from './common/Card.tsx';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!formData.name || !formData.email || !formData.message) {
        setError("Por favor, completa todos los campos.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError("Por favor, ingresa un email válido.");
        return;
    }
    // Simulate form submission
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5 seconds
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablemos de <span className="text-green-400">Tu Proyecto</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ¿Tienes una idea o necesitas una solución digital? Contáctanos y la haremos realidad.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto p-8 md:p-10 !shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-300">Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500 transition-colors"
                  placeholder="Tu Nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Tu Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500 transition-colors"
                  placeholder="Cuéntanos sobre tu proyecto o idea..."
                />
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

// Icon for submission success
const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);


export default ContactSection;