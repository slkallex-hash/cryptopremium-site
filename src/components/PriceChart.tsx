import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown } from "lucide-react";

const data = [
  { name: '00:00', price: 62000 },
  { name: '04:00', price: 63500 },
  { name: '08:00', price: 63000 },
  { name: '12:00', price: 65200 },
  { name: '16:00', price: 64800 },
  { name: '20:00', price: 66500 },
  { name: '23:59', price: 67200 },
];

export function PriceChart() {
  const currentPrice = 67245.80;
  const change = 4.25;
  const isPositive = change >= 0;

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Bitcoin / USDT</span>
            <span className={`flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
              {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
              {isPositive ? '+' : ''}{change}%
            </span>
          </div>
          <h3 className="text-3xl font-display font-bold text-white tracking-tight">
            ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </h3>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Últimas 24h</span>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#52525b" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              dy={10}
            />
            <YAxis 
              hide={true}
              domain={['dataMin - 1000', 'dataMax + 1000']}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', fontSize: '12px' }}
              itemStyle={{ color: '#10b981' }}
              labelStyle={{ color: '#71717a' }}
              cursor={{ stroke: '#10b981', strokeWidth: 1 }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#10b981" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex items-center justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <span>Vol: 24.5B</span>
          <span>Cap: 1.3T</span>
        </div>
        <button className="text-emerald-400 hover:text-emerald-300 transition-colors">Ver Detalhes</button>
      </div>
    </div>
  );
}
