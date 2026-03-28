import { Zap, TrendingUp, Clock, ChevronRight, ArrowRight, Activity, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  // Get IA articles for "IA em alta"
  const iaArticles = articles.filter(a => a.category === "ia").slice(0, 4);

  const timeMarkers = ["Agora", "5 min", "12 min", "25 min", "40 min", "1h"];

  return (
    <div className="w-full bg-black">
      <Helmet>
        <title>TechFront | Notícias de Tecnologia, IA e Criptomoedas</title>
        <meta name="description" content="Acompanhe as últimas notícias sobre tecnologia, inteligência artificial, blockchain e o mercado de criptomoedas no TechFront. Seu portal global de inovação." />
        <meta property="og:title" content="TechFront | Notícias de Tecnologia, IA e Criptomoedas" />
        <meta property="og:description" content="Acompanhe as últimas notícias sobre tecnologia, inteligência artificial, blockchain e o mercado de criptomoedas no TechFront." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>

      {/* HERO PORTAL SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Featured Article */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <motion.div 
              className="lg:col-span-8 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link to={`/article/${mainFeatured.slug}`} className="block relative aspect-[21/9] lg:aspect-[16/9] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                <img 
                  src={mainFeatured.imageUrl} 
                  alt={mainFeatured.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-[0.2em]">
                      {mainFeatured.category}
                    </span>
                    <span className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                      <Clock className="w-3 h-3" /> {mainFeatured.readTime}
                    </span>
                    <span className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                      Publicado Agora
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] max-w-5xl group-hover:text-blue-400 transition-colors">
                    {mainFeatured.title}
                  </h1>
                  <p className="text-zinc-300 text-lg md:text-2xl mb-10 max-w-3xl line-clamp-2 font-light leading-relaxed">
                    {mainFeatured.excerpt}
                  </p>
                  <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-blue-500 hover:text-white transition-all flex items-center gap-3 shadow-xl hover:shadow-blue-500/40">
                    Ler agora <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </Link>
            </motion.div>

            {/* Sidebar Featured - Tendências */}
            <div className="lg:col-span-4 space-y-8 hidden lg:block">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-500" /> Tendências
                </h3>
              </div>
              {secondaryFeatured.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                >
                  <Link to={`/article/${article.slug}`} className="group flex gap-6 p-5 rounded-3xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10">
                    <div className="w-28 h-28 shrink-0 rounded-2xl overflow-hidden border border-white/10 relative">
                      <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2 block">{article.category}</span>
                      <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{timeMarkers[i+1]}</span>
                        <span className="text-[10px] text-zinc-700">•</span>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hero Grid - Destaques Rápidos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {heroGridArticles.slice(0, 4).map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
              >
                <Link to={`/article/${article.slug}`} className="group block h-full p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-zinc-900/40 backdrop-blur-sm border border-white/5 hover:border-blue-500/40 hover:bg-zinc-900 transition-all shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-5 gap-2">
                    <span className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{article.category}</span>
                    <span className="text-[9px] md:text-[10px] font-bold text-blue-500 uppercase tracking-widest flex items-center gap-1.5 md:gap-2">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></span>
                      {timeMarkers[i+2]}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-3 leading-tight mb-4 md:mb-6">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    Ler agora <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IA EM ALTA - NOVO SECTION */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                IA em Alta
              </h2>
            </div>
            <Link to="/category/ia" className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em] hover:text-blue-400 transition-colors flex items-center gap-2">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {iaArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/article/${article.slug}`} className="group block relative aspect-[4/5] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10">
                  <img src={article.imageUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                    <span className="text-[8px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 md:mb-3 block">Inteligência Artificial</span>
                    <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4 line-clamp-3 leading-tight group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-widest">
                      Ler agora <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TENDÊNCIAS - NOVO SECTION */}
      <section className="py-24 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Tendências da Semana
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {featuredArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/article/${article.slug}`} className="group block relative h-40 md:h-64 rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10">
                  <img src={article.imageUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                    <span className="text-[8px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1 md:mb-2 block">{article.category}</span>
                    <h3 className="text-xs md:text-lg font-bold text-white mb-1 md:mb-2 line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DE NOTÍCIAS RECENTES */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16 text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Últimas Notícias
              </h2>
              <p className="text-zinc-400 text-xl font-light">
                O que há de mais novo no universo da tecnologia.
              </p>
            </div>
            <Link to="/category/todas" className="hidden sm:flex items-center text-blue-500 hover:text-blue-400 transition-colors font-bold uppercase tracking-widest text-sm">
              Ver todas <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 text-left">
            {latestArticles.map((article, i) => (
              <motion.article 
                key={article.id}
                className="group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/article/${article.slug}`} className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/5 mb-4 md:mb-6">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 md:top-6 md:left-6">
                    <span className="px-2 md:px-4 py-1 md:py-1.5 bg-black/80 backdrop-blur-xl text-blue-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                      {article.category}
                    </span>
                  </div>
                </Link>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-sm md:text-2xl font-bold text-white mb-2 md:mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">
                    <Link to={`/article/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="hidden md:block text-zinc-400 text-base mb-6 line-clamp-2 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 md:pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 md:gap-4">
                      <p className="text-[8px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-1 md:gap-2">
                        <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" /> {article.readTime}
                      </p>
                    </div>
                    <Link to={`/article/${article.slug}`} className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-widest hover:text-blue-400 flex items-center group/btn">
                      Ler agora <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover/btn:translate-x-2 transition-transform" />
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
              <h2 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                Mais Lidas
              </h2>
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {mostRead.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Link to={`/article/${item.slug}`} className="flex flex-col sm:flex-row gap-3 md:gap-6 items-start group p-3 md:p-4 rounded-2xl md:rounded-3xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                      <div className="text-3xl md:text-5xl font-display font-bold text-zinc-800 group-hover:text-blue-500/20 transition-colors shrink-0 leading-none">
                        {i + 1}
                      </div>
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-20 md:h-20 shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10">
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                            <span className="text-[8px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest">{item.category}</span>
                            <span className="text-[8px] md:text-[10px] text-zinc-600 font-bold uppercase tracking-widest">• {item.readTime}</span>
                          </div>
                          <h3 className="text-[10px] md:text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
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
