import { motion } from "motion/react";

export function MarketSentiment() {
  // Mock data for Fear & Greed Index
  const value = 68; // Greed
  const label = "Ganância";
  const color = "text-emerald-400";
  const bgColor = "bg-emerald-400";

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-white uppercase tracking-widest">Sentimento do Mercado</h3>
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fear & Greed Index</span>
      </div>

      <div className="relative pt-8 pb-4 flex flex-col items-center">
        {/* Gauge Background */}
        <div className="relative w-48 h-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[12px] border-zinc-800" />
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[12px] border-transparent border-l-red-500 border-t-yellow-500 border-r-emerald-500 opacity-20" />
          
          {/* Gauge Needle */}
          <motion.div 
            initial={{ rotate: -90 }}
            animate={{ rotate: -90 + (value * 1.8) }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 w-1 h-20 bg-white origin-bottom -translate-x-1/2 z-10"
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full" />
          </motion.div>
        </div>

        <div className="mt-4 text-center">
          <span className={`text-4xl font-display font-bold ${color}`}>{value}</span>
          <p className="text-zinc-400 text-sm font-medium mt-1 uppercase tracking-wider">{label}</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 mt-6">
        <div className="h-1.5 rounded-full bg-red-500 opacity-20" title="Medo Extremo" />
        <div className="h-1.5 rounded-full bg-orange-500 opacity-20" title="Medo" />
        <div className="h-1.5 rounded-full bg-yellow-500 opacity-20" title="Neutro" />
        <div className={`h-1.5 rounded-full ${bgColor}`} title="Ganância" />
        <div className="h-1.5 rounded-full bg-emerald-600 opacity-20" title="Ganância Extrema" />
      </div>
      
      <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed text-center">
        O índice analisa o sentimento atual do mercado cripto baseado em volatilidade, volume e redes sociais.
      </p>
    </div>
  );
}
