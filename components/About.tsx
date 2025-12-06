import React from 'react';
import { ShieldCheck, Clock, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            О сервисе N
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image requirement: Original photo placeholder */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video lg:aspect-square">
              {/* NOTE: Replace this src with your actual original photo for the lab assignment */}
              <img 
                src="https://picsum.photos/id/48/800/800" 
                alt="Мастер за работой" 
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              {/* Text requirement: Minimum 300 characters */}
              <p className="text-justify leading-relaxed">
                Добро пожаловать в <strong>Service N</strong> — вашу надежную мастерскую по ремонту цифровой электроники. 
                Мы начали свой путь в 2023 году с простой идеи: ремонт техники должен быть прозрачным, честным и долговечным. 
                В отличие от крупных сетевых сервисов, мы уделяем персональное внимание каждому устройству. 
                Я лично провожу диагностику, согласовываю стоимость работ до начала ремонта и использую только качественные комплектующие.
              </p>
              <p className="text-justify leading-relaxed mt-4">
                Наша специализация широка: от замены разбитых дисплеев и аккумуляторов на смартфонах до сложного компонентного ремонта материнских плат ноутбуков и чистки игровых консолей от пыли. 
                Мы понимаем, как важно оставаться на связи в современном мире, поэтому 80% модульных ремонтов выполняются в день обращения. 
                На все выполненные работы предоставляется честная гарантия. Обращаясь в Service N, вы доверяете свою технику профессионалам, которые любят своё дело.
              </p>
            </div>

            {/* Feature Icons - Adaptive Graphics requirement */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                <span className="font-semibold text-gray-800">Гарантия</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-primary mb-2" />
                <span className="font-semibold text-gray-800">Скорость</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Cpu className="h-10 w-10 text-primary mb-2" />
                <span className="font-semibold text-gray-800">Качество</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;