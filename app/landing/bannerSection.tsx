import React from "react";
import "../../css/animations.css"

export default function BannerSection()
{
    return(
        <section className="w-full relative overflow-hidden bg-[#e5efff]   ">
           
        {/* <!-- Scrolling text top banner --> */}
        <div className="relative w-full bg-[#4e88ca] py-4 overflow-hidden mt-16">
            {/* <!-- Repeating light text in background --> */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 whitespace-nowrap text-6xl font-extrabold text-white tracking-tighter leading-none select-none">
                TRUSTED BRAND NATIONWIDE TRUSTED BRAND NATIONWIDE TRUSTED BRAND NATIONWIDE TRUSTED BRAND NATIONWIDE TRUSTED BRAND NATIONWIDE TRUSTED BRAND NATIONWIDE TRUSTED BRAND NATIONWIDE
            </div>
            
            {/* <!-- Main content with scrolling effect --> */}
            <div className="overflow-hidden whitespace-nowrap w-full">
                <div className="ticker-slow inline-block slanted-text">
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• 20 YEARS EXPERIENCE</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• INDIAWIDE TRUSTED BRAND</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• 5+ OUTLETS</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• EXPERT SERVICE</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• TEAM SUPPORT</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• AFTER SALE SERVICE SUPPORT</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• DOOR STEP SERVICE</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• PRIORITISED CUSTOMER SUPPORT</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• LIFETIME SUPPORT</span>
                </div>
                <div className="ticker-slow inline-block slanted-text" aria-hidden="true">
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• 20 YEARS EXPERIENCE</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• INDIAWIDE TRUSTED BRAND</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• 5+ OUTLETS</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• EXPERT SERVICE</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• TEAM SUPPORT</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• AFTER SALE SERVICE SUPPORT</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• DOOR STEP SERVICE</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• PRIORITISED CUSTOMER SUPPORT</span>
                    <span className="text-[#162035] text-xl md:text-2xl font-black tracking-tight mx-8">• LIFETIME SUPPORT</span>
                </div>
            </div>
            
            {/* <!-- Repeating shipping text --> */}
            <div className="absolute bottom-[-5px] left-0 w-full text-nowrap overflow-hidden">
                <div className="inline-block animate-[ticker_20s_linear_infinite] whitespace-nowrap">
                    <span className="inline-block mx-3 text-white/70 font-semibold">SHIPPING NATIONALLY</span>
                    <span className="inline-block mx-3 text-white/70 font-semibold">SHIPPING NATIONALLY</span>
                    <span className="inline-block mx-3 text-white/70 font-semibold">SHIPPING NATIONALLY</span>
                    <span className="inline-block mx-3 text-white/70 font-semibold">SHIPPING NATIONALLY</span>
                    <span className="inline-block mx-3 text-white/70 font-semibold">SHIPPING NATIONALLY</span>
                    <span className="inline-block mx-3 text-white/70 font-semibold">SHIPPING NATIONALLY</span>
                    <span className="inline-block mx-3 text-white/70 font-semibold">SHIPPING NATIONALLY</span>
                </div>
            </div>
        </div>
        
        {/* <!-- Main content box --> */}
        <div className="bg-[#e5efff] py-16 px-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#162035] max-w-4xl mx-auto mb-6">WE MAKE THE MACHINE, YOU WORK</h2>
            <p className="text-lg md:text-xl text-[#444] max-w-4xl mx-auto">Building a PC online was never this easy - Express yourself with unique PC builds that are designed with YOU in mind - make it personal!</p>
        </div>
    </section>
    )
}