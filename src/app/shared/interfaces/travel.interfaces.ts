export interface Package {
  id: number;
  title: string;
  description: string;
  image: string;
  days: string;
  regime: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactInfo {
  type: 'phone' | 'email' | 'location';
  icon: string;
  title: string;
  description: string;
}
