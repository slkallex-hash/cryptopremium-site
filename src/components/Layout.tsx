import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Shield, Twitter, Linkedin, Youtube, ChevronRight, Activity, MessageCircle, Send } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all">
                  <Activity className="w-6 h-6 text-black" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-white">
                  Crypto<span className="text-yellow-500">Premium</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/#beneficios" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Benefícios</Link>
              <Link to="/#resultados" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Resultados</Link>
              <Link to="/#planos" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Planos</Link>
              <Link to="/sobre" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sobre Nós</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                Login
              </Link>
              <Link to="/#planos" className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all">
                Começar Agora
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/#beneficios" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-yellow-500 hover:bg-white/5 rounded-lg">Benefícios</Link>
              <Link to="/#resultados" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-yellow-500 hover:bg-white/5 rounded-lg">Resultados</Link>
              <Link to="/#planos" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-yellow-500 hover:bg-white/5 rounded-lg">Planos</Link>
              <Link to="/sobre" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-yellow-500 hover:bg-white/5 rounded-lg">Sobre Nós</Link>
              <Link to="/login" className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-yellow-500 hover:bg-white/5 rounded-lg">Login</Link>
              <div className="pt-4 mt-4 border-t border-white/5">
                <Link to="/#planos" className="block w-full text-center px-5 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl">
                  Começar Agora
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
            Receba Análises Institucionais Gratuitas
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de investidores e receba nossos relatórios semanais de mercado, oportunidades on-chain e dicas de gestão de risco diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Inscrito com sucesso!'); }}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required
              className="flex-1 bg-black border border-white/10 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all whitespace-nowrap"
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-black" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-white">
                  Crypto<span className="text-yellow-500">Premium</span>
                </span>
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 pr-4">
                A plataforma definitiva para investidores que buscam resultados consistentes no mercado de criptomoedas através de tecnologia e inteligência institucional.
              </p>
            </div>
            
            <div className="col-span-1 md:col-span-2 md:col-start-7">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Plataforma</h3>
              <ul className="space-y-4">
                <li><Link to="/#beneficios" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Benefícios</Link></li>
                <li><Link to="/#resultados" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Resultados</Link></li>
                <li><Link to="/#planos" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Planos e Preços</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Empresa</h3>
              <ul className="space-y-4">
                <li><Link to="/sobre" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Sobre Nós</Link></li>
                <li><Link to="/contato" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Suporte</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-display font-bold mb-6 tracking-wide">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/termos" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Termos de Uso</Link></li>
                <li><Link to="/aviso-de-risco" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Aviso de Risco</Link></li>
                <li><Link to="/privacidade" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">Privacidade</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-zinc-500 text-sm">
                &copy; {new Date().getFullYear()} CryptoPremium. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Shield className="w-3.5 h-3.5 text-yellow-500" /> Site Seguro - SSL 256-bit
                </div>
              </div>
            </div>
            <div className="text-zinc-600 text-[11px] text-center md:text-right max-w-2xl leading-relaxed">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-left md:text-right">
                <p className="font-bold text-zinc-400 mb-2 flex items-center md:justify-end">
                  <Shield className="w-4 h-4 mr-2 text-yellow-500" /> Aviso de Risco e Isenção de Responsabilidade
                </p>
                <p className="text-zinc-500">
                  A negociação de criptomoedas envolve um alto grau de risco e pode não ser adequada para todos os investidores. 
                  O desempenho passado não é indicativo de resultados futuros. Não garantimos lucros. Você deve estar ciente de 
                  todos os riscos associados à negociação de ativos digitais e procurar aconselhamento de um consultor financeiro independente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://t.me/cryptopremium" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg shadow-[#0088cc]/30 hover:scale-110 transition-transform"
        >
          <Send className="w-6 h-6 text-white ml-[-2px] mt-[2px]" />
        </a>
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  );
}
