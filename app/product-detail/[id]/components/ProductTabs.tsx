"use client";

import React, { useState } from 'react';
import { Product } from '../../../all-products/types';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specifications');

  return (
    <div className="mt-12">
      <div className="flex flex-wrap border-b border-gray-200">
        <button 
          className={`py-3 px-5 font-medium ${activeTab === 'specifications' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('specifications')}
        >
          Specifications
        </button>
        <button 
          className={`py-3 px-5 font-medium ${activeTab === 'details' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Detailed Specifications
        </button>
        <button 
          className={`py-3 px-5 font-medium ${activeTab === 'included' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('included')}
        >
          What's Included
        </button>
      </div>
      
      <div className="py-6">
        {/* Specifications Tab */}
        <div className={activeTab === 'specifications' ? '' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="bg-light p-4 rounded-md">
                <div className="font-semibold mb-1">{spec.name}</div>
                <div className="text-medium-gray">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Detailed Specifications Tab */}
        <div className={activeTab === 'details' ? '' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.detailedSpecs && Object.entries(product.detailedSpecs).map(([key, value], index) => (
              <div key={index} className="py-3 border-b border-gray-200 flex flex-wrap justify-between">
                <div className="font-medium w-full md:w-1/2">{key}</div>
                <div className="text-medium-gray w-full md:w-1/2 md:text-right mt-1 md:mt-0">{value}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* What's Included Tab */}
        <div className={activeTab === 'included' ? '' : 'hidden'}>
          <h3 className="font-bold text-lg mb-3">In The Box</h3>
          <ul className="list-disc pl-5 text-medium-gray space-y-1">
            {product.includedComponents?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs; 