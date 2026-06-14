export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  topic: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Lawyer {
  slug: string;
  name: string;
  role: string;
  /** پروانه وکالت */
  license?: string;
  /** مونوگرام نمایش‌داده‌شده در آواتار */
  initial: string;
  family: string;
  avatar: string;
  specialty: string;
  about: string;
  areas: string[];
  services: string[];
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  cover?: string;
  /** بدنه‌ی مقاله به‌صورت HTML معتبر */
  body: string;
}

export type LeadStatus = "new" | "review" | "scheduled" | "retained" | "closed";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  caseType: string;
  documents: string;
  notes: string;
  score: number; // 0–100
  followUp: string; // YYYY-MM-DD
  status: LeadStatus;
  createdAt: number;
}
