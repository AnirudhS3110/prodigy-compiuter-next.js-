"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (command: string, target: string, config?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

// Split the component that uses useSearchParams
function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && window.gtag) {
      // Track page views when the route changes
      window.gtag("config", "G-629PG57ZK7", {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
      });
      
      // Also track for Google Ads
      window.gtag("config", "AW-16847051854");
    }
  }, [pathname, searchParams]);

  return null;
}

// Main component with scripts
export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PFGV72XJ');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFGV72XJ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />

      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-629PG57ZK7" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-629PG57ZK7');
        `}
      </Script>

      {/* Google Ads Conversion Tracking */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16847051854" strategy="afterInteractive" />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16847051854');
        `}
      </Script>

      {/* Wrap the component that uses useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <GoogleAnalyticsTracker />
      </Suspense>
    </>
  );
} 