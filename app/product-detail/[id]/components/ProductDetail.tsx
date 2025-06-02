"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../../all-products/data/products';
import './product-detail.css';
import NotFound from './NotFound';
import ProductTabs from './ProductTabs';
import { Product } from '../../../all-products/types';
import NavBar from './navBar';

// Type assertion for products
type ProductsType = {
  [key: string]: Product;
};

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [activeImage, setActiveImage] = useState<string>('');
  const typedProducts = products as ProductsType;
  const product = typedProducts[productId];
  
  useEffect(() => {
    if (product?.mainImage) {
      setActiveImage(product.mainImage);
    }
  }, [product]);

  if (!product) {
    return <NotFound />;
  }

  // Get related products
  const getRelatedProducts = () => {
    const allProducts = Object.values(typedProducts) as Product[];
    
    // Filter products with same category or brand, excluding current product
    const relatedProducts = allProducts.filter(p => {
      return (p.category === product.category || p.brand === product.brand) && 
             p.id !== product.id;
    });
    
    // Limit to 4 products max
    return relatedProducts.slice(0, 4);
  };

  const relatedProducts = getRelatedProducts();

  return (
    <>
      {/* Breadcrumb */}
      <div className='w-screen min-h-[100px] bg-[#162035]'></div>
     
      <div className="bg-light py-3 border-b  border-gray-200">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-primary hover:text-primary-dark">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/all-products" className="text-primary hover:text-primary-dark">Products</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-medium-gray">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden relative aspect-[4/3]">
                {activeImage && (
                  <Image 
                    src={activeImage} 
                    alt={product.name} 
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                )}
                {!activeImage && (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-medium-gray">Loading image...</span>
                  </div>
                )}
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images?.map((image, index) => (
                  <div 
                    key={index} 
                    className={`w-24 h-24 rounded cursor-pointer border-2 overflow-hidden relative ${
                      activeImage === image ? 'border-primary' : 'border-gray-200'
                    }`}
                    onClick={() => setActiveImage(image)}
                  >
                    <Image 
                      src={image} 
                      alt={`${product.name} - Image ${index + 1}`} 
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="text-primary font-medium text-sm uppercase tracking-wider mb-1">{product.category}</div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-dark tracking-tight">{product.name}</h1>
              
              {product.discount && (
                <div className="flex items-center mb-4">
                  <span className="bg-accent text-white py-1 px-2 rounded text-sm font-semibold">
                    -{product.discount}
                  </span>
                </div>
              )}
              
              <p className="text-medium-gray mb-6">{product.shortDescription}</p>
              
              <div className="mb-6">
                <Link 
                  href="/all-products" 
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-gradient-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                >
                  <i className="fas fa-arrow-left mr-2"></i> Back to Products
                </Link>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                      <span className="text-medium-gray">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-light p-3 rounded-md">
                  <div className="flex items-center mb-1">
                    <i className="fas fa-headset text-primary mr-2"></i>
                    <span className="font-semibold">Lifetime Support</span>
                  </div>
                  <p className="text-sm text-medium-gray">Expert technical assistance</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a 
                  href={`https://wa.me/919985346363?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}&utm_source=product_detail&utm_medium=whatsapp&utm_campaign=product_enquiry`}
                  className="inline-flex items-center justify-center px-6 py-4 rounded-full btn-text text-lg bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300 w-full sm:w-auto"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'begin_checkout', {
                        event_category: 'product_interaction',
                        event_label: `WhatsApp Enquiry - ${product.name}`,
                        items: [{
                          item_id: product.id,
                          item_name: product.name,
                          item_category: product.category,
                          item_brand: product.brand
                        }]
                      });
                    }
                  }}
                >
                  <i className="fab fa-whatsapp mr-2"></i> Enquire Now
                </a>
                <a 
                  href="tel:+919985346363?utm_source=product_detail&utm_medium=call&utm_campaign=product_enquiry" 
                  className="inline-flex items-center justify-center px-6 py-4 rounded-full btn-text text-lg bg-gradient-primary text-white shadow-primary-custom hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(74,144,226,0.3)] transition-all duration-300 w-full sm:w-auto"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'phone_call', {
                        event_category: 'product_interaction',
                        event_label: `Phone Call - ${product.name}`
                      });
                    }
                  }}
                >
                  <i className="fas fa-phone-alt mr-2"></i> Call Us
                </a>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <ProductTabs product={product} />
        </div>
      </section>
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-light">
          <div className="container mx-auto max-w-[1280px] px-6">
            <div className="text-center mb-8">
              <div className="text-primary section-tag text-sm mb-2">YOU MIGHT ALSO LIKE</div>
              <h2 className="text-3xl font-heading font-black mb-4 text-dark tracking-tight">
                RELATED <span className="text-primary">PRODUCTS</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-sm-custom transition-all duration-300 hover:-translate-y-2.5 hover:shadow-lg-custom flex flex-col h-full"
                >
                  <div className="relative overflow-hidden pt-[60%]">
                    {relatedProduct.discount && (
                      <span className="absolute top-3 left-3 bg-gradient-primary text-white py-1 px-2 rounded text-xs font-medium z-[2]">
                        -{relatedProduct.discount}
                      </span>
                    )}
                    {relatedProduct.mainImage && (
                      <Image 
                        src={relatedProduct.mainImage} 
                        alt={relatedProduct.name} 
                        fill
                        className="absolute top-0 left-0 object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    )}
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-1 text-secondary">{relatedProduct.name}</h3>
                    <p className="text-medium-gray text-sm mb-2 flex-grow line-clamp-2">{relatedProduct.shortDescription}</p>
                    <Link 
                      href={`/product-detail/${relatedProduct.id}?utm_source=related_products&utm_medium=product_link&utm_campaign=cross_sell`}
                      className="inline-flex items-center justify-center px-3 py-2 rounded-full btn-text text-sm bg-gradient-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'select_item', {
                            event_category: 'product_interaction',
                            event_label: `Related Product - ${relatedProduct.name}`,
                            items: [{
                              item_id: relatedProduct.id,
                              item_name: relatedProduct.name,
                              item_list_name: 'Related Products',
                              item_category: relatedProduct.category,
                              item_brand: relatedProduct.brand
                            }]
                          });
                        }
                      }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 right-4 md:bottom-1/2 md:right-4 md:translate-y-1/2 flex md:flex-col flex-row gap-2 z-[98]">
        <a 
          href="https://wa.me/919985346363?utm_source=product_detail&utm_medium=floating_button&utm_campaign=whatsapp_contact" 
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl shadow-md-custom transition-all duration-300 hover:-translate-x-1 bg-[#25D366] hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)]" 
          data-tooltip="Chat with us on WhatsApp" 
          target="_blank"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'contact', {
                event_category: 'engagement',
                event_label: 'Floating WhatsApp Button',
                method: 'WhatsApp'
              });
            }
          }}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a 
          href="tel:+919985346363?utm_source=product_detail&utm_medium=floating_button&utm_campaign=phone_contact" 
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl shadow-md-custom transition-all duration-300 hover:-translate-x-1 bg-primary hover:shadow-primary-custom" 
          data-tooltip="Call us now"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'phone_call', {
                event_category: 'engagement',
                event_label: 'Floating Call Button',
                method: 'Phone'
              });
            }
          }}
        >
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
    </>
  );
};

export default ProductDetail; 