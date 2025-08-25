import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = "919876543210";
  const message = "Hi Kalakruti Associates, I need interior design consultation";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        style={{ minHeight: '56px', minWidth: '56px' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Radiating animation rings */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;