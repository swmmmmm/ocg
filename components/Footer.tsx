import React from 'react';
import { Github, Send as Telegram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Contact Info */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-xl font-bold text-white mb-4">Service N</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
              <Phone size={18} />
              <a href="tel:+79991234567" className="text-gray-300 hover:text-white transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              <a href="mailto:example@mail.ru" className="text-gray-300 hover:text-white transition-colors">
                service.n@mail.ru
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <Telegram size={20} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>&copy; {currentYear} Service N.</p>
            <p>Все права защищены.</p>
            <p className="mt-2 text-xs text-gray-500">Разработано для лабораторной работы</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;