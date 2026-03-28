import { Zap, TrendingUp, Clock, ChevronRight, ArrowRight, Activity, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { RealTimeNewsFeed } from "../components/RealTimeNewsFeed";
import { motion } from "motion/react";
import { useRef } from "react";

export function Home() {
  const realTimeRef = useRef<HTMLDivElement>(null);
  
  const scrollToRealTime = () => {
    realTimeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get featured articles (trending)
  const featuredArticles = articles.filter(a => a.trending).slice(0, 3);
  const mainFeatured = featuredArticles[0] || articles[0];
  const secondaryFeatured = featuredArticles.slice(1, 3);

  // Get latest articles for the hero grid
  const heroGridArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(1, 7);

  // Get latest articles for the general grid
  const latestArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 6);

  // Get "Most Read" (using trending articles)
  const mostRead = articles.filter(a => a.trending).slice(0, 6);

  const timeMarkers = ["Agora", "5 min", "12 min", "25 min", "40 min", "1h"];

  return (
    <div className="w-full bg-black">
      {/* HERO PORTAL SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Featured Article */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <motion.div 
              className="lg:col-span-8 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to={`/article/${mainFeatured.slug}`} className="block relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src={mainFeatured.imageUrl} 
                  alt={mainFeatured.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {mainFeatured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      Agora
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-4xl group-hover:text-blue-400 transition-colors">
                    {mainFeatured.title}
                  </h1>
                  <p className="text-zinc-300 text-lg md:text-xl mb-8 max-w-2xl line-clamp-2 hidden md:block">
                    {mainFeatured.excerpt}
                  </p>
                  <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2">
                    Ler agora <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </Link>
            </motion.div>

            {/* Sidebar Featured (Optional or just grid) */}
            <div className="lg:col-span-4 space-y-6 hidden lg:block">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" /> Tendências
                </h3>
              </div>
              {secondaryFeatured.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                >
                  <Link to={`/article/${article.slug}`} className="group flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden border border-white/10">
                      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1 block">{article.category}</span>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h4>
                      <span className="text-[10px] text-zinc-500 mt-2 block">{timeMarkers[i+1]}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hero Grid - Smaller News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroGridArticles.slice(0, 4).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
              >
                <Link to={`/article/${article.slug}`} className="group block h-full p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{article.category}</span>
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {timeMarkers[i+2]}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-3 leading-tight mb-4">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-xs text-zinc-500 font-medium">
                    Ler notícia <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DE NOTÍCIAS RECENTES */}
      <section className="py-16 lg:py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Últimas Notícias
              </h2>
              <p className="text-zinc-400 text-lg">
                Fique atualizado com os últimos acontecimentos.
              </p>
            </div>
            <Link to="/category/todas" className="hidden sm:flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Ver todas <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {latestArticles.map((article, i) => (
              <motion.article 
                key={article.id}
                className="glass rounded-3xl border border-white/5 overflow-hidden hover:bg-white/5 transition-colors group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/article/${article.slug}`} className="relative w-full h-48 overflow-hidden block">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-white/10">
                      {article.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      <Link to={`/article/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <p className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {new Date(article.date).toLocaleDateString('pt-BR')}
                    </p>
                    <Link to={`/article/${article.slug}`} className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center">
                      Ler mais <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* REAL TIME FEED SECTION */}
      <section ref={realTimeRef} className="py-16 lg:py-24 border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RealTimeNewsFeed />
        </div>
      </section>

      {/* MAIS LIDAS & NEWSLETTER */}
      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
            
            {/* Mais Lidas */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" /> Mais Lidas da Semana
              </h2>
              <div className="space-y-6">
                {mostRead.map((item, i) => (
                  <Link key={item.id} to={`/article/${item.slug}`} className="flex gap-6 items-center group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="text-4xl font-display font-bold text-zinc-800 group-hover:text-blue-500/30 transition-colors">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{item.category}</span>
                        <span className="text-xs text-zinc-600">• {item.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar / Ads / Newsletter */}
            <div className="space-y-8">
              {/* Ad Slot */}
              <div className="w-full h-[250px] bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center flex-col text-zinc-600">
                <span className="text-xs uppercase tracking-widest mb-2">Publicidade</span>
                <div className="w-3/4 h-3/4 border-2 border-dashed border-zinc-700 rounded-xl flex items-center justify-center">
                  Ad Space (300x250)
                </div>
              </div>

              {/* Mini Newsletter */}
              <div className="glass p-8 rounded-3xl border border-white/5 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TechFront Diário</h3>
                <p className="text-sm text-zinc-400 mb-6">Receba as principais notícias do dia no seu e-mail, todas as manhãs.</p>
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Inscrito!'); }}>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    required
                    className="w-full bg-black border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500/50 text-sm"
                  />
                  <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors text-sm"
                  >
                    Assinar Grátis
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
