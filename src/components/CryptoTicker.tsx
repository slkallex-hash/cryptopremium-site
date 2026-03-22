import { TrendingUp, TrendingDown } from "lucide-react";

const mockPrices = [
  { symbol: "BTC", price: "$64,230.50", change: "+2.4%", up: true },
  { symbol: "ETH", price: "$3,450.20", change: "+1.8%", up: true },
  { symbol: "SOL", price: "$145.80", change: "-0.5%", up: false },
  { symbol: "BNB", price: "$580.10", change: "+0.2%", up: true },
  { symbol: "XRP", price: "$0.62", change: "-1.2%", up: false },
  { symbol: "ADA", price: "$0.45", change: "+3.1%", up: true },
  { symbol: "DOGE", price: "$0.12", change: "+5.4%", up: true },
];

export function CryptoTicker() {
  return (
    <div className="w-full bg-zinc-950 border-b border-zinc-800 overflow-hidden py-2 text-xs font-mono whitespace-nowrap">
      <div className="flex animate-marquee">
        {/* Double the items for seamless loop */}
        {[...mockPrices, ...mockPrices].map((coin, i) => (
          <div key={i} className="flex items-center space-x-2 mx-6 text-zinc-300">
            <span className="font-bold text-white">{coin.symbol}</span>
            <span>{coin.price}</span>
            <span
              className={`flex items-center ${
                coin.up ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {coin.up ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
