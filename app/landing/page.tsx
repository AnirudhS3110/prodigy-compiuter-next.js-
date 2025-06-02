"use client";

import React from 'react';
import HeroSection from './herosection';
import BannerSection from './bannerSection';
import AfterSalesService from './AfterSalesService';
import Features from './Features';
import Products from './Products';
import ThreePanelHover from './ThreePanelHover';    
import SpecialOffer from './SpecialOffer';
import Testimonials from './Testimonials';
import SocialMedia from './SocialMedia';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

export default function LandingPage() {
    return (
        <>
        <HeroSection />
        <BannerSection/>
        <Features />
        <AfterSalesService />
        <Products />
        <ThreePanelHover />
        <SpecialOffer />
        <Testimonials />
        <SocialMedia />
        <FAQ />
        <Contact />
        <Footer />
        </>
    )
}