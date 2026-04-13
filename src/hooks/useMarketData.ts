import { useState, useEffect, useRef } from 'react';
import { Stock } from '../types';
import { MAJOR_INSTRUMENTS } from '../constants';

export function useMarketData() {
  const [stocks, setStocks] = useState<Stock[]>(MAJOR_INSTRUMENTS);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host;
    const socket = new WebSocket(`${protocol}//${host}`);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('Connected to Market Data Stream');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      
      if (message.type === 'update') {
        setStocks((prevStocks) => 
          prevStocks.map((stock) => {
            if (stock.symbol === message.symbol) {
              const isPositive = !message.change.startsWith('-');
              return {
                ...stock,
                price: message.price,
                change: message.change,
                changePercent: message.changePercent,
                isPositive,
              };
            }
            return stock;
          })
        );
      }
    };

    socket.onclose = () => {
      console.log('Disconnected from Market Data Stream');
    };

    return () => {
      socket.close();
    };
  }, []);

  return stocks;
}
