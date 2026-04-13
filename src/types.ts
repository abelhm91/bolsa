export interface PricePoint {
  time: string;
  price: number;
}

export interface Stock {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  isAlert?: boolean;
  historicalData?: Record<string, PricePoint[]>;
}

export interface Sector {
  name: string;
  performance: number;
  isPositive: boolean;
  icon: string;
}

export interface NewsItem {
  category: string;
  time: string;
  title: string;
}
