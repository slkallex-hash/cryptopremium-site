import { useEffect } from "react";
import { Shield, Target, TrendingUp, TrendingUp as TrendingIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  useEffect(() => {
    document.title = "Sobre Nós | CryptoPremium - Transparência e Precisão na Nova Economia Digital";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CryptoPremium",
          "url": window.location.origin,
          "logo": `${window.location.origin}/logo.png`,
          "description": "Portal líder em notícias sobre criptomoedas, economia digital e tecnologia blockchain.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Paulista, 1000",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01310-100",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contato@cryptopremium.space",
            "contactType": "customer service"
          }
        })}
      </script>

      {/* SEO Meta Tags Description (Conceptual) */}
      {/* Meta Title: Sobre o CryptoPremium | Nossa Missão e Equipe de Especialistas */}
      {/* Meta Description: Conheça o CryptoPremium, portal líder em notícias de criptomoedas. Nossa equipe de especialistas traz transparência e análises técnicas para o investidor Web3. */}

      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
          <TrendingIcon className="w-8 h-8 text-zinc-950" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
          Transparência e Precisão na Nova Economia Digital
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Sua bússola confiável no mercado de criptomoedas, economia global e investimentos digitais.
        </p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none space-y-12">
        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-emerald-400" /> Nossa História
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Fundado em 2023, o <strong>CryptoPremium</strong> surgiu para preencher uma lacuna crítica no mercado brasileiro: a falta de análises técnicas isentas de ruído especulativo. Em um cenário onde a desinformação pode custar caro ao investidor, nos posicionamos como um filtro rigoroso, unindo o jornalismo econômico tradicional à profundidade técnica da tecnologia blockchain.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 mr-3 text-emerald-400" /> Nossa Missão
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Democratizar o acesso à informação financeira de alta qualidade, capacitando nossos leitores a navegarem no ecossistema Web3 com segurança, autonomia e fundamentação técnica.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-3 text-emerald-400" /> Nossa Visão
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Ser o portal de referência absoluta em educação e notícias cripto na América Latina até 2030, reconhecido pela integridade editorial e pela capacidade de antecipar tendências macroeconômicas.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-3 text-emerald-400" /> Nossos Valores
            </h3>
            <ul className="text-zinc-300 text-sm leading-relaxed space-y-2 list-none pl-0">
              <li><strong className="text-white">Precisão Técnica:</strong> Verificação rigorosa de dados on-chain antes de qualquer publicação.</li>
              <li><strong className="text-white">Independência:</strong> Isenção total de conflitos de interesse com projetos ou corretoras.</li>
              <li><strong className="text-white">Educação:</strong> Acreditamos que o conhecimento é a melhor ferramenta de proteção ao investidor.</li>
            </ul>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Nossa Equipe Editorial</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carlos Mendes */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Carlos Mendes" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Carlos Mendes</h3>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Editor-chefe e Analista Macro</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Com 12 anos de atuação no mercado financeiro tradicional, Carlos migrou para o setor de ativos digitais em 2017. É especialista em ciclos de mercado e política monetária global.
              </p>
            </div>
            {/* Marina Costa */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Marina Costa" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Marina Costa</h3>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Analista On-chain e DeFi</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Pesquisadora de protocolos de finanças descentralizadas, Marina foca na análise de fluxos de liquidez e governança de DAOs, trazendo a verdade on-chain.
              </p>
            </div>
            {/* Thiago Silva */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" alt="Thiago Silva" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Thiago Silva</h3>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Especialista em Tecnologia e Web3</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Desenvolvedor de contratos inteligentes, Thiago traduz a complexidade do código para o investidor final, focando em segurança e escalabilidade.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-4">Junte-se à nossa comunidade</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Acompanhe nossas análises diárias e esteja sempre um passo à frente no mercado que nunca dorme.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contato" className="px-8 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
              Fale Conosco
            </Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-8 py-3 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 transition-colors">
              Ver Notícias
            </button>
          </div>
        </section>
      </div>

      {/* Structured Data Description (Conceptual JSON-LD) */}
      {/* 
        Type: Organization
        Name: CryptoPremium
        URL: https://cryptopremium.space
        Logo: https://cryptopremium.space/logo.png
        SameAs: [Social Links]
        
        Type: Person (for each team member)
        Name: [Name]
        JobTitle: [Role]
        Description: [Bio]
        Affiliation: CryptoPremium
      */}
    </div>
  );
}
