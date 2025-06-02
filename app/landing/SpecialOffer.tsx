"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 18,
    minutes: 45,
    seconds: 33
  });

  useEffect(() => {
    // Set the date we're counting down to (3 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 3);
    
    // Update the countdown every 1 second
    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the countdown date
      const distance = countDownDate.getTime() - now;
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Update state
      setTimeLeft({ days, hours, minutes, seconds });
      
      // If the countdown is finished, clear interval
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time with leading zeros
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  // Function to track Google Analytics events
  const trackGAEvent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'begin_checkout', {
        currency: 'INR',
        items: [{
          item_name: 'Asus TUF Gaming A15 - Special Offer',
          promotion_id: 'summer_gaming_sale',
          promotion_name: 'Summer Gaming Sale',
          price: '72490'
        }],
        value: 72490,
        coupon: 'SUMMER11OFF'
      });
    }
  };

  // WhatsApp URL with UTM parameters
  const whatsappUrl = "https://wa.me/919985346363?text=I'm%20interested%20in%20the%20Special%20Offer%20Asus%20TUF%20Gaming%20A15&utm_source=homepage&utm_medium=special_offer&utm_campaign=summer_sale";

  return (
    <section id="offer" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-stripe bg-[length:200%_200%] animate-gradient-animation opacity-[0.03] z-0"></div>
      
      <div className="container mx-auto max-w-[1280px] px-6 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
          <div className="max-w-[500px] order-2 md:order-1 text-center md:text-left mx-auto md:mx-0">
            <div className="font-heading font-medium text-base text-primary mb-2 uppercase tracking-wider">Limited Time Offer</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4  bg-gradient-to-br from-[#6424ff] via-[#0e45e8] to-[#0a98db] text-transparent bg-clip-text">ASUS TUF GAMING A15</h2>
            <p className="text-medium-gray mb-4">Experience powerful gaming performance with AMD Ryzen 7 processor, NVIDIA RTX 3050 GPU, and lightning-fast 144Hz display.</p>
            
            <div className="mb-5 max-w-[500px] mx-auto md:ml-0 text-left">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary flex-shrink-0">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div>Latest Gen Intel Core i9 Processor</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary flex-shrink-0">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div>RTX 4080 Graphics with 16GB VRAM</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary flex-shrink-0">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div>32GB DDR5 RAM at 5600MHz</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary flex-shrink-0">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div>2TB NVMe SSD with 7000MB/s Speeds</div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary flex-shrink-0">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <div>240Hz QHD Display with 100% DCI-P3</div>
              </div>
            </div>
            
            <div className="mb-5">
              <div className="font-heading font-semibold text-base text-medium-gray mb-3">Offer Ends In:</div>
              <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                <div className="bg-light rounded-md p-3 min-w-[80px] text-center shadow-sm-custom">
                  <div className="font-heading font-bold text-3xl text-primary leading-none mb-1" id="days">
                    {formatTime(timeLeft.days)}
                  </div>
                  <div className="text-xs text-medium-gray uppercase tracking-wider">Days</div>
                </div>
                <div className="bg-light rounded-md p-3 min-w-[80px] text-center shadow-sm-custom">
                  <div className="font-heading font-bold text-3xl text-primary leading-none mb-1" id="hours">
                    {formatTime(timeLeft.hours)}
                  </div>
                  <div className="text-xs text-medium-gray uppercase tracking-wider">Hours</div>
                </div>
                <div className="bg-light rounded-md p-3 min-w-[80px] text-center shadow-sm-custom">
                  <div className="font-heading font-bold text-3xl text-primary leading-none mb-1" id="minutes">
                    {formatTime(timeLeft.minutes)}
                  </div>
                  <div className="text-xs text-medium-gray uppercase tracking-wider">Minutes</div>
                </div>
                <div className="bg-light rounded-md p-3 min-w-[80px] text-center shadow-sm-custom">
                  <div className="font-heading font-bold text-3xl text-primary leading-none mb-1" id="seconds">
                    {formatTime(timeLeft.seconds)}
                  </div>
                  <div className="text-xs text-medium-gray uppercase tracking-wider">Seconds</div>
                </div>
              </div>
            </div>
            
            <a 
              href={whatsappUrl}
              className="inline-flex items-center justify-center px-6 py-4 rounded-full font-heading font-semibold text-lg bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300"
              onClick={trackGAEvent}
            >
              <i className="fab fa-whatsapp mr-2"></i> Enquire about this Offer
            </a>
          </div>
          
          <div className="relative order-1 md:order-2 max-w-[500px] mx-auto">
            <div className="w-full rounded-lg overflow-hidden shadow-lg-custom relative">
              <Image 
                src="/assets/asus_tuf_a15/1.jpeg" 
                alt="Asus TUF Gaming A15" 
                width={500}
                height={375}
                className="w-full h-auto block transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute top-[-25px] right-[-25px] w-[120px] h-[120px] bg-gradient-accent rounded-full flex flex-col items-center justify-center text-white font-heading font-bold z-[2] shadow-accent-custom animate-pulse-custom">
              <div className="text-base">SAVE</div>
              <div className="text-4xl leading-none">11%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer; 