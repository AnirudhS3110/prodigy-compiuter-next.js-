import React from 'react';

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-1/2 md:right-4 md:translate-y-1/2 flex md:flex-col flex-row gap-2 z-[98]">
      <a 
        href="https://wa.me/919985346363" 
        className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl shadow-md-custom transition-all duration-300 hover:-translate-x-1 bg-[#25D366] hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)]" 
        data-tooltip="Chat with us on WhatsApp" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a 
        href="tel:+919985346363" 
        className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl shadow-md-custom transition-all duration-300 hover:-translate-x-1 bg-primary hover:shadow-primary-custom" 
        data-tooltip="Call us now"
      >
        <i className="fas fa-phone-alt"></i>
      </a>
    </div>
  );
};

export default FloatingContactButtons; 