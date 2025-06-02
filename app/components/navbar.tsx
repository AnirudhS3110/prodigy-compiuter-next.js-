"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Mark component as mounted (client-side only)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle scroll event to change navbar background
    useEffect(() => {
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
    }, []);

    // Apply body overflow style only after component is mounted (client-side)
    useEffect(() => {
        if (mounted) {
            if (mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }, [mobileMenuOpen, mounted]);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close mobile menu
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
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
                    
                    {/* Mobile Menu Overlay */}
                    <div 
                        className={`mobile-menu-overlay fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-998 transition-all duration-300 ${
                            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`} 
                        onClick={closeMobileMenu}
                    />
                    
                    {/* Navigation Center */}
                    <div className={`nav-center fixed top-0 right-0 md:relative md:top-auto md:right-auto w-80 md:w-auto h-screen md:h-auto bg-secondary md:bg-transparent z-999 md:z-auto p-20 md:p-0 transition-all duration-300 ${
                        mobileMenuOpen ? 'right-0' : '-right-full md:right-auto'
                    }`}>
                        <ul className="flex flex-col md:flex-row gap-5 m-0 p-0 list-none">
                            <li>
                                <Link 
                                    href="/#home" 
                                    className={`nav-link text-base relative py-2 hover:text-primary transition-colors duration-150 active uppercase tracking-wide ${
                                        scrolled ? 'text-dark' : 'text-white'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/all-products" 
                                    className={`nav-link text-base relative py-2 hover:text-primary transition-colors duration-150 uppercase tracking-wide ${
                                        scrolled ? 'text-dark' : 'text-white'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/#faq" 
                                    className={`nav-link text-base relative py-2 hover:text-primary transition-colors duration-150 uppercase tracking-wide ${
                                        scrolled ? 'text-dark' : 'text-white'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/#contact" 
                                    className={`nav-link text-base relative py-2 hover:text-primary transition-colors duration-150 uppercase tracking-wide ${
                                        scrolled ? 'text-dark' : 'text-white'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                            {/* Mobile-only WhatsApp link */}
                            <li className="hidden md:hidden mt-4 pt-4 border-t border-gray-100">
                                <a 
                                    href="https://wa.me/919985346363" 
                                    className="inline-flex items-center justify-center bg-[#25D366] text-white rounded-full px-4 py-3 w-full text-base font-semibold"
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
                        >
                            <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                        </a>
                        <button 
                            className={`mobile-menu-btn md:hidden bg-transparent border-0 text-2xl cursor-pointer p-2 ${
                                scrolled ? 'text-dark' : 'text-white'
                            }`} 
                            onClick={toggleMobileMenu}
                        >
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;