export interface Stat {
  label: string;
  value: string;
  detail: string;
}

export interface Feature {
  title: string;
  description: string;
  tag: string;
}

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  perks: string[];
  highlight: boolean;
}

export interface TimelineItem {
  title: string;
  detail: string;
  period: string;
}

export interface Rule {
  title: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
