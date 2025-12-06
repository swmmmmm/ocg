import React from 'react';
import { QrCode } from 'lucide-react';

// NOTE: In a real deployment, you would generate a QR code pointing to your GitHub Pages URL.
// Since the URL is unknown until you deploy, this acts as the placeholder required by the assignment.
const QRCodeDisplay: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg inline-block text-center border border-gray-200">
      <div className="bg-gray-100 w-32 h-32 flex items-center justify-center rounded mb-2 mx-auto text-gray-400">
        <QrCode size={64} />
      </div>
      <p className="text-xs text-gray-500 font-medium">Сканируйте для<br/>быстрого перехода</p>
    </div>
  );
};

export default QRCodeDisplay;