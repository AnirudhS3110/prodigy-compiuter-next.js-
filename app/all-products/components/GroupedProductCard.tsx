"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../types';
import './custom-styles.css';

interface ProductGroup {
  key: string;
  series: string;
  ram: string;
  graphics: string;
  variants: Product[];
}

interface GroupedProductCardProps {
  group: ProductGroup;
}

const GroupedProductCard: React.FC<GroupedProductCardProps> = ({ group }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = group.variants[currentIndex];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm-custom transition-all duration-300 hover:-translate-y-2.5 hover:shadow-lg-custom flex flex-col h-full">
      <div className="relative overflow-hidden pt-[60%]">
        {currentProduct.discount && (
          <span className="absolute top-3 left-3 bg-gradient-primary text-white py-1 px-2 rounded text-xs font-medium z-[2]">
            -{currentProduct.discount}
          </span>
        )}
        <Image
          src={currentProduct.mainImage}
          alt={currentProduct.name}
          fill
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 flex items-center justify-center gap-3 hover:opacity-100">
          <Link
            href={`/product-detail/${currentProduct.id}`}
            className="btn bg-gradient-primary text-white rounded-full py-2 px-4 text-sm font-semibold"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919985346363?text=I'm%20interested%20in%20${encodeURIComponent(currentProduct.name)}`}
            className="btn bg-[#25D366] text-white rounded-full py-2 px-4 text-sm font-semibold flex items-center"
          >
            <i className="fab fa-whatsapp mr-1"></i> Enquire
          </a>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-primary font-medium uppercase tracking-wider">
            {currentProduct.category}
          </span>
          <div className="text-xs text-medium-gray">
            {group.variants.length > 1 ? `${currentIndex + 1} / ${group.variants.length} variants` : ''}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-secondary">{currentProduct.name}</h3>
        <div className="flex flex-wrap items-start gap-y-2 mb-3">
          {currentProduct.specifications.slice(0, 3).map((spec, index) => (
            <span key={index} className="flex items-center mr-3 text-medium-gray text-sm">
              <i className="fas fa-circle text-[5px] mr-1 text-primary"></i> {spec.name}: {spec.value}
            </span>
          ))}
        </div>
        <p className="text-medium-gray text-sm mb-3 flex-grow">{currentProduct.shortDescription}</p>
        
        {/* Variant toggles */}
        {group.variants.length > 1 && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-medium-gray mr-1">Variants:</span>
            {group.variants.map((variant, idx) => (
              <button 
                key={variant.id}
                className={`variant-toggle px-3 py-1 rounded-full border 
                  ${idx === currentIndex ? 'bg-gradient-primary text-white border-primary' : 'bg-white text-medium-gray border-light-gray'} 
                  text-xs font-semibold`}
                onClick={() => setCurrentIndex(idx)}
              >
                {variant.name.split(' ').slice(-1)[0] || `Model ${idx + 1}`}
              </button>
            ))}
          </div>
        )}
        
        {/* Common specs (RAM and Graphics) */}
        <div className="mb-3 flex flex-wrap gap-2 bg-light p-2 rounded-md">
          <span className="flex items-center mr-3 text-medium-gray text-sm">
            <i className="fas fa-memory mr-1 text-primary"></i> {group.ram}
          </span>
          <span className="flex items-center mr-3 text-medium-gray text-sm">
            <i className="fas fa-tv mr-1 text-primary"></i> {group.graphics}
          </span>
        </div>
        
        <div className="mt-auto mb-3">
          <div className="text-center mb-3">
            {currentProduct.showPrice && currentProduct.price && 
             currentProduct.category !== 'Laptops' && currentProduct.category !== 'desktops' ? (
              <span className="font-heading font-bold text-xl text-dark">
                ₹{currentProduct.price.toLocaleString()}
              </span>
            ) : (
              <span className="font-heading font-bold text-lg text-dark">
                Reach out for Pricing
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href={`/product-detail/${currentProduct.id}`}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-gradient-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919985346363?text=I'm%20interested%20in%20${encodeURIComponent(currentProduct.name)}`}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-[#25D366] text-white shadow-sm hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300"
          >
            <i className="fab fa-whatsapp mr-2"></i> Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default GroupedProductCard; 