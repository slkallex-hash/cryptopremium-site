import { Mail, Shield, Target, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
          <TrendingUp className="w-8 h-8 text-zinc-950" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
          Sobre o CryptoPremium
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Sua fonte definitiva e confiável de informações sobre o mercado de criptomoedas, economia global e investimentos digitais.
        </p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none">
        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-3 text-emerald-400" /> Nossa Missão
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-0">
            O CryptoPremium nasceu com um propósito claro: desmistificar o complexo universo dos ativos digitais. Nossa missão é informar, educar e atualizar investidores de todos os níveis — desde iniciantes até traders experientes — com notícias precisas, análises aprofundadas e tendências macroeconômicas que realmente importam. Acreditamos que a informação de qualidade é a chave para a liberdade financeira na nova economia digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-3 text-emerald-400" /> Credibilidade e Transparência
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-0">
              Nosso compromisso número um é com a verdade e a precisão dos fatos. Em um mercado altamente volátil e repleto de ruídos, nossa equipe editorial trabalha incansavelmente para filtrar as informações, baseando-se em dados on-chain, relatórios institucionais e fontes verificadas. Não fazemos recomendações de investimento; fornecemos o conhecimento necessário para que você tome suas próprias decisões com segurança.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-3 text-emerald-400" /> Foco no Futuro
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-0">
              A tecnologia blockchain e as criptomoedas estão reescrevendo as regras do sistema financeiro global. O CryptoPremium está na vanguarda dessa revolução, cobrindo não apenas o Bitcoin e as principais altcoins, mas também inovações em DeFi (Finanças Descentralizadas), NFTs, Web3 e o impacto das políticas dos bancos centrais na economia digital.
            </p>
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
              <p className="text-emerald-400 text-sm font-medium mb-4">Analista de Mercado Sênior</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Com 8 anos de experiência no mercado financeiro tradicional e Web3, Carlos é especialista em análise on-chain e macroeconomia.
              </p>
            </div>
            {/* Marina Costa */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://picsum.photos/seed/marina/200/200" alt="Marina Costa" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Marina Costa</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">Jornalista Financeira</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Focada em regulação e adoção institucional, Marina cobre as movimentações de Wall Street e o impacto das políticas de Bancos Centrais.
              </p>
            </div>
            {/* Thiago Silva */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4 overflow-hidden border-2 border-emerald-500/20">
                <img src="https://picsum.photos/seed/thiago/200/200" alt="Thiago Silva" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Thiago Silva</h3>
              <p className="text-emerald-400 text-sm font-medium mb-4">Especialista em Tecnologia</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Desenvolvedor Blockchain focado em dissecar whitepapers e traduzir a complexidade dos contratos inteligentes e protocolos DeFi.
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
