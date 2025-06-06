import React from 'react';

import FloatingContactButtons from '../components/FloatingContactButtons';

export default function AllProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <FloatingContactButtons />
    </div>
  );
}