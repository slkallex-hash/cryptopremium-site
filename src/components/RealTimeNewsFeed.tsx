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
    title: "OpenAI anuncia novo modelo de linguagem multimodal",
    excerpt: "O novo modelo promete capacidades sem precedentes em processamento de vídeo e áudio em tempo real.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Apple Vision Pro recebe atualização com novos recursos",
    excerpt: "A nova versão do visionOS traz melhorias significativas em produtividade e novos ambientes imersivos.",
    imageUrl: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "SpaceX lança mais 60 satélites Starlink com sucesso",
    excerpt: "A constelação de satélites continua crescendo para oferecer internet de alta velocidade globalmente.",
    imageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Google DeepMind resolve problema complexo de biologia",
    excerpt: "IA AlphaFold atinge novo marco na predição de estruturas proteicas, acelerando a medicina.",
    imageUrl: "https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "NVIDIA atinge valor de mercado recorde impulsionada por IA",
    excerpt: "A demanda por chips de processamento de IA continua superando todas as expectativas do mercado.",
    imageUrl: "https://images.unsplash.com/photo-1591405351990-4726e33df58d?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Microsoft integra Copilot em todos os seus serviços",
    excerpt: "A assistente de IA agora está presente desde o Windows até o pacote Office completo.",
    imageUrl: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Tesla anuncia avanços no software Full Self-Driving",
    excerpt: "A nova versão v12 utiliza redes neurais de ponta a ponta para uma condução mais humana.",
    imageUrl: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Criptomoedas: Bitcoin atinge nova máxima histórica",
    excerpt: "A maior criptomoeda do mundo rompe barreiras psicológicas com forte volume comprador.",
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=400"
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
          <Activity className="w-6 h-6 mr-3 text-blue-400 animate-pulse" />
          Plantão TechFront em Tempo Real
        </h2>
        <div className="flex items-center space-x-2 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Ao Vivo</span>
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
