import { useEffect } from "react";
import { AlertTriangle, ShieldCheck, Info } from "lucide-react";

export function RiskDisclaimer() {
  useEffect(() => {
    document.title = "Aviso de Risco | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Aviso de Risco</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Transparência e gestão de risco são nossos pilares. Leia atentamente antes de operar no mercado cripto.
          </p>
        </div>

        <div className="space-y-8">
          <section className="glass border-red-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Isenção de Responsabilidade Financeira</h2>
            </div>
            <div className="text-zinc-300 space-y-4 relative z-10 leading-relaxed">
              <p>
                A <strong>CryptoPremium</strong> fornece ferramentas de automação (bots) e sinais baseados em análise quantitativa e técnica. <strong>Nós não prestamos aconselhamento financeiro personalizado.</strong>
              </p>
              <p>
                O desempenho passado de qualquer sistema de negociação, estratégia ou algoritmo não é necessariamente indicativo de resultados futuros. O uso das nossas ferramentas é de sua inteira responsabilidade. Você deve avaliar cuidadosamente se a negociação de criptomoedas é adequada para você, considerando sua condição financeira, tolerância ao risco e nível de experiência.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-500">01.</span> Volatilidade Extrema
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                O mercado de criptomoedas é altamente especulativo e volátil. Preços podem sofrer flutuações drásticas em minutos. Operações alavancadas (Mercado Futuro) amplificam tanto os lucros quanto as perdas, podendo resultar na liquidação total do seu capital.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-500">02.</span> Riscos de Execução e API
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Nossos bots dependem da infraestrutura das corretoras (ex: Binance) via API. Atrasos na rede, manutenções da corretora, ou falhas de conectividade podem resultar em ordens não executadas ou executadas a preços diferentes dos esperados (slippage).
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-500">03.</span> Gestão de Capital
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                A regra de ouro do mercado financeiro aplica-se aqui: <strong>Nunca invista dinheiro que você não pode perder.</strong> Recomendamos fortemente o uso de stop loss e uma gestão de risco rigorosa em todas as operações, mesmo as automatizadas.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-500">04.</span> Responsabilidade do Usuário
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Você mantém controle total sobre sua conta na corretora e seus fundos. A configuração dos parâmetros de risco no bot (tamanho da posição, alavancagem, stop loss) é definida por você. A CryptoPremium não pode impedir perdas decorrentes de configurações agressivas.
              </p>
            </div>
          </section>

          <div className="glass-gold border-2 border-yellow-500/30 rounded-3xl p-8 flex items-start gap-6 shadow-[0_0_30px_rgba(234,179,8,0.05)]">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center shrink-0">
              <Info className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Compromisso com a Verdade</h4>
              <p className="text-zinc-300 leading-relaxed">
                Diferente de muitos no mercado, nós não prometemos riqueza rápida ou lucros garantidos. Prometemos tecnologia de ponta, transparência nos resultados e as melhores ferramentas para auxiliar na sua tomada de decisão. O sucesso a longo prazo exige disciplina e gestão de risco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
