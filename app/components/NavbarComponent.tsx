"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './navbar.css'

const NavbarComponent = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const shouldRender = pathname !== '/product-detail/[id]';

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

    // Check if a link is active
    const isActive = (href: string) => {
        if (href === '/#home' && pathname === '/') return true;
        if (href === '/all-products' && pathname === '/all-products') return true;
        if (href === '/#faq' && pathname.includes('/#faq')) return true;
        if (href === '/#contact' && pathname.includes('/#contact')) return true;
        return false;
    };

    return (
        <header 
            id="header" 
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 py-3 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
                <nav className="flex items-center justify-between h-[65px]">
                    {/* Logo - always visible */}
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
                    
                    {/* Mobile Menu Overlay - only visible when menu is open */}
                    {mobileMenuOpen && (
                        <div 
                            className="fixed inset-0 bg-black/50 z-[998] backdrop-blur-[3px]" 
                            onClick={closeMobileMenu}
                            aria-hidden="true"
                        />
                    )}
                    
                    {/* Navigation Center - Desktop version with proper positioning */}
                    <div 
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
                                    onClick={closeMobileMenu}
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
                                    onClick={closeMobileMenu}
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
                                    onClick={closeMobileMenu}
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
                                    onClick={closeMobileMenu}
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
                    </div>
                    
                    <div className="flex items-center gap-2 md:gap-3">
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
                        <button 
                            className={`flex md:hidden items-center justify-center w-[40px] h-[40px] rounded-full bg-transparent border-0 text-2xl cursor-pointer relative z-[1001] ${
                                scrolled ? 'text-dark' : 'text-white'
                            }`} 
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation menu"
                        >
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </nav>
            </div>
            
            {/* Add CSS for mobile navigation */}
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
        </header>
    );
};

export default NavbarComponent; 