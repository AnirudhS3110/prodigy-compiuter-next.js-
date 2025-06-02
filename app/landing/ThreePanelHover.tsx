"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface PanelProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  textColor: string;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
}

const Panel: React.FC<PanelProps> = ({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  bgColor, 
  textColor,
  isActive,
  onClick,
  isMobile
}) => {
  return (
    <div 
      className={`relative transition-all duration-500 ease-in-out overflow-hidden cursor-pointer ${
        isMobile 
          ? isActive ? 'flex-[3]' : 'flex-1'
          : 'flex-1 group hover:flex-[3]'
      }`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 ${bgColor} z-0`}>
        {/* Background image with overlay */}
        <div className="relative w-full h-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className={`absolute inset-0 ${bgColor} opacity-60`}></div>
      </div>
      <div className="relative z-10 h-full w-full flex flex-col p-6 justify-between">
        <div>
          <h2 className={`${textColor} text-3xl font-black uppercase tracking-tight mb-4`}>
            {title}<br />{subtitle}
          </h2>
          
          {/* Content shown on hover/click */}
          <div className={`text-white transition-all duration-500 ease-in-out max-w-md ${
            isMobile
              ? isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              : 'opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'
          }`}>
            <p className="mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThreePanelHover = () => {
  // State to track which panel is active (for mobile)
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const panels = [
    {
      title: "LAPTOP ISSUES?",
      subtitle: "GET EXPERT REPAIRS",
      description: "Facing issues like overheating, screen flickering, battery problems, or unresponsive hardware? Our experienced technicians near KPHB, Hyderabad specialize in diagnosing and fixing all types of technical and hardware problems in laptops. Whether it's a motherboard fault, keyboard replacement, RAM upgrade, or hard drive failure, we provide reliable and affordable repair solutions with quick turnaround times.",
      imageUrl: "https://media.istockphoto.com/id/1329715338/vector/dots-and-lines-penetrate-upward-through-particle-trajectory-network-technology-and-speed.jpg?s=612x612&w=0&k=20&c=p4Bb2XUHc_Wl7rVMmHjj-yggeaxbcHk_Gjd4IgKu8uA=",
      bgColor: "bg-[#162035]",
      textColor: "text-[#4e88ca]"
    },
    {
      title: "PERFORMANCE UPGRADES",
      subtitle: "FOR LAPTOPS & PCS",
      description: "Looking to upgrade or replace components in your laptop or desktop? Whether it's a new SSD, RAM upgrade, graphics card, or a fresh battery, we've got you covered. Our experts near KPHB will help boost your device's performance with quality parts and reliable installation. Get better speed, storage, and overall performance today!",
      imageUrl: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlMThfZGlnaXRhbF9hYnN0cmFjdF9saW5lX2FydF9lbWl0dGVyX2JsdWVfbGlnaHRfZF9iZTYzZmU2Yi02YTc3LTRlMjctOGQ1Ni0xZWFiMGViOWU0MjFfMS5qcGc.jpg",
      bgColor: "bg-[#4e88ca]",
      textColor: "text-[#6ba5ea]"
    },
    {
      title: "ALL-IN-ONE PRINTERS",
      subtitle: "FOR STUDENTS & WFH",
      description: "Looking for a printer that does it all? Our all-in-one printers are ideal for students and work-from-home workers. Print, scan, copy, and even fax with a single machine! Designed for convenience and efficiency, these printers are compact yet powerful—perfect for small spaces. Visit us near KPHB, Hyderabad, and find the best printer to suit your needs.",
      imageUrl: "https://media.istockphoto.com/id/1412765628/vector/abstract-speed-business-start-up-launching-product-with-electric-car-and-city-concept-hitech.jpg?s=612x612&w=0&k=20&c=ZcK2rLxON2s1q-dFKnxlUq2mwhF9hG1LLGw7pVrIbeE=",
      bgColor: "bg-[#1d2843]",
      textColor: "text-[#4e88ca]"
    }
  ];

  // Handle panel click
  const handlePanelClick = (index: number) => {
    if (!isMobile) return; // Only handle clicks on mobile
    
    // If the clicked panel is already active, close it
    if (activePanel === index) {
      setActivePanel(null);
    } else {
      setActivePanel(index);
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row h-auto md:h-[550px] overflow-hidden">
        {panels.map((panel, index) => (
          <Panel 
            key={index} 
            {...panel} 
            isActive={activePanel === index}
            onClick={() => handlePanelClick(index)}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  );
};

export default ThreePanelHover; 