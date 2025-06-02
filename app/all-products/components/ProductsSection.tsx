"use client";

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import GroupedProductCard from './GroupedProductCard';
import { Product } from '../types';
import { groupProductsBySpecs, ProductGroup } from '../utils/productGrouping';
import './custom-styles.css';

// This will be replaced with actual data from an API or local file
import { products } from '../data/products';

const ProductsSection: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const [groupedProducts, setGroupedProducts] = useState<ProductGroup[]>([]);
  const [showNoResults, setShowNoResults] = useState<boolean>(false);

  useEffect(() => {
    filterProducts(category);
  }, [category]);

  const filterProducts = (filterCategory: string) => {
    let filtered: Product[] = [];

    if (filterCategory === 'all') {
      filtered = Object.values(products);
    } else if (filterCategory === 'printers') {
      filtered = Object.values(products).filter(product => 
        product.category.toLowerCase() === 'printers'
      );
    } else {
      filtered = Object.values(products).filter(product => 
        product.brand.toLowerCase() === filterCategory.toLowerCase()
      );
    }
    
    // Group filtered products
    const grouped = groupProductsBySpecs(filtered);
    setGroupedProducts(grouped);
    
    // Show "no results" if no products are found
    setShowNoResults(filtered.length === 0);
  };

  const handleFilterClick = (filterCategory: string) => {
    setCategory(filterCategory);
  };

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto max-w-[1280px] px-6">
        {/* Filter Options */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button 
              className={`filter-btn rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-150 font-medium shadow-sm ${
                category === 'all' 
                  ? 'bg-gradient-primary text-white border border-primary' 
                  : 'bg-white text-medium-gray border border-light-gray hover:bg-light hover:text-primary hover:border-primary-light'
              }`}
              onClick={() => handleFilterClick('all')}
            >
              All Products
            </button>
            <button 
              className={`filter-btn rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-150 font-medium ${
                category === 'apple' 
                  ? 'bg-gradient-primary text-white border border-primary' 
                  : 'bg-white text-medium-gray border border-light-gray hover:bg-light hover:text-primary hover:border-primary-light'
              }`}
              onClick={() => handleFilterClick('apple')}
            >
              Apple
            </button>
            <button 
              className={`filter-btn rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-150 font-medium ${
                category === 'asus' 
                  ? 'bg-gradient-primary text-white border border-primary' 
                  : 'bg-white text-medium-gray border border-light-gray hover:bg-light hover:text-primary hover:border-primary-light'
              }`}
              onClick={() => handleFilterClick('asus')}
            >
              Asus
            </button>
            <button 
              className={`filter-btn rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-150 font-medium ${
                category === 'acer' 
                  ? 'bg-gradient-primary text-white border border-primary' 
                  : 'bg-white text-medium-gray border border-light-gray hover:bg-light hover:text-primary hover:border-primary-light'
              }`}
              onClick={() => handleFilterClick('acer')}
            >
              Acer
            </button>
            <button 
              className={`filter-btn rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-150 font-medium ${
                category === 'printers' 
                  ? 'bg-gradient-primary text-white border border-primary' 
                  : 'bg-white text-medium-gray border border-light-gray hover:bg-light hover:text-primary hover:border-primary-light'
              }`}
              onClick={() => handleFilterClick('printers')}
            >
              Printers
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div id="products-grid" className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${showNoResults ? 'hidden' : ''}`}>
          {groupedProducts.map((group) => (
            group.variants.length === 1 ? (
              <ProductCard key={group.variants[0].id} product={group.variants[0]} />
            ) : (
              <GroupedProductCard key={group.key} group={group} />
            )
          ))}
        </div>
        
        {/* No Results Message */}
        <div className={`text-center py-12 ${showNoResults ? '' : 'hidden'}`}>
          <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-bold mb-2">No products found</h3>
          <p className="text-medium-gray">Try changing your filter criteria or check back later for new products.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 