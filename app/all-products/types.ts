export interface Specification {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  mainImage: string;
  images?: string[];
  specifications: Specification[];
  shortDescription: string;
  longDescription?: string;
  price?: number;
  showPrice: boolean;
  discount?: string;
  highlights?: string[];
  detailedSpecs?: Record<string, string>;
  includedComponents?: string[];
} 