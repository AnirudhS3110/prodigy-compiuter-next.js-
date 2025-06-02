import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-12">
          <div className="text-primary section-tag text-sm mb-3">OUR ADVANTAGES</div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-dark tracking-tight">WHY CHOOSE <span className="text-primary">PRODIGY</span></h2>
          <p className="text-medium-gray max-w-2xl mx-auto">We offer premium computers with unmatched performance, reliability, and customer service.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div className="bg-gradient-primary text-white rounded-lg p-5 col-span-1 md:col-span-2 flex flex-col transition-all duration-300 hover:-translate-y-2.5 hover:shadow-md-custom relative overflow-hidden shadow-sm-custom">
            <div className="w-[70px] h-[70px] bg-white/20 rounded-md flex items-center justify-center mb-4 text-3xl text-white transition-all duration-300 hover:bg-white hover:text-primary transform hover:rotate-y-180">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Supercharged Performance</h3>
            <p className="text-white">Experience lightning-fast speeds with our optimized systems designed for maximum performance with no compromises.</p>
          </div>
          
          <div className="bg-gradient-to-b from-light to-white rounded-lg p-5 row-span-2 flex flex-col transition-all duration-300 hover:-translate-y-2.5 hover:shadow-md-custom relative overflow-hidden shadow-sm-custom">
            <div className="w-[70px] h-[70px] bg-light rounded-md flex items-center justify-center mb-4 text-3xl text-primary transition-all duration-300 hover:bg-gradient-primary hover:text-white transform hover:rotate-y-180">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Lifetime Support</h3>
            <p className="text-medium-gray">Our dedicated technical team provides comprehensive support for the lifetime of your product, ensuring you always have help when needed.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 flex flex-col transition-all duration-300 hover:-translate-y-2.5 hover:shadow-md-custom relative overflow-hidden shadow-sm-custom before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-gradient-primary before:transform before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 hover:before:scale-y-100 before:z-[1]">
            <div className="w-[70px] h-[70px] bg-light rounded-md flex items-center justify-center mb-4 text-3xl text-primary transition-all duration-300 hover:bg-gradient-primary hover:text-white transform hover:rotate-y-180">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Premium Build Quality</h3>
            <p className="text-medium-gray">Each computer is meticulously assembled with premium components and undergoes rigorous quality testing.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 flex flex-col transition-all duration-300 hover:-translate-y-2.5 hover:shadow-md-custom relative overflow-hidden shadow-sm-custom before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-gradient-primary before:transform before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 hover:before:scale-y-100 before:z-[1]">
            <div className="w-[70px] h-[70px] bg-light rounded-md flex items-center justify-center mb-4 text-3xl text-primary transition-all duration-300 hover:bg-gradient-primary hover:text-white transform hover:rotate-y-180">
              <i className="fas fa-tags"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Unbeatable Pricing</h3>
            <p className="text-medium-gray">Our direct-to-consumer model allows us to offer competitive prices that beat even the largest retailers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 