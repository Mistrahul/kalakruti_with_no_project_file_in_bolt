import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCall: React.FC = () => {
  const phoneNumber = "+919876543210";
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 mb-4">
      <a
        href={phoneUrl}
        className="call-float-btn bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        style={{ minHeight: '56px', minWidth: '56px' }}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        
        {/* Radiating animation rings */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
      </a>
    </div>
  );
};

export default FloatingCall;