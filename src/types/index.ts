// Core Types
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
}

export interface Service {
  title: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavLink {
  readonly path: string;
  readonly label: string;
}

export interface PhoneNumbers {
  primary: string;
  secondary: string;
  formatted: {
    primary: string;
    secondary: string;
  };
}

export interface CompanyLocation {
  address: string;
  established: string;
}

export interface SocialMedia {
  instagram: string;
  facebook: string;
}

export interface BusinessDivision {
  name: string;
  tagline: string;
  established: string;
  focus?: string[];
  goal?: string;
}

// Component Props
export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  bgImageSrc?: string;
}

export interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  bgColor: string;
  features?: string[];
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

// SEO Types
export interface SEOMetaTags {
  title: string;
  description: string;
  keywords: string;
}

// Error Boundary Types
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
