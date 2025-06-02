"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../types';
import './custom-styles.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm-custom transition-all duration-300 hover:-translate-y-2.5 hover:shadow-lg-custom flex flex-col h-full">
      <div className="relative overflow-hidden pt-[60%]">
        {product.discount && (
          <span className="absolute top-3 left-3 bg-gradient-primary text-white py-1 px-2 rounded text-xs font-medium z-[2]">
            -{product.discount}
          </span>
        )}
        <Image
          src={product.mainImage}
          alt={product.name}
          fill
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 flex items-center justify-center gap-3 hover:opacity-100">
          <Link
            href={`/product-detail/${product.id}`}
            className="btn bg-gradient-primary text-white rounded-full py-2 px-4 text-sm font-semibold"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919985346363?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
            className="btn bg-[#25D366] text-white rounded-full py-2 px-4 text-sm font-semibold flex items-center"
          >
            <i className="fab fa-whatsapp mr-1"></i> Enquire
          </a>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="text-xl font-bold mb-2 text-secondary">{product.name}</h3>
        <div className="flex flex-wrap items-start gap-y-2 mb-3">
          {product.specifications.slice(0, 3).map((spec, index) => (
            <span key={index} className="flex items-center mr-3 text-medium-gray text-sm">
              <i className="fas fa-circle text-[5px] mr-1 text-primary"></i> {spec.name}: {spec.value}
            </span>
          ))}
        </div>
        <p className="text-medium-gray text-sm mb-3 flex-grow">{product.shortDescription}</p>
        <div className="mt-auto mb-3">
          <div className="text-center mb-3">
            {product.showPrice && product.price && 
             product.category !== 'Laptops' && product.category !== 'desktops' ? (
              <span className="font-heading font-bold text-xl text-dark">
                ₹{product.price.toLocaleString()}
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
            href={`/product-detail/${product.id}`}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-gradient-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/919985346363?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-[#25D366] text-white shadow-sm hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300"
          >
            <i className="fab fa-whatsapp mr-2"></i> Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 