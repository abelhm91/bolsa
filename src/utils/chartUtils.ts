import { PricePoint } from '../types';

export function generateMockData(basePrice: number, points: number, volatility: number): PricePoint[] {
  const data: PricePoint[] = [];
  let currentPrice = basePrice;
  const now = new Date();

  for (let i = points; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 15 * 60 * 1000); // 15 min intervals
    const change = (Math.random() - 0.5) * volatility;
    currentPrice += change;
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: parseFloat(currentPrice.toFixed(4)),
    });
  }
  return data;
}

export const TIMEFRAMES = ['1D', '5D', '1M', '6M', '1Y'];
