import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/all-products/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/all-products/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/product-detail/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/landing/**/*.{js,ts,jsx,tsx,mdx}",
        "./**/*.{js,ts,jsx,tsx,mdx}", // This already covers everything, but still okay to keep the rest for clarity
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#4a90e2',
                'primary-dark': '#3a7bc9',
                'primary-light': '#6ba5ea',
                accent: '#FF9500',
                'accent-light': '#FFB340',
                secondary: '#152a43',
                'secondary-light': '#1e3b5d',
                dark: '#152a43',
                'dark-gray': '#2d3e53',
                'medium-gray': '#5c6b7c',
                'light-gray': '#c0c9d6',
                light: '#f2f6fa',
            },
            fontFamily: {
                heading: ['var(--font-montserrat)'],
                body: ['var(--font-montserrat)', 'var(--font-work-sans)', 'sans-serif'],
                logo: ['var(--font-montserrat)', 'sans-serif'],
            },
            boxShadow: {
                'sm-custom': '0 2px 8px rgba(21, 42, 67, 0.08)',
                'md-custom': '0 4px 16px rgba(21, 42, 67, 0.12)',
                'lg-custom': '0 8px 30px rgba(21, 42, 67, 0.18)',
                'primary-custom': '0 8px 30px rgba(74, 144, 226, 0.25)',
                'accent-custom': '0 8px 30px rgba(255, 149, 0, 0.25)',
            },
            animation: {
                'float-slow': 'float-slow 15s ease-in-out infinite',
                'float-slow-reverse': 'float-slow 20s ease-in-out infinite reverse',
                'float': 'float 3s ease-in-out infinite',
                'float-delay': 'float 3s ease-in-out 1s infinite',
                'pulse-custom': 'pulse-custom 2s infinite',
                'ticker': 'ticker 20s linear infinite',
                'ticker-slow': 'ticker 35s linear infinite',
                'testimonials-scroll': 'testimonials-scroll 30s linear infinite',
                'gradient-animation': 'gradient-animation 15s ease infinite',
            },
            keyframes: {
                'float-slow': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(30px, -30px)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-custom': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        boxShadow: '0 8px 30px rgba(255, 149, 0, 0.25)'
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 15px 30px rgba(255, 149, 0, 0.4)'
                    },
                },
                'ticker': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'testimonials-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-250px * 8 - 1rem * 8))' },
                },
                'gradient-animation': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(120deg, #4a90e2, #6ba5ea)',
                'gradient-dark': 'linear-gradient(120deg, #152a43, #2d3e53)',
                'gradient-accent': 'linear-gradient(120deg, #FF9500, #FFB340)',
                'gradient-blue': 'linear-gradient(120deg, #4a90e2, #2d7bd3)',
                'gradient-hero': 'linear-gradient(135deg, #6424ff, #0e45e8, #0a98db)',
                'gradient-stripe': 'linear-gradient(300deg, #00d4ff, #7638fa, #ff0dbf)',
            },
        },
    },
    plugins: [],
};

export default config; 