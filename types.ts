export interface Machine {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange: string;
  features: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
}