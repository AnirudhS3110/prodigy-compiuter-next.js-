"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AfterSalesService = () => {
  return (
    <section id="after-sales-service" className="py-0 relative overflow-hidden">
      {/* Dark, techy background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] z-0">
        {/* Circuit board pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] z-10"></div>
        
        {/* Animated tech particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20">
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-[10%] left-[20%] animate-float-slow"></div>
          <div className="absolute w-3 h-3 bg-purple-400 rounded-full top-[30%] left-[80%] animate-float-slow-reverse"></div>
          <div className="absolute w-4 h-4 bg-cyan-400 rounded-full top-[70%] left-[40%] animate-float-slow"></div>
          <div className="absolute w-2 h-2 bg-indigo-400 rounded-full top-[60%] left-[10%] animate-float-slow-reverse"></div>
          <div className="absolute w-3 h-3 bg-blue-300 rounded-full top-[20%] left-[60%] animate-float-slow"></div>
          <div className="absolute w-4 h-4 bg-purple-300 rounded-full top-[80%] left-[70%] animate-float-slow-reverse"></div>
        </div>
        
        {/* Glowing lines */}
        <div className="absolute h-[1px] w-[30%] bg-gradient-to-r from-transparent via-blue-500 to-transparent top-[20%] left-0 opacity-40 glow-line"></div>
        <div className="absolute h-[1px] w-[40%] bg-gradient-to-r from-transparent via-purple-500 to-transparent top-[60%] right-0 opacity-40 glow-line"></div>
        <div className="absolute w-[1px] h-[30%] bg-gradient-to-b from-transparent via-cyan-500 to-transparent top-0 left-[30%] opacity-40 glow-line"></div>
        <div className="absolute w-[1px] h-[40%] bg-gradient-to-b from-transparent via-indigo-500 to-transparent bottom-0 right-[30%] opacity-40 glow-line"></div>
      </div>
      
      {/* Blue glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-blue-500 blur-[150px] opacity-20 z-10"></div>
      
      {/* Main content */}
      <div className="relative z-30">
        {/* Hero banner with 3D-like perspective */}
        <div className="perspective-container h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative">
          {/* Floating computer components in background */}
          <div className="perspective-layer absolute inset-0 transform translate-z-[-100px]">
            <Image 
              src="/assets/asus_tuf_a15/motherboard.jpg" 
              alt="Motherboard" 
              width={250} 
              height={200}
              className="absolute w-[250px] h-auto top-[20%] left-[10%] opacity-40 rotate-12 animate-float-slow shadow-xl rounded-lg"
            />
            <Image 
              src="/assets/hero.webp" 
              alt="Graphics Card" 
              width={300} 
              height={200}
              className="absolute w-[300px] h-auto top-[10%] right-[15%] opacity-40 -rotate-6 animate-float-slow-reverse shadow-xl rounded-lg"
            />
            <Image 
              src="/assets/asus_rog_strix_g16/5.jpeg" 
              alt="Processor" 
              width={200} 
              height={150}
              className="absolute w-[200px] h-auto bottom-[15%] right-[25%] opacity-40 rotate-3 animate-float-slow shadow-xl rounded-lg"
            />
            <Image 
              src="/assets/asus_tuf_a15/5.jpeg" 
              alt="RAM" 
              width={220} 
              height={150}
              className="absolute w-[220px] h-auto bottom-[20%] left-[20%] opacity-40 -rotate-9 animate-float-slow-reverse shadow-xl rounded-lg"
            />
          </div>
          
          {/* Foreground content with dramatic lighting */}
          <div className="perspective-layer absolute inset-0 transform translate-z-[0px] flex items-center justify-center">
            <div className="text-center px-4 max-w-6xl mx-auto relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="w-[3px] h-[70px] bg-gradient-to-b from-blue-500 to-transparent mx-auto"></div>
              </div>
              
              <div className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full mb-3">
                <span className="text-blue-300 font-bold tracking-wider text-xs uppercase">Premium Tech Support</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-blue-200">
                AFTER-SALES SERVICE
                <span className="block text-3xl md:text-4xl mt-2 font-medium text-blue-400">TRUSTED SUPPORT NEAR KPHB</span>
              </h2>
              
              {/* Accent line */}
              <div className="h-[3px] w-[150px] bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              
              <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                At our store near KPHB, Hyderabad, we provide exceptional after-sales service to ensure your tech stays in top condition.
              </p>
            </div>
          </div>
        </div>
        
        {/* Service Cards Section with glassmorphism */}
        <div className="container mx-auto max-w-7xl px-4 py-16 relative">
          {/* Translucent service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* Service Card 1 */}
            <div className="group h-full">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-blue-900/50 border border-blue-700/50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <i className="fas fa-tools text-blue-300 text-3xl group-hover:text-white transition-colors duration-300"></i>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3">Fast & Reliable Repairs</h3>
                <p className="text-blue-200 leading-relaxed">Whether it's your laptop, printer, or accessories, we provide quick and efficient repairs to get you back on track.</p>
                
                
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="group h-full">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-purple-900/50 border border-purple-700/50 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <i className="fas fa-search text-purple-300 text-3xl group-hover:text-white transition-colors duration-300"></i>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3">Free Diagnostics</h3>
                <p className="text-blue-200 leading-relaxed">Not sure what's wrong with your device? Bring it in for a free diagnostic check, and we'll identify the issue right on the spot.</p>
                
               
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="group h-full">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-cyan-900/50 border border-cyan-700/50 flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                  <i className="fas fa-microchip text-cyan-300 text-3xl group-hover:text-white transition-colors duration-300"></i>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3">Hardware & Software Support</h3>
                <p className="text-blue-200 leading-relaxed">From upgrading components like RAM or SSDs to resolving software issues, we're equipped to handle all your tech needs.</p>
                
               
              </div>
            </div>
            
            {/* Service Card 4 */}
            <div className="group h-full">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                  <i className="fas fa-cogs text-indigo-300 text-3xl group-hover:text-white transition-colors duration-300"></i>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3">Product Setup & Assistance</h3>
                <p className="text-blue-200 leading-relaxed">Need help setting up your new device or installing accessories? Our team is here to ensure everything is running smoothly.</p>
                
                
              </div>
            </div>
            
            {/* Service Card 5 */}
            <div className="group h-full md:col-span-2 lg:col-span-1">
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-lg hover:shadow-violet-500/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-violet-900/50 border border-violet-700/50 flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-300">
                  <i className="fas fa-shield-alt text-violet-300 text-3xl group-hover:text-white transition-colors duration-300"></i>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-3">Warranty Service</h3>
                <p className="text-blue-200 leading-relaxed">Enjoy peace of mind with easy warranty support for all eligible products purchased from our store. We handle all the details for you.</p>
                
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Closing statement with full-width image */}
        <div className="relative py-16">
          {/* Slanted image section */}
          <div className="absolute inset-0 skew-y-3 bg-gradient-to-r from-blue-900 to-indigo-900 z-0">
            <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
              <Image 
                src="/assets/asus_rog_strix_g16/1.jpeg" 
                alt="Tech Support" 
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="container mx-auto max-w-5xl px-6 relative z-10 py-16">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">We're dedicated to delivering reliable and convenient after-sales service <br className="hidden md:block" /> so you can keep enjoying your tech without any hassles.</h3>
              
              <div className="flex flex-wrap gap-6 justify-center mt-10">
                <a 
                  href="https://www.google.com/maps/place/Prodigy+Computers+and+Laptops+Pvt+Ltd/@17.4950236,78.3929878,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91bac138eff7:0x3760205fca1734fc!8m2!3d17.4950236!4d78.3955627!16s%2Fg%2F1thxtnyv?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold bg-transparent backdrop-blur-sm border border-white/20 text-white hover:text-blue-900 transition-colors duration-500"
                >
                  <span className="relative z-10 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i> Find Our Location
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>
                
                <a 
                  href="tel:+919985346363" 
                  className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold bg-blue-600 text-white transition-all duration-500 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <span className="relative z-10 flex items-center">
                    <i className="fas fa-phone-alt mr-2 transform scale-x-[-1]"></i> Contact Support
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-container {
          perspective: 1000px;
        }
        
        .perspective-layer {
          transform-style: preserve-3d;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        
        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
        
        .glow-line {
          animation: glow 3s infinite;
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default AfterSalesService; 