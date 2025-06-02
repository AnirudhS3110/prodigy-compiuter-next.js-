import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="text-center py-12 container mx-auto max-w-[1280px] px-6">
      <i className="fas fa-exclamation-triangle text-4xl text-amber-500 mb-4"></i>
      <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
      <p className="text-medium-gray mb-6">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      <Link 
        href="/all-products" 
        className="inline-flex items-center justify-center px-5 py-3 rounded-full btn-text text-base bg-gradient-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
      >
        <i className="fas fa-arrow-left mr-2"></i> Back to Products
      </Link>
    </div>
  );
};

export default NotFound; 