import React from 'react';

const QRCodeDisplay: React.FC = () => {
  // Ссылка на ваш опубликованный сайт
  const siteUrl = "https://swmmmmm.github.io/ocg/";
  // Используем API для генерации QR-кода
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(siteUrl)}`;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg inline-block text-center border border-gray-200">
      <div className="flex items-center justify-center mb-2 mx-auto">
        <img 
          src={qrCodeUrl} 
          alt="QR код сайта" 
          className="w-32 h-32 object-contain"
        />
      </div>
      <p className="text-xs text-gray-500 font-medium">
        Сканируйте для<br/>
        быстрого перехода
      </p>
    </div>
  );
};

export default QRCodeDisplay;