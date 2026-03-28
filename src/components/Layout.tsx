import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Shield, Twitter, Linkedin, Youtube, ChevronRight, Zap, MessageCircle, Send, Search } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

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
              <Link to="/" className="flex items-center space-x-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                  <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-white">
                  Tech<span className="text-blue-500">Front</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/category/tecnologia" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Tecnologia</Link>
              <Link to="/category/ia" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Inteligência Artificial</Link>
              <Link to="/category/criptomoedas" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Criptomoedas</Link>
              <Link to="/category/apps" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Apps</Link>
              <Link to="/category/internet" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Internet</Link>
              <Link to="/category/tutoriais" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Tutoriais</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/cadastro" className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
                Assinar
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/category/tecnologia" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg">Tecnologia</Link>
              <Link to="/category/ia" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg">Inteligência Artificial</Link>
              <Link to="/category/criptomoedas" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg">Criptomoedas</Link>
              <Link to="/category/apps" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg">Apps</Link>
              <Link to="/category/internet" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg">Internet</Link>
              <Link to="/category/tutoriais" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg">Tutoriais</Link>
              <Link to="/login" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-blue-500 hover:bg-white/5 rounded-lg">Login</Link>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link to="/cadastro" className="block w-full text-center px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl">
                  Assinar Newsletter
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

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
                <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 md:col-start-7">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Categorias</h3>
              <ul className="space-y-4">
                <li><Link to="/category/tecnologia" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Tecnologia</Link></li>
                <li><Link to="/category/ia" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Inteligência Artificial</Link></li>
                <li><Link to="/category/criptomoedas" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Criptomoedas</Link></li>
                <li><Link to="/category/apps" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Apps</Link></li>
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
                <li><Link to="/privacidade" className="text-zinc-400 hover:text-blue-500 text-sm transition-colors">Privacidade</Link></li>
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
