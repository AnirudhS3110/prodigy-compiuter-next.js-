"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import PageBanner from './components/PageBanner';
import FloatingContactButtons from '../components/FloatingContactButtons';
import Footer from '../landing/Footer';
import ScrollSmootherWrapper from '../components/scrollSmoothWrapper';

// Use dynamic import to avoid casing issues
const ProductsSection = dynamic(() => import('./components/ProductsSection'), { ssr: true });

export default function AllProductsPage() {
  return (
    <ScrollSmootherWrapper>
    <main className="overflow-x-hidden">
      <PageBanner />
      <ProductsSection />
      <FloatingContactButtons />
      <Footer/>
    </main>
    </ScrollSmootherWrapper>
  );
} 