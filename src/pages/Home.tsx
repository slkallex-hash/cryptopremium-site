import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { Clock, ChevronRight, Zap, Mail, ArrowRight, X, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { AdSlot } from "@/components/AdSlot";

export function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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



      {/* Top Banners (4) */}
      <div className="mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AdSlot id="home-top-1" type="square" className="w-full max-w-none h-[250px]" mybidId="2018598" />
          <AdSlot id="home-top-2" type="square" className="w-full max-w-none h-[250px]" mybidId="2018598" />
          <AdSlot id="home-top-3" type="square" className="w-full max-w-none h-[250px]" mybidId="2018598" />
          <AdSlot id="home-top-4" type="square" className="w-full max-w-none h-[250px]" mybidId="2018598" />
        </div>
      </div>

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
                <div className="mt-auto flex items-center text-emerald-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
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
                  <span>{article.author.split(' – ')[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-6 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center text-emerald-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
                  Ler mais <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Middle Banner Ad */}
      <div className="my-16">
        <AdSlot id="home-middle-banner" type="banner" mybidId="2018598" />
      </div>

      {/* CryptoPremium Play (Videos Reais) */}
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
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">Assista às nossas análises de mercado, tutoriais práticos e resumos semanais com nossos especialistas.</p>
          </div>
          <Link to="/category/investimentos" className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold hover:bg-zinc-800 transition-all group">
            Ver todos os vídeos <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Video 1 */}
          <div 
            onClick={() => setActiveVideo("https://www.youtube.com/embed/S_8S7vO-KqM")}
            className="group block cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-all shadow-lg">
              <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-emerald-500 text-zinc-950 text-[10px] font-bold px-2 py-1 rounded-md">
                12:45
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-tight">
              Como Declarar Imposto de Cripto em 2026: Guia Completo
            </h3>
            <div className="flex items-center text-xs text-zinc-500 font-medium">
              <span className="text-emerald-500 font-bold mr-2">Carlos Mendes</span>
              <span className="mx-2">•</span>
              <span>2.4k visualizações</span>
            </div>
          </div>

          {/* Video 2 */}
          <div 
            onClick={() => setActiveVideo("https://www.youtube.com/embed/ZE2HxT5s2_8")}
            className="group block cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-all shadow-lg">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-emerald-500 text-zinc-950 text-[10px] font-bold px-2 py-1 rounded-md">
                08:20
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-tight">
              Bitcoin Rompe Resistência: O que esperar agora?
            </h3>
            <div className="flex items-center text-xs text-zinc-500 font-medium">
              <span className="text-emerald-500 font-bold mr-2">Marina Costa</span>
              <span className="mx-2">•</span>
              <span>5.1k visualizações</span>
            </div>
          </div>

          {/* Video 3 */}
          <div 
            onClick={() => setActiveVideo("https://www.youtube.com/embed/rYQgy8QDEBI")}
            className="group block cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-all shadow-lg">
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800" alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-emerald-500 text-zinc-950 text-[10px] font-bold px-2 py-1 rounded-md">
                15:10
              </div>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2 leading-tight">
              Staking para Iniciantes: Como gerar renda passiva
            </h3>
            <div className="flex items-center text-xs text-zinc-500 font-medium">
              <span className="text-emerald-500 font-bold mr-2">Thiago Silva</span>
              <span className="mx-2">•</span>
              <span>1.8k visualizações</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

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

      {/* Bottom Banner Ad */}
      <div className="mt-16">
        <AdSlot id="home-bottom-banner" type="banner" mybidId="2018598" />
      </div>
    </div>
  );
}

