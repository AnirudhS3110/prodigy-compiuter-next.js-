'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isActive, onToggle }) => {
  return (
    <div className={`faq-item bg-light rounded-md mb-3 overflow-hidden transition-all duration-300 hover:shadow-sm-custom ${isActive ? 'active' : ''}`}>
      <div 
        className="faq-question py-4 px-4 flex items-center justify-between cursor-pointer font-heading font-semibold text-lg transition-all duration-150"
        onClick={onToggle}
      >
        {question}
        <div className="faq-toggle w-6 h-6 relative flex-shrink-0"></div>
      </div>
      <div className={`faq-answer overflow-hidden transition-all duration-300 px-4 ${isActive ? 'max-h-[300px] pb-6' : 'max-h-0'}`}>
        <p className="text-medium-gray">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What makes Prodigy Computers different from other retailers?",
      answer: "Prodigy Computers offers unmatched prices, premium build quality, and lifetime technical support for all our products. We also provide custom performance tuning, extended warranties, and a trade-in program that you won't find at most retailers."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping fees and delivery times vary based on location. For specific details about shipping to your country, please contact our customer support team."
    },
    {
      question: "What warranty comes with your computers?",
      answer: "All our computers come with a 3-year comprehensive warranty covering parts and labor. We also offer extended warranty options for up to 5 years for additional peace of mind. Our warranty includes 24/7 technical support and expedited repair service."
    },
    {
      question: "Can I customize my computer configuration?",
      answer: "Absolutely! We offer extensive customization options for all our computers. You can configure the processor, graphics card, memory, storage, and even choose custom cooling solutions and RGB lighting to match your preferences."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee on all our products. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. Custom-built computers may be subject to a small restocking fee."
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-stripe bg-[length:200%_200%] animate-gradient-animation opacity-[0.03] z-0"></div>
      
      <div className="container mx-auto max-w-[1280px] px-6 relative z-[1]">
        <div className="text-center mb-12">
          <div className="text-primary section-tag text-sm mb-3">COMMON QUESTIONS</div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 text-dark tracking-tight">FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span></h2>
          <p className="text-medium-gray max-w-2xl mx-auto">Get answers to the most common questions about our products and services.</p>
        </div>
        
        <div className="max-w-[800px] mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .faq-toggle::before,
        .faq-toggle::after {
          content: '';
          position: absolute;
          background-color: #4a90e2;
          transition: all 150ms ease;
        }
        
        .faq-toggle::before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          transform: translateY(-50%);
        }
        
        .faq-toggle::after {
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          transform: translateX(-50%);
        }
        
        .faq-item.active .faq-toggle::after {
          transform: translateX(-50%) scaleY(0);
        }
      `}</style>
    </section>
  );
};

export default FAQ; 