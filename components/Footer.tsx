import React from 'react';
import { COMPANY_NAME } from '../constants.tsx';

const FacebookIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
const TwitterIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.565-.665 2.455 0 1.613.823 3.033 2.072 3.864-.766-.024-1.483-.233-2.11-.583v.06c0 2.254 1.603 4.135 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.475 2.323-2.41z"/></svg>;
const LinkedInIcon = () => <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.594-11.018-3.714v-2.155z"/></svg>;


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white hover:text-green-300 transition-colors">
              {COMPANY_NAME}<span className="text-green-400">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Transformando ideas en realidad digital.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <TwitterIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;