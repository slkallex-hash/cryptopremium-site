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
  const highlightArticles = articles.slice(1, 3);
  const recentArticles = articles.slice(3, 9);
  const educationalSlugs = [
    'o-que-e-carteira-fria-cold-wallet',
    'como-analisar-whitepaper-criptomoedas',
    'entendendo-taxas-gas-ethereum-redes'
  ];
  const educationalArticles = articles.filter(a => educationalSlugs.includes(a.slug));

  return (
    <div className="space-y-12">
      {/* Top Banner Ad */}
      <AdSlot id="home-top-banner" type="banner" className="mb-8 rounded-xl" />

      {/* Bloco 1: Manchete principal + 2 destaques */}
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

        {/* 2 Destaques */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4">
            <h2 className="text-xl font-display font-bold flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
              Em Foco
            </h2>
          </div>
          <div className="flex-1 flex flex-col space-y-6">
            {highlightArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col space-y-3">
                <div className="relative h-40 overflow-hidden rounded-xl">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-snug">
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
        </div>
      </section>

      {/* Live News Feed */}
      <section>
        <RealTimeNewsFeed />
      </section>

      {/* Bloco 2: Últimas notícias (lista limpa) */}
      <section>
        <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 mb-8">
          <h2 className="text-2xl font-display font-bold">Últimas Notícias</h2>
          <Link to="/category/noticias-urgentes" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center transition-colors">
            Ver todas <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="flex flex-col space-y-6">
          {recentArticles.map((article) => (
            <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col md:flex-row gap-6 items-center bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-all hover:bg-zinc-900/50">
              <div className="relative w-full md:w-64 h-40 shrink-0 overflow-hidden rounded-xl">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center text-xs text-zinc-500 font-medium mb-2 uppercase tracking-wider">
                  <span className="text-emerald-500/80">{categories.find(c => c.slug === article.category || c.id === article.category)?.name}</span>
                  <span className="mx-2 text-zinc-700">•</span>
                  <Clock className="w-3.5 h-3.5 mr-1.5" /> {article.readTime}
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-2 line-clamp-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Middle Banner Ad */}
      <AdSlot id="home-middle-banner" type="banner" className="my-12 rounded-xl" />

      {/* Bloco 3: CryptoPremium Play (Videos) */}
      <section className="bg-zinc-950 border border-zinc-800/50 rounded-3xl p-8 md:p-12 my-16 shadow-2xl shadow-black">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              CryptoPremium <span className="text-emerald-400">Play</span>
            </h2>
            <p className="text-zinc-400 text-lg">Assista às nossas análises de mercado, tutoriais práticos e resumos semanais em vídeo.</p>
          </div>
          <Link to="/category/investimentos" className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
            Ver todos os vídeos <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Video 1 */}
          <Link to="/article/o-que-e-carteira-fria-cold-wallet" className="group block">
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
              <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                12:45
              </div>
            </div>
            <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-1">
              O que é Carteira Fria (Cold Wallet) e por que você precisa de uma
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-2">Aprenda a proteger seus ativos digitais de hackers e falências de corretoras. Um guia completo sobre hardware wallets.</p>
          </Link>

          {/* Video 2 */}
          <Link to="/article/como-analisar-whitepaper-criptomoedas" className="group block">
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                08:20
              </div>
            </div>
            <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-1">
              Como analisar o Whitepaper de um projeto cripto antes de investir
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-2">Não invista no escuro. Descubra como ler e interpretar o documento fundamental de qualquer criptomoeda para separar projetos reais de golpes.</p>
          </Link>

          {/* Video 3 */}
          <Link to="/article/entendendo-taxas-gas-ethereum-redes" className="group block">
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                15:10
              </div>
            </div>
            <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-1">
              Entendendo as Taxas de Gas: Como não perder dinheiro em transações
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-2">Desmistificando o custo das transações em blockchain. Aprenda como o Gas funciona, por que ele varia e estratégias para economizar.</p>
          </Link>
        </div>
      </section>

      {/* Bloco 4: Artigos educativos (guias para iniciantes) */}
      <section>
        <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 mb-8">
          <h2 className="text-2xl font-display font-bold text-emerald-400">Guias para Iniciantes</h2>
          <Link to="/category/investimentos" className="text-sm font-medium text-zinc-400 hover:text-white flex items-center transition-colors">
            Ver todos <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationalArticles.map((article) => (
            <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col bg-[#09090b] rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/50 transition-all hover:shadow-xl hover:shadow-emerald-900/20">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-950 bg-emerald-400 rounded-sm mb-2 inline-block">
                    Educacional
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-zinc-400 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs font-medium text-zinc-500">
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {article.readTime}</span>
                  <span className="text-emerald-400 uppercase tracking-wider font-bold group-hover:translate-x-1 transition-transform flex items-center">
                    Ler Guia <ChevronRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
