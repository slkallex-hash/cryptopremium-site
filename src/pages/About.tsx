import { useEffect } from "react";
import { Shield, Target, TrendingUp, Zap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  useEffect(() => {
    document.title = "Sobre Nós | CryptoPremium - Tecnologia Institucional para o seu Portfólio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-sm font-medium text-yellow-500">Nossa História</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Democratizando o acesso à <br className="hidden md:block" />
            <span className="text-gradient-gold">tecnologia institucional</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Nascemos da frustração com o mercado de "gurus" que vendem ilusões. Somos a ponte entre o investidor comum e as ferramentas de Wall Street.
          </p>
        </div>

        <div className="space-y-12">
          <section className="glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-yellow-500" /> Quem Somos
            </h2>
            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
              A <strong>CryptoPremium</strong> é formada por uma equipe de ex-analistas de fundos quantitativos, desenvolvedores blockchain e especialistas em gestão de risco. Após anos desenvolvendo algoritmos de alta frequência para instituições financeiras, decidimos criar uma infraestrutura acessível para o investidor de varejo.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Não vendemos cursos milagrosos. Entregamos tecnologia, dados on-chain em tempo real e automação de ponta para que você possa operar com a mesma vantagem competitiva dos grandes players do mercado.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Missão</h3>
              <p className="text-zinc-400 leading-relaxed">
                Nivelar o campo de jogo no mercado cripto, fornecendo sinais de alta precisão e automação segura para investidores de todos os tamanhos.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Visão</h3>
              <p className="text-zinc-400 leading-relaxed">
                Ser a maior e mais confiável plataforma de inteligência e automação cripto da América Latina, reconhecida pela transparência e resultados.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossos Valores</h3>
              <ul className="text-zinc-400 leading-relaxed space-y-2">
                <li>• Transparência radical</li>
                <li>• Gestão de risco em 1º lugar</li>
                <li>• Segurança de nível bancário</li>
                <li>• Foco no longo prazo</li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Nossa Liderança</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Profile 1 */}
              <div className="glass p-8 rounded-3xl border border-white/5 text-center hover:border-yellow-500/30 transition-colors">
                <div className="w-24 h-24 mx-auto rounded-full bg-zinc-900 mb-6 overflow-hidden border-2 border-yellow-500/20">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Roberto Almeida</h3>
                <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-4">CEO & Head Quant</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Ex-gestor de portfólio em fundo quantitativo europeu. Especialista em desenvolvimento de algoritmos de negociação de alta frequência e modelos preditivos para criptoativos.
                </p>
              </div>
              {/* Profile 2 */}
              <div className="glass p-8 rounded-3xl border border-white/5 text-center hover:border-cyan-500/30 transition-colors">
                <div className="w-24 h-24 mx-auto rounded-full bg-zinc-900 mb-6 overflow-hidden border-2 border-cyan-500/20">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="CTO" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Sarah Chen</h3>
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">CTO & Lead Blockchain</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Arquiteta de software com mais de 10 anos de experiência em segurança cibernética e infraestrutura de dados em tempo real. Responsável pela segurança dos nossos bots.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center glass-gold p-12 rounded-3xl border-2 border-yellow-500/30 relative overflow-hidden mt-16 shadow-[0_0_40px_rgba(234,179,8,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent pointer-events-none"></div>
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Pronto para mudar de nível?</h2>
            <p className="text-zinc-300 mb-8 max-w-xl mx-auto relative z-10 text-lg">
              Junte-se à elite do mercado cripto e comece a operar com a vantagem tecnológica que você merece.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/#planos" className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all">
                Ver Planos Disponíveis
              </Link>
              <Link to="/contato" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                Falar com Consultor
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
