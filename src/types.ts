export interface PlanItem {
  id: string;
  name: string;
  camerasCount: number;
  specs: string;
  items: string[];
  priceMonthly: number;
  highlighted?: boolean;
  badge?: string;
  buttonLabel?: string;
  whatsappMessage: string;
  image?: string;
}

export interface ProblemSolution {
  id: string;
  problem: string;
  solution: string;
}

export interface ComparisonItem {
  id: string;
  criterion: string;
  buyingTitle: string;
  buyingDescription: string;
  rentingTitle: string;
  rentingDescription: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  description: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  category?: string;
  question: string;
  answer: string;
}

export interface ServiceMediaItem {
  id: string;
  type: 'image' | 'video';
  slotNumber: number; // 1, 2, 3 for images; 1, 2 for videos
  title: string;
  subtitle: string;
  description: string;
  mediaUrl: string;
  posterUrl?: string;
  badge: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ReviewGalleryImage {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
}

