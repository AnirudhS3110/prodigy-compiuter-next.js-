"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const totalSlides = 3;
  const timerDuration = 5000; // 5 seconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Desktop and mobile image paths
  const desktopImages = [
    "/assets/slide-1/slide-1-bg.png",
    "/assets/slide-2/butn removed.png",
    "/assets/slide-3/slide3-bg.png"
  ];
  
  const mobileImages = [
    "/assets/slide-1/hero1-bgMobile.png",
    "/assets/slide-2/Hero-2MobileBG.png",
    "/assets/slide-3/hero-3-bgMobile.png"
  ];

  // Get current image based on screen size
  const getImageForSlide = (index: number) => {
    return windowWidth <= 768 ? mobileImages[index] : desktopImages[index];
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);
  
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const resetInterval = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      nextSlide();
    }, timerDuration);
  }, [nextSlide, timerDuration]);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    // Start slideshow
    resetInterval();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [resetInterval]);

  const scrollToExplore = () => {
    const heroHeight = document.getElementById('home')?.offsetHeight || 0;
    const scrollTarget = window.scrollY + (heroHeight * 0.92);
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  // Track Google Analytics event
  const trackEvent = (eventName: string, params: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slideshow container */}
      <div className="slideshow-container h-full">
        {/* Slide 1 */}
        <div 
          className={`slide fade h-full w-full absolute top-0 left-0 ${
            currentSlide === 0 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
            
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image 
                src={getImageForSlide(0)} 
                alt="Flagship Computer"
                fill
                className="object-cover z-0"
                priority
              />
            </div>

            {/* Main Content Layer */}
            <div className="absolute inset-0 flex items-center justify-start z-20">
              {/* Left Content (Button) */}
              <Link href="https://wa.me/919985346363">
                <div className="w-full md:w-auto md:max-w-[720px] h-screen">
                  <div className="absolute bottom-[300px] left-1/2 md:left-[150px] rounded-[60px] md:bottom-[10px] transform -translate-x-1/2 md:translate-x-0 flex items-center justify-center">
                    <button 
                      onClick={() => trackEvent('generate_lead', {
                        event_category: 'engagement',
                        event_label: 'Slide 1 Call Button',
                        campaign: 'hero_section',
                        source: 'homepage',
                        medium: 'hero_slide_1',
                        content: 'call_button',
                        value: 1
                      })} 
                      className="bg-transparent text-[#4a1a18] w-[270px] h-[88px] md:w-[423px] md:h-[130px] rounded-full font-semibold px-6 py-3 hover:scale-105 transition-transform"
                    >
                      <div className="relative w-full h-full">
                        <Image 
                          src="./assets/slide-1/slide-1-btn.png"
                          alt="Call for Delivery Button"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </button>
                  </div>
              </div>
              </Link>

              {/* Hidden phone link with tracking */}
              <Link 
                href="tel:+919985346363" 
                onClick={() => trackEvent('phone_call', {
                  event_category: 'engagement',
                  event_label: 'Slide 1 Phone Call',
                  campaign: 'hero_section',
                  source: 'homepage',
                  medium: 'hero_slide_1',
                  content: 'phone_link'
                })}
                className="hidden"
              >
                Call Now
                </Link>

              {/* Right Image (Desktop Only) */}
              <div className="min-w-[1233px] h-screen pointer-events-none select-none hidden md:block"></div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div 
          className={`slide fade h-full w-full absolute top-0 left-0 ${
            currentSlide === 1 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
            
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image 
                src={getImageForSlide(1)}
                alt="Flagship Computer"
                fill
                className="object-cover z-0"
                priority
              />
            </div>

            {/* Main Content Layer */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              {/* Left Content (Button) */}
              <Link 
                href="tel:+9985346363" 
                onClick={() => trackEvent('phone_call', {
                  event_category: 'engagement',
                  event_label: 'Slide 2 Phone Call',
                  campaign: 'hero_section',
                  source: 'homepage',
                  medium: 'hero_slide_2',
                  content: 'phone_link'
                })}
              >
                <div className="w-full md:min-w-[700px] h-screen">
                  <div className="absolute bottom-[50px] left-1/2 md:left-[250px] md:bottom-[150px] transform -translate-x-1/2 md:translate-x-0 flex items-center justify-center">
                    <button 
                      onClick={() => trackEvent('generate_lead', {
                        event_category: 'engagement',
                        event_label: 'Slide 2 Call Button',
                        campaign: 'hero_section',
                        source: 'homepage',
                        medium: 'hero_slide_2',
                        content: 'call_for_delivery',
                        value: 1
                      })}
                      className="bg-yellow-400 text-[#4a1a18] font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
                    >
                      CALL FOR DELIVERY
                    </button>
                  </div>
              </div>
              </Link>

              {/* Right Image (Desktop Only) */}
              <div className="min-w-[800px] hidden md:block h-screen pointer-events-none select-none">
                <div className="relative w-full h-full">
                  <Image 
                    src="./assets/slide-2/rigthsidelaps.png"
                    alt="High-Performance Computer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide 3 */}
        <div 
          className={`slide fade h-full w-full absolute top-0 left-0 ${
            currentSlide === 2 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image 
                src={getImageForSlide(2)}
                alt="Professional Workstation"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Button from Figma positioned at the bottom */}
            <div className="absolute bottom-[94px] left-[0.8] md:bottom-[-10px] left-[250px] hidden md:block md:tra z-20">
              <Link 
                href="#products" 
                onClick={() => trackEvent('select_content', {
                  event_category: 'engagement',
                  event_label: 'Slide 3 Products Button',
                  campaign: 'hero_section',
                  source: 'homepage',
                  medium: 'hero_slide_3',
                  content: 'view_products',
                  item_list_id: 'featured_products',
                  value: 1
                })}
                className="block relative overflow-hidden transition-all duration-300 hover:-translate-y-1 figma-button"
              >
                <div className="relative md:w-[350px] w-[100px]">
                  <Image 
                    src="/assets/figma/slide3_button.png" 
                    alt="View Featured Products"
                    width={350}
                    height={100}
                    className="relative z-10"
                  />
                </div>
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 z-10 pulse-effect"></div>
                </Link>
            </div>
          </div>
        </div>
        
        {/* Navigation controls repositioned to bottom right corner */}
        <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
          <button 
            onClick={() => {
              prevSlide();
              resetInterval();
              trackEvent('navigation', {
                event_category: 'engagement',
                event_label: 'Slide Navigation',
                campaign: 'hero_section',
                source: 'homepage',
                medium: 'navigation',
                content: 'prev_slide'
              });
            }}
            className="prev flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white cursor-pointer hover:bg-white/30 transition-all duration-300"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={() => {
              nextSlide();
              resetInterval();
              trackEvent('navigation', {
                event_category: 'engagement',
                event_label: 'Slide Navigation',
                campaign: 'hero_section',
                source: 'homepage',
                medium: 'navigation',
                content: 'next_slide'
              });
            }}
            className="next flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white cursor-pointer hover:bg-white/30 transition-all duration-300"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Scroll to explore button at bottom center */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={() => {
              scrollToExplore();
              trackEvent('navigation', {
                event_category: 'engagement',
                event_label: 'Scroll to Explore',
                campaign: 'hero_section',
                source: 'homepage',
                medium: 'navigation',
                content: 'scroll_explore'
              });
            }}
            className="flex flex-col items-center justify-center text-white hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <i className="fas fa-chevron-down animate-bounce"></i>
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="slide-indicators absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4 items-center">
          <div className="slide-indicator-wrapper flex items-center space-x-4">
            {[0, 1, 2].map((index) => (
              <div 
                key={index} 
                className="slide-indicator flex flex-col items-center cursor-pointer"
                onClick={() => {
                  goToSlide(index);
                  resetInterval();
                  trackEvent('navigation', {
                    event_category: 'engagement',
                    event_label: 'Slide Indicator',
                    campaign: 'hero_section',
                    source: 'homepage',
                    medium: 'navigation',
                    content: `slide_${index + 1}_indicator`
                  });
                }}
              >
                <span className="text-white text-xs mb-1">{`0${index + 1}`}</span>
                <div className="w-20 h-1 bg-white/30 overflow-hidden rounded-full">
                  <div 
                    className="indicator-progress bg-white h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: currentSlide === index ? '100%' : 
                             currentSlide > index ? '100%' : '0%',
                      transition: currentSlide === index ? `width ${timerDuration}ms linear` : 'none'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .pulse-effect {
          animation: button-pulse 2s infinite;
        }
        
        @keyframes button-pulse {
          0% { opacity: 0; }
          50% { opacity: 0.3; }
          100% { opacity: 0; }
        }
        
        .figma-button {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .figma-button:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}