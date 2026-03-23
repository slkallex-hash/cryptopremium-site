import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { AdSlot } from "@/components/AdSlot";
import { RealTimeNewsFeed } from "@/components/RealTimeNewsFeed";
import { Clock, TrendingUp, ChevronRight, Zap, Mail, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { PriceChart } from "@/components/PriceChart";
import { MarketSentiment } from "@/components/MarketSentiment";

export function Home() {
  useEffect(() => {
    document.title = "CryptoPremium | Notícias sobre Criptomoedas e Economia Global";
  }, []);

  const featuredArticle = articles[0];
  const highlightArticles = articles.slice(1, 4);
  const recentArticles = articles.slice(4, 10);
  const educationalSlugs = [
    'o-que-e-carteira-fria-cold-wallet',
    'como-analisar-whitepaper-criptomoedas',
    'entendendo-taxas-gas-ethereum-redes'
  ];
  const educationalArticles = articles.filter(a => educationalSlugs.includes(a.slug));

  return (
    <div className="space-y-16">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "CryptoPremium",
          "url": window.location.origin,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${window.location.origin}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Plantão Crypto (Breaking News) */}
      <section className="bg-emerald-500/10 border-y border-emerald-500/20 py-3 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="flex items-center text-emerald-400 font-bold text-xs uppercase tracking-widest mr-4 shrink-0">
            <Zap className="w-4 h-4 mr-1.5 fill-emerald-400" /> Plantão Crypto:
          </span>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee-slow text-sm text-zinc-300 font-medium">
              <span className="mx-4">• SEC aprova novo ETF de Ethereum com foco em staking institucional</span>
              <span className="mx-4">• Volume de transações na rede Solana atinge recorde histórico em 24h</span>
              <span className="mx-4">• MicroStrategy anuncia compra adicional de 12.000 Bitcoins</span>
              <span className="mx-4">• Banco Central do Brasil inicia testes da segunda fase do Drex</span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PriceChart />
        </div>
        <div className="lg:col-span-1">
          <MarketSentiment />
        </div>
      </section>

      {/* Destaques (3-5 cards grandes) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Highlight */}
        <div className="lg:col-span-8 relative group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800/50 shadow-2xl">
          <Link to={`/article/${featuredArticle.slug}`} className="block h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent z-10" />
            <img 
              src={featuredArticle.imageUrl} 
              alt={featuredArticle.title}
              className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-950 bg-emerald-400 rounded-full">
                  Destaque Principal
                </span>
                <span className="text-zinc-300 text-sm flex items-center font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <Clock className="w-4 h-4 mr-1.5 text-emerald-400" /> {featuredArticle.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.1] group-hover:text-emerald-400 transition-colors tracking-tight">
                {featuredArticle.title}
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl line-clamp-2 max-w-3xl font-medium leading-relaxed opacity-90">
                {featuredArticle.excerpt}
              </p>
            </div>
          </Link>
        </div>

        {/* Secondary Highlights */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-8">
          {highlightArticles.map((article) => (
            <Link key={article.id} to={`/article/${article.slug}`} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent z-10" />
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  {categories.find(c => c.slug === article.category || c.id === article.category)?.name}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Últimas Notícias (Grid com Cards) */}
      <section>
        <div className="flex items-center justify-between border-b border-zinc-800/50 pb-6 mb-10">
          <h2 className="text-3xl font-display font-bold text-white">Últimas Notícias</h2>
          <Link to="/category/noticias-urgentes" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center transition-colors uppercase tracking-widest">
            Ver tudo <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col bg-zinc-900/20 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/50 transition-all hover:bg-zinc-900/40 hover:shadow-2xl hover:shadow-emerald-900/10">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-950 bg-emerald-400 rounded-full">
                    {categories.find(c => c.slug === article.category || c.id === article.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-[10px] text-zinc-500 font-bold mb-3 uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> {article.readTime}
                  <span className="mx-2 text-zinc-800">•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-4 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-emerald-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                  Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CryptoPremium Play (Videos) */}
      <section className="bg-zinc-950 border border-zinc-800/50 rounded-[2.5rem] p-8 md:p-16 my-16 shadow-2xl shadow-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              Conteúdo em Vídeo
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              CryptoPremium <span className="text-emerald-400">Play</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">Assista às nossas análises de mercado, tutoriais práticos e resumos semanais em vídeo com nossos especialistas.</p>
          </div>
          <Link to="/category/investimentos" className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold hover:bg-zinc-800 transition-all group">
            Ver todos os vídeos <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Video 1 */}
          <Link to="/article/o-que-e-carteira-fria-cold-wallet" className="group block">
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-all shadow-lg">
              <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[16px] border-l-white ml-1.5"></div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded-md border border-white/10">
                12:45
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-tight">
              Como Declarar Imposto de Cripto em 2026: Guia Completo
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">Tutorial passo a passo sobre as novas regras da Receita Federal para ativos digitais e declaração de bens.</p>
          </Link>

          {/* Video 2 */}
          <Link to="/article/como-analisar-whitepaper-criptomoedas" className="group block">
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-all shadow-lg">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[16px] border-l-white ml-1.5"></div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded-md border border-white/10">
                08:20
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-tight">
              Bitcoin Rompe Resistência: O que esperar agora?
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">Análise técnica dos níveis de suporte e resistência do BTC após o fechamento semanal e projeções de curto prazo.</p>
          </Link>

          {/* Video 3 */}
          <Link to="/article/entendendo-taxas-gas-ethereum-redes" className="group block">
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-all shadow-lg">
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[16px] border-l-white ml-1.5"></div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded-md border border-white/10">
                15:10
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-tight">
              Staking para Iniciantes: Como gerar renda passiva
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">Aprenda o que é staking e como colocar suas criptomoedas para render de forma segura em 2026.</p>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/40">
            <Mail className="w-8 h-8 text-zinc-950" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Fique à frente do mercado</h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Receba análises exclusivas, notícias de última hora e insights dos nossos especialistas diretamente na sua caixa de entrada.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Obrigado por se inscrever!'); }}>
            <input 
              type="email" 
              required
              placeholder="Seu melhor e-mail" 
              className="flex-1 bg-black/50 border border-zinc-700 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
              Inscrever-se
            </button>
          </form>
          <p className="text-zinc-500 text-xs mt-6">Respeitamos sua privacidade. Cancele a qualquer momento.</p>
        </div>
      </section>
    </div>
  );
}

