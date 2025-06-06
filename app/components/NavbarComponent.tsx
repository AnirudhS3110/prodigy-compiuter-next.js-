"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../all-products/data/products';

// Define interfaces for better type safety
interface ProductInfo {
    id: string;
    name: string;
    brand: string;
    category: string;
    graphics?: string;
    ram?: string;
}

interface ProductSpecification {
    name: string;
    value: string;
}

interface ProductRecord {
    id: string;
    name: string;
    brand: string;
    category: string;
    specifications?: ProductSpecification[];
    [key: string]: unknown; // Change from any to unknown for better type safety
}

const NavbarComponent = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const shouldRender = pathname !== '/product-detail/[id]';
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [ram, setRam] = useState('All');
    const [graphicsCard, setGraphicsCard] = useState('All');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<ProductInfo[]>([]);

    // Process products data
    const { laptopNames, printerNames, graphicsCards, ramOptions } = useMemo(() => {
        const laptops: ProductInfo[] = [];
        const printers: ProductInfo[] = [];
        const graphicsSet = new Set<string>();
        const ramSet = new Set<string>();
        
        // Extract product data
        Object.values(products).forEach((product: ProductRecord) => {
            if (product.category === "Laptops") {
                laptops.push({
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    category: "Laptops",
                    graphics: product.specifications?.find((spec: ProductSpecification) => spec.name === "Graphics")?.value || "Not specified",
                    ram: product.specifications?.find((spec: ProductSpecification) => spec.name === "RAM" || spec.name === "Memory")?.value || "Not specified"
                });
                
                // Extract graphics cards
                const graphicsSpec = product.specifications?.find((spec: ProductSpecification) => spec.name === "Graphics")?.value;
                if (graphicsSpec) graphicsSet.add(graphicsSpec);
                
                // Extract RAM options
                const ramSpec = product.specifications?.find((spec: ProductSpecification) => spec.name === "RAM" || spec.name === "Memory")?.value;
                if (ramSpec) ramSet.add(ramSpec);
            } else if (product.category === "Printers") {
                printers.push({
                    id: product.id,
                    name: product.name,
                    brand: product.brand,
                    category: "Printers"
                });
            }
        });
        
        // Convert sets to arrays and sort
        const graphicsCards = Array.from(graphicsSet).sort();
        const ramOptions = Array.from(ramSet).sort();
        
        return {
            laptopNames: laptops,
            printerNames: printers,
            graphicsCards,
            ramOptions
        };
    }, []);

    // Handle scroll event to change navbar background
    useEffect(() => {
        // Skip effect if we're not rendering the navbar
        if (!shouldRender) return;
        
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [shouldRender]);

    // Early return after all hooks are called
    if (!shouldRender) {
        return null;
    }

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling when menu is open
        } else {
            document.body.style.overflow = ''; // Enable scrolling when menu is closed
        }
    };

    // Close mobile menu
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = ''; // Re-enable scrolling
    };

    // Toggle search bar
    const toggleSearch = () => {
        setSearchExpanded(!searchExpanded);
        if (!searchExpanded) {
            setMobileMenuOpen(false);
            document.body.style.overflow = '';
        } else {
            setShowSuggestions(false);
        }
    };

    // Handle section navigation with proper scroll behavior
    const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        
        // Close mobile menu if open
        if (mobileMenuOpen) {
            closeMobileMenu();
        }
        
        // If we're on the homepage, scroll to the section
        if (pathname === '/') {
            const section = document.getElementById(sectionId);
            if (section) {
                // Calculate offset to account for navbar height (with a small extra padding)
                const navbarHeight = document.getElementById('header')?.offsetHeight || 0;
                const offsetTop = section.offsetTop - navbarHeight - 20;
                
                // Scroll to section with smooth behavior
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } else {
            // If on a different page, navigate to homepage with hash
            router.push(`/#${sectionId}`);
        }
    };

    // Get products to search based on category
    const getSearchProducts = () => {
        if (category === 'Laptop') {
            return laptopNames;
        } else if (category === 'Printer') {
            return printerNames;
        } else {
            // When "All" is selected, search in both laptops and printers
            return [...laptopNames, ...printerNames];
        }
    };

    // Handle search input change
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        
        if (query.trim() === '') {
            setShowSuggestions(false);
            setSuggestions([]);
            return;
        }
        
        // Get products based on selected category (or all products)
        const productsToSearch = getSearchProducts();
        
        // Filter products based on search query and filters
        const filteredProducts = productsToSearch
            .filter(product => {
                const matchesName = product.name.toLowerCase().includes(query.toLowerCase());
                const matchesBrand = product.brand.toLowerCase().includes(query.toLowerCase());
                
                // For laptops, check additional filters if they are applied
                if (product.category === "Laptops") {
                    // Only apply RAM filter if a specific RAM option is selected
                    const passesRamFilter = ram === 'All' || (product.ram && product.ram.includes(ram));
                    
                    // Only apply graphics filter if a specific graphics card option is selected
                    const passesGraphicsFilter = graphicsCard === 'All' || 
                        (graphicsCard === 'Integrated' && product.graphics && 
                            product.graphics.toLowerCase().includes('integrated')) || 
                        (product.graphics && product.graphics.toLowerCase().includes(graphicsCard.toLowerCase()));
                    
                    return (matchesName || matchesBrand) && passesRamFilter && passesGraphicsFilter;
                }
                
                return matchesName || matchesBrand;
            })
            .slice(0, 5); // Limit to 5 suggestions
        
        setSuggestions(filteredProducts);
        setShowSuggestions(filteredProducts.length > 0);
    };

    // Handle search form submission
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim() === '') return;
        
        // Redirect to first suggestion if available
        if (suggestions.length > 0) {
            handleSuggestionClick(suggestions[0].id);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (productId: string) => {
        // Close search and redirect to product detail
        setSearchExpanded(false);
        setShowSuggestions(false);
        router.push(`/product-detail/${productId}`);
    };

    // Check if a link is active
    const isActive = (href: string) => {
        if (href === '/#home' && pathname === '/') return true;
        if (href === '/all-products' && pathname === '/all-products') return true;
        if (href === '/#faq' && pathname.includes('/#faq')) return true;
        if (href === '/#contact' && pathname.includes('/#contact')) return true;
        return false;
    };

    const isAnyLaptopOption = category === 'All' || category === 'Laptop';

    return (
        <header 
            id="header" 
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 py-3 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
                <nav className="flex items-center justify-between h-[65px] relative">
                    {/* Logo - always visible if search not expanded */}
                    <AnimatePresence>
                        {!searchExpanded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link href="/" className="flex items-center relative z-[1001]">
                                    <Image 
                                        src="/assets/logo-nobg.png" 
                                        alt="Prodigy Computers & Laptops Logo" 
                                        width={60} 
                                        height={60} 
                                        className="h-[50px] md:h-[60px] w-auto transition-all duration-300"
                                    />
                                    <span className={`ml-3 font-logo font-extrabold text-xl tracking-tight hidden sm:block ${
                                        scrolled ? 'text-dark' : 'text-white'
                                    }`}>
                                        PRODIGY<span className="text-primary font-black">COMPUTERS</span>
                                    </span>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Mobile Menu Overlay - only visible when menu is open */}
                    {mobileMenuOpen && (
                        <div 
                            className="fixed inset-0 bg-black/50 z-[998] backdrop-blur-[3px]" 
                            onClick={closeMobileMenu}
                            aria-hidden="true"
                        />
                    )}
                    
                    {/* Navigation Center - Desktop version with proper positioning */}
                    <AnimatePresence>
                        {!searchExpanded && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`fixed top-0 right-0 w-[80%] max-w-[300px] h-screen bg-[#152a43] shadow-[-5px_0_15px_rgba(0,0,0,0.1)] p-[80px_20px_20px] z-[999] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                } md:relative md:transform-none md:translate-x-0 md:flex md:items-center md:justify-center md:flex-1 md:h-auto md:bg-transparent md:shadow-none md:p-0 md:z-auto md:overflow-visible md:max-w-none md:w-auto md:mx-auto`}
                            >
                                {/* Mobile menu close button */}
                                <button 
                                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white rounded-full bg-dark-gray/50 md:hidden"
                                    onClick={closeMobileMenu}
                                    aria-label="Close menu"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                                
                                {/* Mobile menu logo */}
                                <div className="absolute top-5 left-5 md:hidden">
                                    <Image 
                                        src="/assets/logo-nobg.png" 
                                        alt="Logo" 
                                        width={40} 
                                        height={40} 
                                        className="h-[40px] w-[40px] object-contain"
                                    />
                                </div>
                                
                                <ul className="flex md:flex-row flex-col md:items-center items-start gap-0 md:gap-5 m-0 p-0 list-none">
                                    <li className="w-full md:w-auto border-b md:border-b-0 border-[#2a3555]">
                                        <Link 
                                            href="/#home" 
                                            className={`block w-full md:w-auto py-[15px] md:py-2 text-base uppercase tracking-wide transition-colors duration-150 ${
                                                isActive('/#home') ? 'text-primary' : 'text-white'
                                            } ${scrolled ? 'md:text-[#3a7bc9]' : 'md:text-white'} relative`}
                                            onClick={(e) => handleSectionNavigation(e, 'home')}
                                        >
                                            Home
                                            {isActive('/#home') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary hidden md:block"></span>}
                                        </Link>
                                    </li>
                                    <li className="w-full md:w-auto border-b md:border-b-0 border-[#2a3555]">
                                        <Link 
                                            href="/all-products" 
                                            className={`block w-full md:w-auto py-[15px] md:py-2 text-base uppercase tracking-wide transition-colors duration-150 ${
                                                isActive('/all-products') ? 'text-primary' : 'text-white'
                                            } ${scrolled ? 'md:text-[#3a7bc9]' : 'md:text-white'} relative`}
                                            onClick={closeMobileMenu}
                                        >
                                            Products
                                            {isActive('/all-products') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary hidden md:block"></span>}
                                        </Link>
                                    </li>
                                    <li className="w-full md:w-auto border-b md:border-b-0 border-[#2a3555]">
                                        <Link 
                                            href="/#after-sales-service" 
                                            className={`block w-full md:w-auto py-[15px] md:py-2 text-base uppercase tracking-wide transition-colors duration-150 ${
                                                isActive('/#after-sales-service') ? 'text-primary' : 'text-white'
                                            } ${scrolled ? 'md:text-[#3a7bc9]' : 'md:text-white'} relative`}
                                            onClick={(e) => handleSectionNavigation(e, 'after-sales-service')}
                                        >
                                            Services
                                            {isActive('/#after-sales-service') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary hidden md:block"></span>}
                                        </Link>
                                    </li>
                                    <li className="w-full md:w-auto border-b md:border-b-0 border-[#2a3555]">
                                        <Link 
                                            href="/#faq" 
                                            className={`block w-full md:w-auto py-[15px] md:py-2 text-base uppercase tracking-wide transition-colors duration-150 ${
                                                isActive('/#faq') ? 'text-primary' : 'text-white'
                                            } ${scrolled ? 'md:text-[#3a7bc9]' : 'md:text-white'} relative`}
                                            onClick={(e) => handleSectionNavigation(e, 'faq')}
                                        >
                                            FAQ
                                            {isActive('/#faq') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary hidden md:block"></span>}
                                        </Link>
                                    </li>
                                    <li className="w-full md:w-auto border-b md:border-b-0 border-[#2a3555]">
                                        <Link 
                                            href="/#contact" 
                                            className={`block w-full md:w-auto py-[15px] md:py-2 text-base uppercase tracking-wide transition-colors duration-150 ${
                                                isActive('/#contact') ? 'text-primary' : 'text-white'
                                            } ${scrolled ? 'md:text-[#3a7bc9]' : 'md:text-white'} relative`}
                                            onClick={(e) => handleSectionNavigation(e, 'contact')}
                                        >
                                            Contact
                                            {isActive('/#contact') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary hidden md:block"></span>}
                                        </Link>
                                    </li>
                                    {/* Mobile-only WhatsApp link */}
                                    <li className="mt-6 pt-4 border-t border-[#2a3555] w-full md:hidden">
                                        <a 
                                            href="https://wa.me/919985346363" 
                                            className="inline-flex items-center justify-center bg-[#25D366] text-white rounded-full px-4 py-3 w-full text-base font-semibold"
                                            onClick={() => {
                                                if (typeof window !== 'undefined' && window.gtag) {
                                                    window.gtag('event', 'contact', {
                                                        method: 'WhatsApp', 
                                                        location: 'mobile_menu'
                                                    });
                                                }
                                                closeMobileMenu();
                                            }}
                                        >
                                            <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Search Bar */}
                        <AnimatePresence>
                            {searchExpanded ? (
                                <motion.form
                                    initial={{ width: "40px", opacity: 0 }}
                                    animate={{ width: "100%", opacity: 1 }}
                                    exit={{ width: "40px", opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute left-0 top-0 w-full h-full flex items-center z-[1002]"
                                    onSubmit={handleSearchSubmit}
                                >
                                    <div className="flex w-full items-center bg-white rounded-md shadow-md">
                                        <div className="flex flex-col md:flex-row w-full">
                                            <div className="flex-grow flex items-center p-2 md:p-3 relative">
                                                <input
                                                    type="text"
                                                    value={searchQuery}
                                                    onChange={handleSearchInputChange}
                                                    placeholder="Search products..."
                                                    className="w-full bg-transparent border-none outline-none text-dark"
                                                    autoFocus
                                                />
                                                
                                                {/* Search Suggestions */}
                                                {showSuggestions && (
                                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
                                                        {suggestions.length > 0 ? (
                                                            <ul className="py-1">
                                                                {suggestions.map((product) => (
                                                                    <li 
                                                                        key={product.id}
                                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-dark"
                                                                        onClick={() => handleSuggestionClick(product.id)}
                                                                    >
                                                                        <div className="font-medium">{product.name}</div>
                                                                        <div className="text-sm text-gray-500">{product.brand} - {product.category}</div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <div className="px-4 py-2 text-gray-500">No products found</div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="flex flex-col md:flex-row border-t md:border-t-0 md:border-l border-gray-200">
                                                <select
                                                    value={category}
                                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                        setCategory(e.target.value);
                                                        // Reset suggestions
                                                        if (searchQuery) {
                                                            handleSearchInputChange({ target: { value: searchQuery } } as React.ChangeEvent<HTMLInputElement>);
                                                        }
                                                    }}
                                                    className="p-2 md:p-3 bg-transparent border-none outline-none text-sm text-dark cursor-pointer"
                                                >
                                                    <option value="All">All Categories</option>
                                                    <option value="Laptop">Laptop</option>
                                                    <option value="Printer">Printer</option>
                                                </select>
                                                
                                                <motion.select
                                                    value={ram}
                                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                        setRam(e.target.value);
                                                        // Update suggestions
                                                        if (searchQuery) {
                                                            handleSearchInputChange({ target: { value: searchQuery } } as React.ChangeEvent<HTMLInputElement>);
                                                        }
                                                    }}
                                                    className={`p-2 md:p-3 bg-transparent border-none outline-none text-sm border-t md:border-t-0 md:border-l border-gray-200 ${!isAnyLaptopOption ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer text-dark'}`}
                                                    disabled={!isAnyLaptopOption}
                                                    animate={{ opacity: isAnyLaptopOption ? 1 : 0.5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <option value="All">Any RAM</option>
                                                    {ramOptions.length > 0 ? 
                                                        ramOptions.map((option, index) => (
                                                            <option key={index} value={option}>{option}</option>
                                                        )) : (
                                                            <>
                                                                <option value="8GB">8GB RAM</option>
                                                                <option value="16GB">16GB RAM</option>
                                                                <option value="32GB">32GB RAM</option>
                                                            </>
                                                        )
                                                    }
                                                </motion.select>
                                                
                                                <motion.select
                                                    value={graphicsCard}
                                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                        setGraphicsCard(e.target.value);
                                                        // Update suggestions
                                                        if (searchQuery) {
                                                            handleSearchInputChange({ target: { value: searchQuery } } as React.ChangeEvent<HTMLInputElement>);
                                                        }
                                                    }}
                                                    className={`p-2 md:p-3 bg-transparent border-none outline-none text-sm border-t md:border-t-0 md:border-l border-gray-200 ${!isAnyLaptopOption ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer text-dark'}`}
                                                    disabled={!isAnyLaptopOption}
                                                    animate={{ opacity: isAnyLaptopOption ? 1 : 0.5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <option value="All">Any Graphics</option>
                                                    {graphicsCards.length > 0 ? 
                                                        graphicsCards.map((card, index) => (
                                                            <option key={index} value={card}>{card}</option>
                                                        )) : (
                                                            <>
                                                                <option value="NVIDIA GTX 1650">NVIDIA GTX 1650</option>
                                                                <option value="NVIDIA RTX 3060">NVIDIA RTX 3060</option>
                                                                <option value="Integrated">Integrated</option>
                                                            </>
                                                        )
                                                    }
                                                </motion.select>
                                            </div>
                                        </div>
                                        
                                        <button
                                            type="button"
                                            onClick={toggleSearch}
                                            className="p-3 text-dark bg-transparent border-none cursor-pointer hover:text-primary transition-colors"
                                        >
                                            <i className="fas fa-times text-lg"></i>
                                        </button>
                                    </div>
                                </motion.form>
                            ) : (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={toggleSearch}
                                    className={`p-2 bg-transparent border-none cursor-pointer ${
                                        scrolled ? 'text-dark' : 'text-white'
                                    } hover:text-primary transition-colors duration-150`}
                                >
                                    <i className="fas fa-search text-lg"></i>
                                </motion.button>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {!searchExpanded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a 
                                        href="https://wa.me/919985346363" 
                                        className="hidden md:inline-flex items-center bg-[#25D366] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)]"
                                        onClick={() => {
                                            if (typeof window !== 'undefined' && window.gtag) {
                                                window.gtag('event', 'contact', {
                                                    method: 'WhatsApp', 
                                                    location: 'header'
                                                });
                                            }
                                        }}
                                    >
                                        <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {!searchExpanded && (
                                <motion.button 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex md:hidden items-center justify-center w-[40px] h-[40px] rounded-full bg-transparent border-0 text-2xl cursor-pointer relative z-[1001] ${
                                        scrolled ? 'text-dark' : 'text-white'
                                    }`} 
                                    onClick={toggleMobileMenu}
                                    aria-label="Toggle navigation menu"
                                >
                                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>
            </div>
            
            {/* Add CSS for mobile navigation and scroll behavior */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .nav-center::before {
                        content: '';
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        width: 40px;
                        height: 40px;
                        background-image: url('/assets/logo1.png');
                        background-size: contain;
                        background-repeat: no-repeat;
                        opacity: 0.2;
                    }
                    
                    .nav-link.active {
                        color: #4a90e2 !important;
                    }
                    
                    .nav-link:hover {
                        color: #4a90e2 !important;
                    }
                }
            `}</style>

            {/* Add global styles for scroll behavior */}
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                    scroll-padding-top: 100px; /* Adjust this value based on your navbar height */
                }
                
                section[id] {
                    scroll-margin-top: 100px; /* Adjust this value based on your navbar height */
                }
            `}</style>
        </header>
    );
};

export default NavbarComponent; 