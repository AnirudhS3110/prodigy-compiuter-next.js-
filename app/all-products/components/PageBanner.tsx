import React from 'react';

const PageBanner = () => {
  return (
    <section className="bg-[#162035] text-white py-16 pt-24">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <div className="text-primary section-tag text-sm mb-3">OUR COLLECTION</div>
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 text-white tracking-tight">ALL <span className="text-[#4e88ca]">PRODUCTS</span></h1>
          <p className="text-white/70 max-w-2xl mx-auto">Browse our complete collection of high-performance computers and laptops designed for professionals, gamers, and businesses.</p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner; 