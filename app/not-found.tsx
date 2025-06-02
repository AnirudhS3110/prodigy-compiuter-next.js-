'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NotFoundContent() {
  const pathname = usePathname();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center py-12 container mx-auto max-w-[1280px] px-6">
      <div className="w-24 h-24 bg-[#EFEFEF] rounded-full flex items-center justify-center text-3xl mb-8">
        <i className="fas fa-exclamation-triangle text-amber-500"></i>
      </div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-medium-gray mb-8 max-w-md">
        We couldn&apos;t find the page you were looking for. The URL <span className="font-semibold text-primary">{pathname}</span> may be incorrect or the page may have been moved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-5 py-3 rounded-full btn-text text-base bg-gradient-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
        >
          <i className="fas fa-home mr-2"></i> Go to Homepage
        </Link>
        <Link 
          href="/all-products" 
          className="inline-flex items-center justify-center px-5 py-3 rounded-full btn-text text-base bg-white border border-gray-200 text-gray-700 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
        >
          <i className="fas fa-desktop mr-2"></i> Browse Products
        </Link>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="w-24 h-24 bg-[#EFEFEF] rounded-full flex items-center justify-center text-3xl mb-8">
          <i className="fas fa-exclamation-triangle text-amber-500"></i>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  );
} 