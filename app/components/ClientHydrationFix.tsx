"use client";

import { useEffect } from 'react';

// This component ensures consistent hydration for the body element
const ClientHydrationFix = () => {
  // Run only on client side to ensure consistent body classes
  useEffect(() => {
    // Fix for document.body.style.overflow
    const originalSetOverflow = Object.getOwnPropertyDescriptor(
      document.body.style,
      'overflow'
    );

    // Override the overflow setter to ensure it doesn't cause hydration issues
    Object.defineProperty(document.body.style, 'overflow', {
      configurable: true,
      get: function() {
        return originalSetOverflow?.get?.call(this);
      },
      set: function(value) {
        setTimeout(() => {
          originalSetOverflow?.set?.call(this, value);
        }, 0);
        return true;
      },
    });

    return () => {
      // Restore original behavior when component unmounts
      if (originalSetOverflow) {
        Object.defineProperty(document.body.style, 'overflow', originalSetOverflow);
      }
    };
  }, []);

  // Component doesn't render anything
  return null;
};

export default ClientHydrationFix; 