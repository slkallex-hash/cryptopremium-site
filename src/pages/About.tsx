import { useEffect } from "react";
import { Mail, Shield, Target, TrendingUp } from "lucide-react";

export function About() {
  useEffect(() => {
    document.title = "Sobre Nós | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
          <TrendingUp className="w-8 h-8 text-zinc-950" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
          Sobre o CryptoPremium: Nossa Bússola no Mercado Cripto
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Sua fonte definitiva e confiável de informações sobre o mercado de criptomoedas, economia global e investimentos digitais.
        </p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none">
        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-emerald-400" /> Nossa História
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-0">
            Nascido da necessidade de informações claras em um mercado frequentemente dominado por ruídos e especulações, o CryptoPremium surgiu com um propósito simples: traduzir a complexidade da Web3 e dos ativos digitais para o investidor cotidiano. Começamos como um pequeno boletim informativo e, graças ao nosso compromisso com a verdade e a análise baseada em dados, evoluímos para um dos portais de notícias e educação financeira que mais crescem no Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 mr-3 text-emerald-400" /> Nossa Missão
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-0">
              Democratizar o acesso à informação de qualidade sobre criptomoedas, blockchain e finanças descentralizadas, capacitando nossos leitores a tomarem decisões financeiras inteligentes, seguras e fundamentadas.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-3 text-emerald-400" /> Nossa Visão
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-0">
              Ser o portal de notícias e educação cripto mais confiável e acessível da América Latina até 2030, reconhecido pela excelência jornalística e inovação na entrega de conteúdo.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-3 text-emerald-400" /> Nossos Valores
            </h3>
            <ul className="text-zinc-300 leading-relaxed mb-0 space-y-2 list-none pl-0">
              <li><strong className="text-white">Precisão:</strong> Checamos fatos, dados on-chain e fontes primárias antes de qualquer publicação.</li>
              <li><strong className="text-white">Transparência:</strong> Somos claros sobre nossos vieses, isenções de responsabilidade e metodologias de análise.</li>
              <li><strong className="text-white">Educação:</strong> Acreditamos que um investidor educado é um investidor protegido. Nosso foco é ensinar, não apenas noticiar.</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carlos Mendes */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://picsum.photos/seed/carlos/200/200" alt="Carlos Mendes" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Carlos Mendes</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">Analista Chefe de Mercado</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Com mais de 10 anos de experiência no mercado financeiro tradicional e 6 anos dedicados exclusivamente a criptoativos, Carlos é especialista em análise técnica e tendências macroeconômicas.
              </p>
            </div>
            {/* Marina Costa */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://picsum.photos/seed/marina/200/200" alt="Marina Costa" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Marina Costa</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">Jornalista Econômica Sênior</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vencedora de prêmios de jornalismo investigativo, Marina cobre o impacto regulatório, adoção institucional e as intersecções entre a economia global e o Bitcoin.
              </p>
            </div>
            {/* Thiago Silva */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://picsum.photos/seed/thiago/200/200" alt="Thiago Silva" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Thiago Silva</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">Especialista em Blockchain e Web3</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Desenvolvedor e pesquisador de contratos inteligentes, Thiago traduz as inovações tecnológicas de redes como Ethereum e Solana para uma linguagem acessível a todos.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-white mb-4">Junte-se à nossa comunidade</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Fique à frente do mercado. Acompanhe nossas atualizações diárias e não perca as próximas grandes oportunidades da economia digital.
          </p>
          <a href="/contato" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-zinc-950 bg-emerald-500 hover:bg-emerald-400 transition-colors">
            <Mail className="w-5 h-5 mr-2" /> Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
}
