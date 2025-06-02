import React from 'react';
import { products } from '../../all-products/data/products';
import ProductDetail from './components/ProductDetail';
import { Product } from '../../all-products/types';
import ScrollSmootherWrapper from '@/app/components/scrollSmoothWrapper';

// Type assertion for products
type ProductsType = {
  [key: string]: Product;
};

// Generate all possible product IDs for static paths
export async function generateStaticParams() {
  return Object.keys(products).map(id => ({
    id: id,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // Await the params object if it's a promise
  const resolvedParams = await Promise.resolve(params);
  const typedProducts = products as ProductsType;
  const product = typedProducts[resolvedParams.id];
  
  if (!product) {
    return {
      title: 'Product Not Found - Prodigy Computers',
    };
  }
  
  return {
    title: `${product.name} - Prodigy Computers & Laptops`,
    description: product.shortDescription,
  };
}

// Server Component
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // Await the params object if it's a promise
  const resolvedParams = await Promise.resolve(params);
  
  // Pass the ID to the client component
  return (
     <ScrollSmootherWrapper>
      <ProductDetail productId={resolvedParams.id} />
    </ScrollSmootherWrapper>
  );
}