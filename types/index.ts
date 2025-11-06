// Global types for MaxFood AB project

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: "beverage" | "snack" | "dairy" | "other";
  image?: string;
  featured?: boolean;
  sku?: string;
  format?: string;
  weight?: string;
  ingredients?: string;
  status?: "available" | "unavailable";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  certifications: string[];
}

export interface TranslationKeys {
  navigation: Record<string, string>;
  home: Record<string, string>;
  products: Record<string, string>;
  contact: Record<string, string>;
  footer: Record<string, string>;
  [key: string]: Record<string, string>;
}
