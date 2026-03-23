import { useState, useEffect, useRef } from "react";
import { Search, X, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { motion, AnimatePresence } from "motion/react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filteredArticles = query.trim() === "" 
    ? [] 
    : articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-zinc-800 flex items-center">
            <Search className="w-5 h-5 text-zinc-500 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar notícias, guias ou análises..."
              className="flex-1 bg-transparent border-none text-white placeholder-zinc-500 focus:ring-0 text-lg"
            />
            <button onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-4">
            {query.trim() === "" ? (
              <div className="py-8 text-center">
                <p className="text-zinc-500">Digite algo para começar a busca...</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {categories.slice(0, 4).map(cat => (
                    <Link 
                      key={cat.id} 
                      to={`/category/${cat.slug}`}
                      onClick={onClose}
                      className="px-3 py-1.5 bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-400 rounded-full text-xs font-medium transition-all"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : filteredArticles.length > 0 ? (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 px-2">Resultados</h3>
                {filteredArticles.map(article => (
                  <Link
                    key={article.id}
                    to={`/article/${article.slug}`}
                    onClick={onClose}
                    className="group flex gap-4 p-2 rounded-xl hover:bg-zinc-800 transition-all"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img src={article.imageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {article.title}
                      </h4>
                      <p className="text-zinc-400 text-sm line-clamp-2 mt-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center mt-2 text-[10px] text-zinc-500 font-medium uppercase">
                        <Clock className="w-3 h-3 mr-1" /> {article.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-zinc-500">Nenhum resultado encontrado para "{query}"</p>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            <span>CryptoPremium Search v1.0</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700 text-zinc-400">ESC</kbd> para fechar</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
