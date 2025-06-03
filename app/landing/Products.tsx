"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  id: string;
  title: string;
  imageSrc: string;
  specs: {
    processor: string;
    memory: string;
  };
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, title, imageSrc, specs, description }) => {
  // Encode product title for WhatsApp message
  const encodedTitle = encodeURIComponent(title);
  
  // Add UTM parameters to track campaign performance
  const productDetailUrl = `/product-detail/${id}?utm_source=homepage&utm_medium=featured&utm_campaign=product_card`;
  const whatsappUrl = `https://wa.me/919985346363?text=I'm%20interested%20in%20${encodedTitle}&utm_source=homepage&utm_medium=whatsapp&utm_campaign=product_enquiry`;
  
  // Function to track Google Analytics events
  const trackGAEvent = (action: string, category: string, label: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: 1
      });
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm-custom transition-all duration-300 hover:-translate-y-2.5 hover:shadow-lg-custom flex flex-col h-full">
      <div className="relative overflow-hidden pt-[56.25%]">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 flex items-center justify-center gap-3 hover:opacity-100">
          <Link 
            href={productDetailUrl} 
            className="btn bg-gradient-primary text-white rounded-full py-2 px-3 text-sm font-semibold"
            onClick={() => trackGAEvent('view_item', 'product_interaction', `View Details - ${title}`)}
          >
            View Details
          </Link>
          <a 
            href={whatsappUrl} 
            className="btn bg-[#25D366] text-white rounded-full py-2 px-3 text-sm font-semibold flex items-center"
            onClick={() => trackGAEvent('begin_checkout', 'product_interaction', `WhatsApp Enquiry - ${title}`)}
          >
            <i className="fab fa-whatsapp mr-1"></i> Enquire
          </a>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
        <div className="flex items-center mb-3 text-medium-gray text-sm flex-wrap gap-2">
          <span className="flex items-center mr-3">
            <i className="fas fa-microchip mr-1 text-primary"></i> {specs.processor}
          </span>
          <span className="flex items-center">
            <i className="fas fa-memory mr-1 text-primary"></i> {specs.memory}
          </span>
        </div>
        <p className="text-medium-gray text-sm mb-3 flex-grow">{description}</p>
        <div className="mt-auto mb-3">
          <div className="text-center mb-3">
            <span className="font-heading font-bold text-lg text-dark">Contact for Price</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link 
            href={productDetailUrl}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-gradient-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
            onClick={() => trackGAEvent('view_item', 'product_interaction', `View Details Button - ${title}`)}
          >
            View Details
          </Link>
          <a 
            href={whatsappUrl}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-heading font-semibold bg-[#25D366] text-white shadow-sm hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300"
            onClick={() => trackGAEvent('begin_checkout', 'product_interaction', `WhatsApp Enquiry Button - ${title}`)}
          >
            <i className="fab fa-whatsapp mr-2"></i> Enquire 
          </a>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const featuredProducts = [
    {
      id: "asus-tuf-gaming-a15",
      title: "Asus TUF Gaming A15",
      imageSrc: "/assets/asus_tuf_a15/1.jpeg",
      specs: {
        processor: "AMD Ryzen 7",
        memory: "16GB RAM"
      },
      description: "Gaming laptop powered by AMD Ryzen 7 processor and NVIDIA RTX 3050 GPU for smooth gaming experience."
    },
    {
      id: "asus-rog-strix-g16",
      title: "ASUS ROG Strix G16",
      imageSrc: "/assets/asus_rog_strix_g16/1.jpeg",
      specs: {
        processor: "Intel Core i7",
        memory: "16GB RAM"
      },
      description: "High-end gaming laptop with 13th Gen Intel Core i7 processor and RTX 4050 GPU for competitive gaming."
    },
    {
      id: "asus-vivobook-go-14-ryzen-3",
      title: "ASUS Vivobook Go 14 Ryzen 3",
      imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop&crop=center",
      specs: {
        processor: "AMD Ryzen 3",
        memory: "8GB RAM"
      },
      description: "Lightweight and compact 14-inch laptop powered by AMD Ryzen 3 processor, perfect for students and everyday productivity."
    },
    {
      id: "asus-vivobook-s-15-oled",
      title: "ASUS Vivobook S 15 OLED",
      imageSrc: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=400&fit=crop&crop=center",
      specs: {
        processor: "OLED Display",
        memory: "16GB RAM"
      },
      description: "Premium 15.6-inch OLED laptop with vibrant display and high-performance features for creative professionals."
    }
  ];

  return (
    <section id="products" className="py-24 bg-light relative">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div>
            <div className="text-primary section-tag text-sm mb-3">OUR COLLECTION</div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-dark tracking-tight">FEATURED <span className="text-primary">PRODUCTS</span></h2>
          </div>
          <Link 
            href="/all-products?utm_source=homepage&utm_medium=link&utm_campaign=view_all"
            className="text-primary font-medium flex items-center gap-1 transition-all duration-150 hover:text-primary-dark hover:translate-x-0.5"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'view_item_list', {
                  item_list_id: 'all_products',
                  item_list_name: 'All Products',
                  campaign: 'homepage_featured'
                });
              }
            }}
          >
            View All Products <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 