"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or a service
    console.log('Newsletter subscription:', email);
    // Reset form after submission
    setEmail('');
    // Show a success message to the user
    alert('Thanks for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-[#152a43] py-10 relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image 
                src="/assets/logo-nobg.png" 
                alt="Prodigy Computers & Laptops Logo" 
                width={40}
                height={40}
                className="h-10 w-auto mr-3"
              />
              <span className="font-logo font-extrabold text-xl text-white">PRODIGY<span className="text-primary">COMPUTERS</span></span>
            </Link>
            <p className="text-white/60 mt-4 text-sm">We build premium custom PCs for professionals, gamers, and businesses with unmatched performance and reliability.</p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.facebook.com/prodigycomputersandlaptops/" className="w-9 h-9 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-primary transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="#" className="w-9 h-9 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-primary transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a href="https://www.instagram.com/prodigyhyderabad/" className="w-9 h-9 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-primary transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              {/* <a href="https://www.youtube.com/@prodigycomputersandlaptops4145" className="w-9 h-9 rounded-full bg-dark-gray text-white flex items-center justify-center hover:bg-primary transition-all duration-300">
                <i className="fab fa-youtube"></i>
              </a> */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/60 hover:text-primary transition-colors duration-300">Home</Link></li>
              <li><Link href="/#products" className="text-white/60 hover:text-primary transition-colors duration-300">Products</Link></li>
              <li><Link href="/#after-sales-service" className="text-white/60 hover:text-primary transition-colors duration-300">Services</Link></li>
              <li><Link href="/#testimonials" className="text-white/60 hover:text-primary transition-colors duration-300">Testimonials</Link></li>
              <li><Link href="/#faq" className="text-white/60 hover:text-primary transition-colors duration-300">FAQ</Link></li>
              <li><Link href="/#contact" className="text-white/60 hover:text-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
                    <h3 className="text-white text-xl font-bold mb-5">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-white/60">
                        <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                        <Link href="https://www.google.com/maps/place/Prodigy+Computers+and+Laptops+Pvt+Ltd/@17.4950244,78.3906481,16.99z/data=!4m6!3m5!1s0x3bcb91bac138eff7:0x3760205fca1734fc!8m2!3d17.4950236!4d78.3955627!16s%2Fg%2F1thxtnyv?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                            <span>
                              MIG 46/A, Pranav Plaza,<br/>Dharma Reddy Colony,<br/>Behind ICICI Bank, Opp JNTU,<br/>KPHB, Hyderabad 500085
                            </span>
                          </Link>
                        </li>
                            
                        <li className="flex gap-3 text-white/60">
                            <i className="fas fa-phone-alt text-primary mt-1"></i>
                            <a href="tel:+919985346363"><span>+91 9985346363</span></a>
                        </li>   
                        <li className="flex gap-3 text-white/60">
                            <i className="fas fa-phone-alt text-primary mt-1"></i>
                            <a href="tel:+919985356363"><span>+91 9985356363</span></a>
                        </li>
                        <li className="flex gap-3 text-white/60">
                            <i className="fas fa-envelope text-primary mt-1"></i>
                            <a href="mailto:prodigyhyderabad@gmail.com"><span>prodigyhyderabad@gmail.com</span></a>
                        </li>
                    </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-5">Newsletter</h3>
            <p className="text-white/60 mb-4 text-sm">Subscribe to our newsletter for updates on new products, offers, and tech tips.</p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-dark-gray border-0 outline-none rounded-full px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-primary text-white rounded-full px-4 py-3 font-semibold hover:-translate-y-0.5 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-dark-gray mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {currentYear} Prodigy Computers & Laptops. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-white/40 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white/40 hover:text-primary text-sm transition-colors duration-300">Terms of Service</Link>
            <Link href="/refund-policy" className="text-white/40 hover:text-primary text-sm transition-colors duration-300">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 