import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { AdSlot } from "@/components/AdSlot";
import { RealTimeNewsFeed } from "@/components/RealTimeNewsFeed";
import { Clock, TrendingUp, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "CryptoPremium | Notícias sobre Criptomoedas e Economia Global";
  }, []);

  const featuredArticle = articles[0];
  const trendingArticles = articles.filter(a => a.trending).slice(0, 4);
  const recentArticles = articles.slice(1);

  return (
    <div className="space-y-12">
      {/* Top Banner Ad */}
      <AdSlot id="home-top-banner" type="banner" className="mb-8 rounded-xl" />

      {/* Featured Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Highlight */}
        <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
          <Link to={`/article/${featuredArticle.slug}`} className="block h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent z-10" />
            <img 
              src={featuredArticle.imageUrl} 
              alt={featuredArticle.title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full">
              <div className="flex items-center space-x-3 mb-5">
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-zinc-950 bg-emerald-400 rounded-sm">
                  Destaque
                </span>
                <span className="text-zinc-300 text-sm flex items-center font-medium">
                  <Clock className="w-4 h-4 mr-1.5" /> {featuredArticle.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-[1.1] group-hover:text-emerald-400 transition-colors">
                {featuredArticle.title}
              </h1>
              <p className="text-zinc-400 text-base md:text-lg line-clamp-2 max-w-3xl font-medium">
                {featuredArticle.excerpt}
              </p>
            </div>
          </Link>
        </div>

        {/* Trending Sidebar */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4">
            <h2 className="text-xl font-display font-bold flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
              Em Alta
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-between space-y-6">
            {trendingArticles.map((article, index) => (
              <Link key={article.id} to={`/article/${article.slug}`} className="group flex space-x-5 items-start">
                <span className="text-5xl font-display font-bold text-zinc-800 group-hover:text-emerald-500/30 transition-colors leading-none">
                  0{index + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-xs text-zinc-500 font-medium uppercase tracking-wider">
                    <span className="text-emerald-500/80">{categories.find(c => c.slug === article.category || c.id === article.category)?.name}</span>
                    <span className="mx-2 text-zinc-700">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Sidebar Square Ad */}
          <AdSlot id="home-sidebar-square" type="square" className="mt-auto rounded-xl" />
        </div>
      </section>

      {/* Live News Feed */}
      <section>
        <RealTimeNewsFeed />
      </section>

      {/* Middle Banner Ad */}
      <AdSlot id="home-middle-banner" type="banner" className="my-12 rounded-xl" />

      {/* Recent News Section */}
      <section>
        <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 mb-8">
          <h2 className="text-2xl font-display font-bold">Últimas Notícias</h2>
          <Link to="/category/noticias-urgentes" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center transition-colors">
            Ver todas <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col bg-[#09090b] rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-black/50">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-black/60 backdrop-blur-md rounded-sm border border-white/10">
                    {categories.find(c => c.slug === article.category || c.id === article.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 mr-1.5" /> {article.readTime}
                  <span className="mx-2 text-zinc-800">•</span>
                  {new Date(article.date).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })}
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-3 line-clamp-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center text-emerald-400 text-sm font-bold uppercase tracking-wider">
                  Ler artigo <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
