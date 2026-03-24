import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { Clock, ChevronRight, Zap, Mail, ArrowRight } from "lucide-react";
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

      {/* Destaques (Grid de Cards) */}
      <section>
        <div className="flex items-center justify-between border-b border-zinc-800/50 pb-6 mb-10">
          <h2 className="text-3xl font-display font-bold text-white">Destaques</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[featuredArticle, ...highlightArticles].map((article, index) => (
            <Link key={article.id} to={`/article/${article.slug}`} className={`group flex flex-col bg-zinc-900/20 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/50 transition-all hover:bg-zinc-900/40 hover:shadow-2xl hover:shadow-emerald-900/10 ${index === 0 ? 'lg:col-span-2 lg:flex-row' : ''}`}>
              <div className={`relative overflow-hidden ${index === 0 ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-64'}`}>
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-950 bg-emerald-400 rounded-full">
                    {index === 0 ? 'Destaque Principal' : categories.find(c => c.slug === article.category || c.id === article.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> {article.readTime}
                  <span className="mx-2 text-zinc-800">•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className={`${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-4 line-clamp-2 leading-tight`}>
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed mb-8 flex-1">
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

