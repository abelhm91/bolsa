import { Stock, Sector, NewsItem } from './types';

export const MAJOR_INSTRUMENTS: Stock[] = [
  { name: 'Santander', symbol: 'SAN.MC', price: '3,8450', change: '+0,0420', changePercent: '+1,10%', isPositive: true },
  { name: 'Inditex', symbol: 'ITX.MC', price: '45,1200', change: '-0,1400', changePercent: '-0,31%', isPositive: false },
  { name: 'Telefónica', symbol: 'TEF.MC', price: '4,0210', change: '+0,0110', changePercent: '+0,27%', isPositive: true },
  { name: 'Iberdrola', symbol: 'IBE.MC', price: '11,9450', change: '+0,1250', changePercent: '+1,06%', isPositive: true },
  { name: 'BBVA', symbol: 'BBVA.MC', price: '9,5220', change: '-0,0280', changePercent: '-0,29%', isPositive: false },
  { name: 'Repsol', symbol: 'REP.MC', price: '15,2450', change: '+0,3450', changePercent: '+2,31%', isPositive: true },
  { name: 'Amadeus', symbol: 'AMS.MC', price: '62,8800', change: '0,0000', changePercent: '0,00%', isPositive: true },
  { name: 'Grifols', symbol: 'GRF.MC', price: '8,4210', change: '-0,8540', changePercent: '-9,21%', isPositive: false, isAlert: true },
];

export const SECTOR_PERFORMANCE: Sector[] = [
  { name: 'Banking', performance: 2.15, isPositive: true, icon: 'Landmark' },
  { name: 'Energy', performance: -0.82, isPositive: false, icon: 'Bolt' },
  { name: 'Retail', performance: -0.11, isPositive: false, icon: 'ShoppingBag' },
];

export const MARKET_INSIGHTS: NewsItem[] = [
  { category: 'Economy', time: '15m ago', title: 'ECB signals potential rate cut by end of Q2, boosting banking sector sentiment.' },
  { category: 'Corporate', time: '42m ago', title: 'Inditex reports record quarterly earnings, outlook remains cautious for 2024.' },
  { category: 'Regulatory', time: '1h ago', title: 'CNMV investigating unusual trading volume in Grifols derivatives market.' },
];
