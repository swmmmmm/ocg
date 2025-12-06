import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-secondary text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Быстрый и качественный <br className="hidden md:block" />
          <span className="text-primary">Ремонт Вашей Техники</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Мы возвращаем жизнь вашим гаджетам. Диагностика, ремонт и обслуживание ноутбуков, телефонов и планшетов любой сложности.
        </p>
        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          <a
            href="#contact"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-blue-500/50"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;