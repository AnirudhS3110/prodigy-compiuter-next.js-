"use client";
import { useEffect, useState } from 'react';
import { products } from '../all-products/data/products';

// Simple product interface for typing
interface Product {
  id: string;
  name: string;
}

const SearchBar = () => {
  const [data, setData] = useState<Product[]>([]);
  // Remove unused state
  // const [dummy, setDummy] = useState(false);

  // Fix dependency array
  useEffect(() => {
    // Transform products into an array
    const productArray = Object.values(products);
    setData(productArray);
    // No need for dummy state
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border rounded-md"
      />
      <div className="search-results mt-2">
        {data.slice(0, 5).map((product) => (
          <div key={product.id} className="p-2 border-b">
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;