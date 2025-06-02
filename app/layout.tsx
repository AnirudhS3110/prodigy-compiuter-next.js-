import type { Metadata } from "next";
import { Inter, Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";
import "../css/animations.css";
import NavbarComponent from "./components/NavbarComponent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: "Prodigy Computers & Laptops Pvt. Ltd.",
  description: "Premium custom computers and laptops for professionals, gamers, and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* Favicon */}
        <link rel="icon" href="/assets/logo-nobg.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/logo-nobg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo-nobg.png" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${workSans.variable} font-body bg-light text-dark overflow-x-hidden`}>
        <GoogleAnalytics />
        <NavbarComponent/>
        {children}
      </body>
    </html>
  );
}
