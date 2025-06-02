"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  // Function to track Google Analytics events
  const trackGAEvent = (action: string, category: string, label: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: 1
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Track form submission in Google Analytics
    trackGAEvent('generate_lead', 'engagement', 'Contact Form Submission');
    
    // Here you would typically send the email to your backend or a service like Mailchimp
    console.log('Submitted email:', email);
    // Reset form after submission
    setEmail('');
    // Show a success message to the user
    alert('Thanks for subscribing! We will get in touch with you soon.');
  };

  // Add UTM parameters to links
  const whatsappUrl = "https://wa.me/919985346363?utm_source=homepage&utm_medium=contact_section&utm_campaign=whatsapp_contact";
  const phoneUrl = "tel:+919985346363?utm_source=homepage&utm_medium=contact_section&utm_campaign=phone_contact";

  return (
    <section id="contact" className="py-24 bg-gradient-blue text-white relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-100px] w-[400px] h-[400px] bg-primary opacity-15 rounded-full blur-[60px]"></div>
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-accent opacity-10 rounded-full blur-[60px]"></div>
      
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="text-center max-w-[700px] mx-auto relative z-[1]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Get in Touch with Us</h2>
          <p className="text-white/80 mb-5">Have questions about our products? Leave your contact details and we&apos;ll get back to you promptly.</p>
          
          <form 
            className="relative max-w-[550px] mx-auto bg-white/10 rounded-full p-1.5 flex"
            onSubmit={handleSubmit}
          >
            <input 
              type="email" 
              className="flex-1 bg-transparent border-0 text-white py-3 px-4 font-body text-base outline-none placeholder:text-white/50" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-white text-primary border-0 rounded-full py-3 px-5 font-heading font-semibold text-base cursor-pointer transition-all duration-300 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </form>
          
          <div className="mt-8 flex gap-5 justify-center">
            <a 
              href={whatsappUrl}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300"
              onClick={() => trackGAEvent('contact', 'engagement', 'WhatsApp Contact Button')}
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
            </a>
            <a 
              href={phoneUrl}
              className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-gradient-primary text-white shadow-primary-custom hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(74,144,226,0.3)] transition-all duration-300"
              onClick={() => trackGAEvent('phone_call', 'engagement', 'Phone Call Button')}
            >
              <i className="fas fa-phone-alt mr-2 transform scale-x-[-1]"></i> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 