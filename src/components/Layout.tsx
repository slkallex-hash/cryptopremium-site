import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Bell, Search, TrendingUp, ChevronRight, Mail, Globe, Shield, Twitter, Linkedin, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import { CryptoTicker } from "./CryptoTicker";
import { AdSlot } from "./AdSlot";
import { categories } from "@/data/articles";
import { SearchModal } from "./SearchModal";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <CryptoTicker />
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#09090b]/80 border-b border-zinc-800/50">
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
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
                  <TrendingUp className="w-5 h-5 text-zinc-950" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight">
                  Crypto<span className="text-emerald-400">Premium</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1">
              <Link to="/sobre" className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/80 transition-all">
                Sobre Nós
              </Link>
              {categories.filter(c => c.id !== 'noticias-urgentes').slice(0, 5).map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/80 transition-all"
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <button onClick={() => setIsSearchOpen(true)} className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#09090b]"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-emerald-400 hover:bg-zinc-900 rounded-md"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="col-span-1 md:col-span-4">
              <Link to="/" className="flex items-center space-x-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-zinc-950" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight">
                  Crypto<span className="text-emerald-400">Premium</span>
                </span>
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 pr-4">
                O portal definitivo para investidores inteligentes. Notícias, análises on-chain e tendências macroeconômicas para você navegar o mercado com confiança.
              </p>
              
              {/* Newsletter */}
              <div className="flex flex-col space-y-3 bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800/50">
                <label className="text-sm font-bold text-white flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-emerald-400" /> Assine nossa Newsletter
                </label>
                <p className="text-xs text-zinc-500 mb-1">Receba o fechamento do mercado diariamente.</p>
                <form className="flex mt-2" onSubmit={(e) => { e.preventDefault(); alert('Inscrição realizada com sucesso!'); }}>
                  <input 
                    type="email" 
                    required
                    placeholder="Seu e-mail profissional" 
                    className="bg-black border border-zinc-800 text-zinc-100 px-4 py-2.5 rounded-l-lg focus:outline-none focus:border-emerald-500/50 w-full text-sm transition-colors"
                  />
                  <button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-5 py-2.5 rounded-r-lg transition-colors text-sm">
                    Assinar
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 md:col-start-7">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Mercados</h3>
              <ul className="space-y-4">
                {categories.slice(0, 4).map(cat => (
                  <li key={cat.id}>
                    <Link to={`/category/${cat.slug}`} className="text-zinc-400 hover:text-emerald-400 text-sm flex items-center transition-colors">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Institucional</h3>
              <ul className="space-y-4">
                <li><Link to="/sobre" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors">Sobre Nós</Link></li>
                <li><Link to="/contato" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors">Contato</Link></li>
                <li><Link to="/contato" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors">Anuncie</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/termos" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors">Termos e Riscos</Link></li>
                <li><Link to="/privacidade" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors">Privacidade e Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-zinc-500 text-sm">
                &copy; {new Date().getFullYear()} CryptoPremium. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-zinc-500 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" /> Site Seguro - SSL
                </div>
                <div className="flex items-center gap-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1DA1F2] transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0077B5] transition-colors"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF0000] transition-colors"><Youtube className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
            <div className="text-zinc-600 text-[11px] text-center md:text-right max-w-2xl leading-relaxed">
              <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl text-left md:text-right">
                <p className="font-bold text-zinc-400 mb-2 flex items-center md:justify-end">
                  <Shield className="w-4 h-4 mr-2 text-emerald-500" /> Aviso de Risco e Isenção de Responsabilidade
                </p>
                <p className="text-zinc-500">O conteúdo publicado no CryptoPremium possui caráter estritamente jornalístico, informativo e educacional. Nenhuma publicação deste site deve ser interpretada como aconselhamento financeiro, indicação de investimento ou recomendação de compra e venda de ativos digitais. O mercado de criptomoedas é altamente volátil e investimentos podem resultar em perda parcial ou total do capital. Recomendamos que você realize sua própria pesquisa (DYOR) e consulte um profissional financeiro certificado antes de tomar qualquer decisão.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Ad Banner */}
      <div className="md:hidden">
        <AdSlot id="mobile-sticky" type="sticky" />
        {/* Spacer to prevent content from being hidden behind the sticky ad */}
        <div className="h-[60px] w-full"></div>
      </div>
    </div>
  );
}
