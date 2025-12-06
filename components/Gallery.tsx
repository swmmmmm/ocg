import React from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://picsum.photos/id/0/600/400',
    title: 'Ремонт ноутбуков и MacBook',
    desc: 'Полный спектр услуг от чистки до сложного ремонта.',
    prices: [
      { service: 'Диагностика', cost: 'Бесплатно' },
      { service: 'Чистка и замена термопасты', cost: '2 500 ₽' },
      { service: 'Замена матрицы', cost: 'от 3 500 ₽' },
      { service: 'Ремонт цепей питания', cost: 'от 5 000 ₽' },
    ]
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
    title: 'Пайка и микроэлектроника',
    desc: 'Восстановление плат после залития и ударов.',
    prices: [
      { service: 'Восстановление дорожек', cost: 'от 3 500 ₽' },
      { service: 'Замена разъемов (USB/HDMI)', cost: '2 000 ₽' },
      { service: 'Замена контроллера питания', cost: '4 500 ₽' },
      { service: 'Реболл процессора/видеочипа', cost: 'от 6 000 ₽' },
    ]
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
    title: 'Сборка и апгрейд ПК',
    desc: 'Индивидуальный подбор комплектующих и сборка.',
    prices: [
      { service: 'Сборка из ваших деталей', cost: '3 000 ₽' },
      { service: 'Премиум сборка (кабель-менеджмент)', cost: '5 000 ₽' },
      { service: 'Установка Windows + драйверы', cost: '1 500 ₽' },
      { service: 'Апгрейд (замена деталей)', cost: '1 000 ₽' },
    ]
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=600&q=80',
    title: 'Ремонт планшетов и телефонов',
    desc: 'Замена дисплеев, аккумуляторов и корпусных частей.',
    prices: [
      { service: 'Замена аккумулятора', cost: 'от 1 500 ₽' },
      { service: 'Замена дисплейного модуля', cost: 'от 2 500 ₽' },
      { service: 'Ремонт разъема зарядки', cost: '1 800 ₽' },
      { service: 'Чистка динамиков', cost: '500 ₽' },
    ]
  },
  {
    id: 5,
    url: 'https://picsum.photos/id/366/600/400',
    title: 'Восстановление данных',
    desc: 'Программное и аппаратное извлечение информации.',
    prices: [
      { service: 'С флеш-карт и SSD', cost: 'от 1 500 ₽' },
      { service: 'С жестких дисков (HDD)', cost: 'от 3 000 ₽' },
      { service: 'После форматирования', cost: 'от 2 500 ₽' },
    ]
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Примеры работ и Прайс-лист
          </h2>
          <p className="mt-4 text-gray-500">Ориентировочная стоимость популярных услуг</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item) => (
            <div key={item.id} className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-3">{item.desc}</p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Стоимость услуг:</h4>
                  <ul className="space-y-2">
                    {item.prices.map((priceItem, index) => (
                      <li key={index} className="flex justify-between items-center text-sm border-b border-gray-50 pb-1 last:border-0 last:pb-0">
                        <span className="text-gray-700">{priceItem.service}</span>
                        <span className="font-bold text-primary whitespace-nowrap ml-2">{priceItem.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;