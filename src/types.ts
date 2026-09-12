export type PlatformCategory =
  | 'all'
  | 'wordpress'
  | 'shopify'
  | 'wix'
  | 'wix-studio'
  | 'webflow'
  | 'squarespace';

export interface Project {
  id: string;
  category: PlatformCategory;
  platform: string;
  title: string;
  buildType: 'Concept Build' | 'Practice Project';
  focusArea: string;
  description: string;
  deliverables: string[];
  features: string[];
  tags: string[];
  demoUrl?: string;
  accentColor?: string;
  image: string;
  mockupType: 'desktop' | 'mobile' | 'dual';
}

export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  details: string;
  deliverables: string[];
  turnaround: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarBg: string;
  rating: number;
  projectTag: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}
