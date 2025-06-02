import React from 'react'

export default function NavBar(){
    return(
        <header id="header" className="sticky top-0 left-0 w-full z-[1000] transition-all duration-300 py-3 bg-white shadow-sm">
        <div className="container mx-auto max-w-[1280px] px-6">
            <nav className="flex items-center justify-between h-[65px]">
                <a href="index.html" className="flex items-center relative">
                    <img src="/assets/logo-nobg.png" alt="Prodigy Computers & Laptops Logo" className="h-[60px] w-auto transition-all duration-300"/>
                    <span className="ml-3 font-logo font-extrabold text-xl tracking-tight hidden sm:block">PRODIGY<span className="text-primary font-black">COMPUTERS</span></span>
                </a>
                
                <div className="nav-center flex items-center">
                    
                </div>
                
                <div className="flex items-center gap-3">
                    <a href="https://wa.me/919985346363" className="inline-flex items-center bg-[#25D366] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(37,211,102,0.3)]">
                        <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                    </a>
                    <button className="mobile-menu-btn hidden bg-transparent border-0 text-dark text-2xl cursor-pointer p-2" id="mobile-menu-btn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>
    )
}