import express from "express";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const server = createServer(app);
  const wss = new WebSocketServer({ server });
  const PORT = 3000;

  // Mock stock data for simulation
  const stocks = [
    { symbol: 'SAN.MC', price: 3.8450 },
    { symbol: 'ITX.MC', price: 45.1200 },
    { symbol: 'TEF.MC', price: 4.0210 },
    { symbol: 'IBE.MC', price: 11.9450 },
    { symbol: 'BBVA.MC', price: 9.5220 },
    { symbol: 'REP.MC', price: 15.2450 },
    { symbol: 'AMS.MC', price: 62.8800 },
    { symbol: 'GRF.MC', price: 8.4210 },
  ];

  wss.on("connection", (ws) => {
    console.log("Client connected to WebSocket");
    
    // Send initial state
    ws.send(JSON.stringify({ type: 'init', data: stocks }));

    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        // Pick a random stock to update
        const stockIndex = Math.floor(Math.random() * stocks.length);
        const stock = stocks[stockIndex];
        
        // Simulate a small price change
        const change = (Math.random() - 0.5) * 0.01;
        stock.price = parseFloat((stock.price + change).toFixed(4));
        
        ws.send(JSON.stringify({ 
          type: 'update', 
          symbol: stock.symbol, 
          price: stock.price.toFixed(4).replace('.', ','),
          change: (change >= 0 ? '+' : '') + change.toFixed(4).replace('.', ','),
          changePercent: ((change / (stock.price - change)) * 100).toFixed(2) + '%'
        }));
      }
    }, 2000);

    ws.on("close", () => {
      clearInterval(interval);
      console.log("Client disconnected");
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
