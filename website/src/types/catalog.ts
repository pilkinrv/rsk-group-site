export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  specs: ProductSpec[];
  image?: string;
  bimUrl?: string;
  iesUrl?: string;
  referenceProjects?: { name: string; url?: string }[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  productCount: number;
  image?: string;
  description?: string;
}
