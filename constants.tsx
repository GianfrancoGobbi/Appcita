import React from 'react';
import { Service, TeamMember, Testimonial, NavLink } from './types.ts';

export const COMPANY_NAME = "Appcita";

export const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#about", label: "Nosotros" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#contact", label: "Contacto" },
];

const sharedIconClasses = "w-16 h-16 text-green-400 mb-4 group-hover:text-green-500 transition-all duration-300 transform group-hover:scale-110 ease-in-out";

export const WebAppIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sharedIconClasses}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const ECommerceIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sharedIconClasses}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);

export const StockManagementIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sharedIconClasses}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

export const ClinicManagementIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={sharedIconClasses}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25m0 0H6.375" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h3M16.5 10.5v3" />
  </svg>
);

export const SERVICES_DATA: Service[] = [
  {
    id: "websites",
    icon: <WebAppIcon />,
    title: "Desarrollo de Sitios Web",
    description: "Creamos sitios web profesionales, responsivos y optimizados para motores de búsqueda, enfocados en la identidad de tu marca.",
  },
  {
    id: "ecommerce",
    icon: <ECommerceIcon />,
    title: "Plataformas E-commerce",
    description: "Desarrollamos tiendas online robustas y seguras, con integración de pasarelas de pago y gestión de productos.",
  },
  {
    id: "stock",
    icon: <StockManagementIcon />,
    title: "Sistemas de Manejo de Stock",
    description: "Implementamos soluciones eficientes para el control de inventario, seguimiento de productos y optimización de la cadena de suministro.",
  },
  {
    id: "appwebs",
    icon: <WebAppIcon />, // Reusing WebAppIcon for custom web applications
    title: "Aplicaciones Web a Medida",
    description: "Construimos aplicaciones web personalizadas y escalables que se adaptan a tus procesos y necesidades específicas.",
  },
  {
    id: "clinic",
    icon: <ClinicManagementIcon />,
    title: "Software de Gestión de Clínicas",
    description: "Ofrecemos software especializado para la administración de clínicas, incluyendo citas, historias clínicas y facturación.",
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  { id: "tm1", name: "Ana García", role: "CEO & Lead Strategist", imageUrl: "https://picsum.photos/seed/anagarcia/400/400", bio: "Con más de 10 años de experiencia, Ana lidera Appcita con una visión clara hacia la innovación y la excelencia en cada proyecto." },
  { id: "tm2", name: "Carlos López", role: "CTO & Principal Architect", imageUrl: "https://picsum.photos/seed/carloslopez/400/400", bio: "Apasionado de la tecnología, Carlos asegura que cada solución sea robusta, escalable y utilice las mejores prácticas de ingeniería." },
  { id: "tm3", name: "Sofía Chen", role: "Head of Design (UI/UX)", imageUrl: "https://picsum.photos/seed/sofiachen/400/400", bio: "Sofía transforma ideas complejas en experiencias de usuario intuitivas y visualmente impactantes, centradas en el usuario." },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    { id: "t1", quote: "Appcita transformó nuestra idea en una app increíble. ¡El proceso fue transparente y el resultado superó nuestras expectativas!", author: "Juan Pérez", company: "CEO, Startup Innovadora", avatarUrl: "https://picsum.photos/seed/juanperez/100/100" },
    { id: "t2", quote: "El equipo de Appcita no solo es talentoso, sino que también se preocupa genuinamente por el éxito de tu proyecto. ¡Muy recomendados!", author: "María Gómez", company: "Gerente, E-commerce Local", avatarUrl: "https://picsum.photos/seed/mariagomez/100/100" },
    { id: "t3", quote: "La consultoría estratégica que recibimos fue clave para definir nuestro roadmap tecnológico. Profesionalismo y conocimiento profundo.", author: "Luis Fernández", company: "Director, Tech Solutions Ltd.", avatarUrl: "https://picsum.photos/seed/luisfernandez/100/100"},
];

export const WHY_CHOOSE_US_POINTS = [
  { title: "Innovación Constante", description: "Utilizamos las últimas tecnologías y metodologías para ofrecerte soluciones de vanguardia." },
  { title: "Enfoque en el Cliente", description: "Tu éxito es nuestro principal objetivo. Trabajamos de cerca contigo en cada etapa." },
  { title: "Calidad Garantizada", description: "Procesos rigurosos de desarrollo y testing para asegurar productos robustos y confiables." },
  { title: "Equipo Experto", description: "Contamos con profesionales apasionados y con amplia experiencia en la industria." },
];