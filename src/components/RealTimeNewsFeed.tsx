import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Clock } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  timestamp: Date;
}

const MOCK_NEWS_POOL: Omit<NewsItem, "id" | "timestamp">[] = [
  {
    title: "Bitcoin ultrapassa nova resistência histórica",
    excerpt: "Volume de negociação atinge pico nas últimas 24 horas com forte entrada institucional.",
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Ethereum lança atualização focada em escalabilidade",
    excerpt: "Taxas de gás na rede principal caem 40% após a implementação do novo protocolo.",
    imageUrl: "https://images.unsplash.com/photo-1622736696590-0f2d488d0111?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "SEC aprova novo ETF de criptomoedas",
    excerpt: "Mercado reage positivamente à aprovação do primeiro ETF focado em altcoins de infraestrutura.",
    imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Baleia movimenta US$ 500 milhões em Bitcoin",
    excerpt: "Transferência massiva para carteira fria sinaliza acumulação de longo prazo.",
    imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Solana registra recorde de transações por segundo",
    excerpt: "Rede atinge nova marca histórica impulsionada pelo lançamento de novos projetos DeFi.",
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Banco Central Europeu discute regulação do Euro Digital",
    excerpt: "Novas diretrizes podem acelerar a adoção de moedas digitais emitidas por bancos centrais (CBDCs).",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Novo protocolo DeFi atinge US$ 1 Bilhão em TVL",
    excerpt: "Plataforma de empréstimos descentralizados atrai capital massivo em sua primeira semana.",
    imageUrl: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Mineradores de Bitcoin adaptam operações para IA",
    excerpt: "Empresas de mineração redirecionam poder computacional para treinamento de modelos de linguagem.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
  }
];

export function RealTimeNewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Initial load
    const initialNews = MOCK_NEWS_POOL.slice(0, 4).map((item, index) => ({
      ...item,
      id: `initial-${index}`,
      timestamp: new Date(Date.now() - index * 60000)
    }));
    setNews(initialNews);

    // Simulate real-time updates
    const interval = setInterval(() => {
      const randomNews = MOCK_NEWS_POOL[Math.floor(Math.random() * MOCK_NEWS_POOL.length)];
      const newItem: NewsItem = {
        ...randomNews,
        id: `live-${Date.now()}`,
        timestamp: new Date()
      };

      setNews(prev => {
        // Only add if the title isn't already the very first one to avoid immediate duplicates
        if (prev.length > 0 && prev[0].title === newItem.title) {
          return prev;
        }
        return [newItem, ...prev].slice(0, 4); // Keep max 4 items
      });
    }, 12000); // Update every 12 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-5 mb-8">
        <h2 className="text-2xl font-display font-bold flex items-center">
          <Activity className="w-6 h-6 mr-3 text-emerald-400 animate-pulse" />
          Plantão Crypto em Tempo Real
        </h2>
        <div className="flex items-center space-x-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Ao Vivo</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {news.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group flex flex-col bg-black/40 rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500/30 transition-colors"
            >
              <div className="relative h-36 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center text-[10px] text-zinc-300 font-medium uppercase tracking-wider bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                  <Clock className="w-3 h-3 mr-1.5 text-emerald-400" />
                  {item.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
