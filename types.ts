export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  publishTime: string;
  imageUrl?: string;
}

export enum NewsCategory {
  TOP_STORIES = 'टॉप स्टोरी',
  INDIA = 'भारत',
  WORLD = 'दुनिया',
  SPORTS = 'खेल',
  ENTERTAINMENT = 'मनोरंजन',
  TECH = 'टेक्नोलॉजी',
  BUSINESS = 'बिज़नेस'
}

export interface NavItem {
  label: string;
  path: string;
  category?: NewsCategory;
}