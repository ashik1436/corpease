
export interface NavItem {
  name: string;
  id: string;
}

export interface ServiceCategory {
  id:string;
  key: string; // To identify which detail component to load
  title: string;
  description: string;
  Icon?: React.ElementType;
  imageUrl?: string; // Optional image for the category card
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  src: string;
  alt: string;
}

export interface GiftItem {
  id: string;
  name: string;
  category: string; 
  imageUrl: string;
  description: string; 
}

export interface OfficeSupplyItem {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
}

// New type for Service Showcase Slider
export interface ShowcaseService {
  id: string;
  title: string;
  shortTitle: string; // For tabs if needed
  content: React.ReactNode; // Can include HTML for lists
  imageUrl: string;
  altText: string;
  cta?: {
    text: string;
    actionType: 'scroll' | 'serviceDetail';
    target: string; // Section ID or service key
  };
}

export interface WhyChooseUsItem {
  id:string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

export interface HeroBenefitItem {
  id: string;
  text: string;
  Icon: React.ElementType;
}