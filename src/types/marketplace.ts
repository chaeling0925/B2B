export type CategoryId = 
  | 'all'
  | 'ai_video'
  | 'ai_image'
  | 'ai_art'
  | 'ai_branding'
  | 'ai_audio';

export interface ServicePackage {
  id: 'standard' | 'deluxe' | 'premium';
  name: string;
  price: number;
  priceFormatted: string;
  summary: string;
  deliveryDays: number;
  revisionCount: number | '무제한';
  conceptsCount: number;
  features: string[];
  includedItems: {
    name: string;
    included: boolean;
  }[];
}

export interface Creator {
  id: string;
  name: string;
  agencyName: string;
  avatar: string;
  grade: 'Prime AI Master' | 'Top Prompt Director' | 'Enterprise Verified';
  aiSpecialty: string;
  primaryTools: string[];
  responseTime: string;
  careerYears: number;
  completedProjects: number;
  taxInvoiceAvailable: boolean;
  ndaAvailable: boolean;
  satisfactionRate: number;
  introduction: string;
}

export interface Review {
  id: string;
  author: string;
  company: string;
  rating: number;
  date: string;
  servicePackage: string;
  comment: string;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryId;
  categoryLabel: string;
  isPrime: boolean;
  badge?: string;
  aiTools: string[];
  creator: Creator;
  heroImage: string;
  galleryImages: string[];
  startingPrice: number;
  rating: number;
  reviewCount: number;
  bookmarkCount: number;
  summaryReview: string;
  turnaroundTime: string;
  resolution: string;
  commercialLicense: boolean;
  packages: {
    standard: ServicePackage;
    deluxe: ServicePackage;
    premium: ServicePackage;
  };
  workProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ClientProject {
  id: string;
  projectCode: string;
  title: string;
  serviceId: string;
  creatorName: string;
  packageType: 'STANDARD' | 'DELUXE' | 'PREMIUM';
  totalAmount: number;
  status: '진행중' | '시안검토' | '수정중' | '완료';
  progressPercent: number;
  startDate: string;
  dueDate: string;
  currentMilestone: string;
  taxInvoiceStatus: '발행완료' | '발행대기';
  contractNumber: string;
}

export interface RfpSubmission {
  id: string;
  clientCompany: string;
  contactPerson: string;
  category: string;
  title: string;
  budgetRange: string;
  targetDueDate: string;
  description: string;
  preferredAiTools?: string[];
  ndaRequired: boolean;
  taxInvoiceRequired: boolean;
  createdAt: string;
}
