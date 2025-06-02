import { Product } from '../types';

export interface ProductGroup {
  key: string;
  series: string;
  ram: string;
  graphics: string;
  variants: Product[];
}

// Group products by series, RAM and graphics
export function groupProductsBySpecs(productsArr: Product[]): ProductGroup[] {
  const groups: Record<string, ProductGroup> = {};
  
  productsArr.forEach(product => {
    // Extract series from product name
    // Look for patterns like "Vivobook 15", "Vivobook Go 14", "ROG Strix G16"
    let series = "";
    const nameParts = product.name.split(' ');
    
    // Try to find series identifier (usually contains a number like 14, 15, 16)
    for (let i = 0; i < nameParts.length; i++) {
      if (/\d+/.test(nameParts[i])) {
        // Include the word before the number (if exists) and the number
        const seriesStart = Math.max(0, i-1);
        series = nameParts.slice(seriesStart, i+1).join(' ');
        break;
      }
    }
    
    // If no series found, use first two words of product name
    if (!series && nameParts.length >= 2) {
      series = nameParts.slice(0, 2).join(' ');
    }
    
    // Extract RAM and graphics card specs
    // Assuming RAM is usually the 2nd spec and graphics is the 5th
    const ram = product.specifications[1] ? product.specifications[1].value : "Unknown RAM";
    const graphics = product.specifications[4] ? product.specifications[4].value : "Unknown Graphics";
    
    // Create a key based on series, RAM and graphics
    const groupKey = `${series}-${ram}-${graphics}`;
    
    // Initialize group if it doesn't exist
    if (!groups[groupKey]) {
      groups[groupKey] = { 
        key: groupKey,
        series: series,
        ram: ram,
        graphics: graphics,
        variants: []
      };
    }
    
    // Add product to group
    groups[groupKey].variants.push(product);
  });
  
  return Object.values(groups);
} 