import { motion } from "motion/react";
import { 
  Zap, Search, Shield, Twitter, Linkedin, Youtube, ChevronRight, 
  Award, Clock, X, TrendingUp, Users, CheckCircle2, Lock, ArrowRight, Send
} from "lucide-react";

export function Home() {
  return (
    <div className="w-full bg-black">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-8 border border-blue-500/20 bg-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-400">Notícias em Tempo Real</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              As últimas notícias de <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tecnologia, IA e Apps</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Fique por dentro das inovações, tendências e novidades que estão moldando o futuro digital. Análises aprofundadas e cobertura completa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/category/tecnologia" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 group">
                Explore a Tecnologia
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="w-full sm:w-auto px-8 py-4 glass text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all flex items-center justify-center border border-white/10">
                <Search className="w-5 h-5 mr-2" /> Buscar Notícias
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESTAQUE DA NOTÍCIA PRINCIPAL */}
      <section className="py-16 lg:py-24 relative border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                O Futuro da IA Generativa: Desafios e Oportunidades para 2026
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                A inteligência artificial generativa está revolucionando indústrias, mas levanta questões éticas e de segurança. Entenda os próximos passos e como se preparar para essa nova era.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <p className="text-sm text-blue-400 font-medium uppercase tracking-wider">Inteligência Artificial</p>
                </div>
                <p className="text-sm text-zinc-500">Por Redação TechFront - 28/03/2026</p>
              </div>
              <a href="/article/futuro-ia-generativa" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all group">
                Leia a Notícia Completa
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            <motion.div 
              className="relative lg:order-last"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="O Futuro da IA Generativa" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-[400px] object-cover border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GRID DE NOTÍCIAS RECENTES */}
      <section className="py-16 lg:py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Últimas Notícias
              </h2>
              <p className="text-zinc-400 text-lg">
                Fique atualizado com os últimos acontecimentos.
              </p>
            </div>
            <a href="/category/todas" className="hidden sm:flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
              Ver todas <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Apple anuncia novo chip M4 com foco em processamento neural",
                category: "Tecnologia",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
                date: "Há 2 horas"
              },
              {
                title: "Bitcoin ultrapassa nova marca histórica após aprovação de ETFs",
                category: "Criptomoedas",
                image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=600",
                date: "Há 4 horas"
              },
              {
                title: "Novo app promete revolucionar a forma como organizamos tarefas",
                category: "Apps",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
                date: "Há 5 horas"
              },
              {
                title: "Google lança atualização importante para o algoritmo de busca",
                category: "Internet",
                image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=600",
                date: "Há 8 horas"
              },
              {
                title: "Como proteger seus dados em redes Wi-Fi públicas",
                category: "Tutoriais",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
                date: "Ontem"
              },
              {
                title: "Startups de IA recebem investimento recorde no primeiro trimestre",
                category: "Inteligência Artificial",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
                date: "Ontem"
              }
            ].map((news, i) => (
              <motion.article 
                key={i}
                className="glass rounded-3xl border border-white/5 overflow-hidden hover:bg-white/5 transition-colors group flex flex-col"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full border border-white/10">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      <a href={`/article/noticia-${i}`}>{news.title}</a>
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                      Um breve resumo do que se trata esta notícia para atrair o clique do leitor interessado no assunto.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <p className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {news.date}
                    </p>
                    <a href={`/article/noticia-${i}`} className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center">
                      Ler mais <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <a href="/category/todas" className="inline-flex items-center justify-center px-6 py-3 border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors">
              Ver todas as notícias
            </a>
          </div>
        </div>
      </section>

      {/* MAIS LIDAS & NEWSLETTER */}
      <section className="py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Mais Lidas */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" /> Mais Lidas da Semana
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Review completo: O novo óculos de realidade mista da Apple vale o preço?", category: "Tecnologia", views: "125k" },
                  { title: "5 ferramentas de IA gratuitas que vão aumentar sua produtividade hoje", category: "Inteligência Artificial", views: "98k" },
                  { title: "A queda do Bitcoin: Correção natural ou início de um bear market?", category: "Criptomoedas", views: "85k" },
                  { title: "Como o novo regulamento europeu afeta as grandes empresas de tecnologia", category: "Internet", views: "72k" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="text-4xl font-display font-bold text-zinc-800 group-hover:text-blue-500/30 transition-colors">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{item.category}</span>
                        <span className="text-xs text-zinc-600">• {item.views} leituras</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
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
                  <Send className="w-6 h-6 text-blue-400" />
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
