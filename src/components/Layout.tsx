import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Shield, Twitter, Linkedin, Youtube, ChevronRight, Zap, MessageCircle, Send, Search, Newspaper, TrendingUp, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { articles } from "../data/articles";
import { SearchModal } from "./SearchModal";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Get some articles for the sidebar
  const sidebarArticles = articles.slice(0, 15);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 -ml-2 mr-2 text-zinc-400 hover:text-white md:hidden"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all shrink-0">
                  <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-bold tracking-tight text-white leading-none">
                    Tech<span className="text-blue-500">Front</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1 hidden sm:block">
                    Tecnologia, IA e Criptomoedas
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav - Removed as requested */}
            <nav className="hidden md:flex items-center space-x-6">
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all group"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Buscar notícias...</span>
                <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700 text-[10px] font-bold text-zinc-500">
                  ⌘K
                </kbd>
              </button>
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-zinc-400 hover:text-blue-500 transition-colors"
                title="Mais Notícias"
              >
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/cadastro" className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
                Assinar
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Simplified */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2 text-left">
              <button 
                onClick={() => { setIsMenuOpen(false); setIsSidebarOpen(true); }}
                className="w-full text-left px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg flex items-center justify-between"
              >
                Ver Categorias
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link to="/cadastro" className="block w-full text-center px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl">
                  Assinar Newsletter
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`fixed top-0 right-0 z-[70] h-full w-full max-w-sm bg-zinc-950 border-l border-white/10 shadow-2xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h2 className="text-xl font-display font-bold text-white flex items-center">
              <Menu className="w-5 h-5 mr-3 text-blue-500" /> Categorias
            </h2>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left">
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Explore por Assunto</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link to="/category/tecnologia" className="px-4 py-4 bg-white/5 rounded-2xl text-base font-bold text-zinc-200 hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-white/5 flex items-center justify-between group">
                  Tecnologia
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/category/ia" className="px-4 py-4 bg-white/5 rounded-2xl text-base font-bold text-zinc-200 hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-white/5 flex items-center justify-between group">
                  Inteligência Artificial
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/category/criptomoedas" className="px-4 py-4 bg-white/5 rounded-2xl text-base font-bold text-zinc-200 hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-white/5 flex items-center justify-between group">
                  Criptomoedas
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/category/apps" className="px-4 py-4 bg-white/5 rounded-2xl text-base font-bold text-zinc-200 hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-white/5 flex items-center justify-between group">
                  Apps
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/category/internet" className="px-4 py-4 bg-white/5 rounded-2xl text-base font-bold text-zinc-200 hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-white/5 flex items-center justify-between group">
                  Internet
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/category/tutoriais" className="px-4 py-4 bg-white/5 rounded-2xl text-base font-bold text-zinc-200 hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-white/5 flex items-center justify-between group">
                  Tutoriais
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" /> Destaques do Momento
              </h3>
              <div className="space-y-6">
                {sidebarArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    to={`/article/${article.slug}`}
                    className="group block space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-zinc-600 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {article.readTime}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-zinc-200 group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-white/5 bg-black/50">
            <Link 
              to="/cadastro" 
              className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
            >
              Assinar Newsletter
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Lead Capture Section */}
      <section className="border-t border-white/5 bg-zinc-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Receba as Principais Notícias Tech
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de leitores e receba nosso resumo diário com as novidades mais importantes sobre IA, gadgets, startups e muito mais.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Inscrito com sucesso!'); }}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required
              className="flex-1 bg-black border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </form>
          <p className="text-xs text-zinc-600 mt-4">Nós respeitamos sua privacidade. Sem spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="col-span-1 md:col-span-4">
              <Link to="/" className="flex items-center space-x-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-white">
                  Tech<span className="text-blue-500">Front</span>
                </span>
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 pr-4">
                O seu portal definitivo para as últimas notícias de tecnologia, inteligência artificial, cultura digital e inovação.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/techfront_news" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors" title="Twitter"><Twitter className="w-5 h-5" /></a>
                <a href="https://linkedin.com/company/techfront" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors" title="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href="https://youtube.com/@techfront" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors" title="YouTube"><Youtube className="w-5 h-5" /></a>
                <a href="https://instagram.com/techfront" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors" title="Instagram"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 md:col-start-7">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Categorias</h3>
              <ul className="space-y-4">
                <li><Link to="/category/tecnologia" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Tecnologia</Link></li>
                <li><Link to="/category/ia" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Inteligência Artificial</Link></li>
                <li><Link to="/category/criptomoedas" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Criptomoedas</Link></li>
                <li><Link to="/category/investimentos" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Investimentos</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Empresa</h3>
              <ul className="space-y-4">
                <li><Link to="/sobre" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Sobre Nós</Link></li>
                <li><Link to="/contato" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Contato</Link></li>
                <li><a href="#" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Anuncie Conosco</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/termos" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Termos de Uso</Link></li>
                <li><Link to="/privacidade" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/aviso-de-risco" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Aviso de Risco</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-zinc-500 text-sm">
                &copy; {new Date().getFullYear()} TechFront Media. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Shield className="w-3.5 h-3.5 text-blue-500" /> Site Seguro - SSL 256-bit
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
