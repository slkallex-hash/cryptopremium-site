import { useEffect } from "react";
import { AlertTriangle, ShieldCheck, Info } from "lucide-react";

export function RiskDisclaimer() {
  useEffect(() => {
    document.title = "Aviso de Risco | TechFront";
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
            Transparência e responsabilidade são nossos pilares. Leia atentamente antes de tomar decisões baseadas em nosso conteúdo.
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
                O <strong>TechFront</strong> é um portal de jornalismo focado em tecnologia e inovação. <strong>Nós não prestamos aconselhamento financeiro, de investimentos ou jurídico.</strong>
              </p>
              <p>
                As informações, análises e opiniões publicadas em nossos artigos, especialmente aqueles relacionados a criptomoedas, mercado financeiro ou startups, têm caráter estritamente informativo e educacional. O uso das informações disponibilizadas é de sua inteira responsabilidade. Você deve avaliar cuidadosamente os riscos antes de realizar qualquer investimento.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">01.</span> Volatilidade do Mercado
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Mercados de tecnologia e criptomoedas são altamente especulativos e voláteis. Preços de ativos digitais ou ações de empresas de tecnologia podem sofrer flutuações drásticas em curtos períodos.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">02.</span> Conteúdo Informativo
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Notícias sobre lançamentos de produtos, fusões, aquisições ou tendências de mercado não devem ser interpretadas como recomendações de compra ou venda de ativos.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">03.</span> Pesquisa Independente
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Recomendamos fortemente que você realize sua própria pesquisa (DYOR - Do Your Own Research) ou consulte um profissional financeiro certificado antes de tomar qualquer decisão de investimento.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">04.</span> Opiniões de Terceiros
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Artigos de opinião, entrevistas ou citações de especialistas refletem as visões de seus respectivos autores e não necessariamente a posição editorial do TechFront.
              </p>
            </div>
          </section>

          <div className="glass border-2 border-blue-500/30 rounded-3xl p-8 flex items-start gap-6 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <Info className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Nosso Compromisso</h4>
              <p className="text-zinc-300 leading-relaxed">
                Nosso compromisso é com o jornalismo de qualidade, trazendo os fatos e análises sobre o mundo da tecnologia. Não fazemos promessas de lucros ou garantias de sucesso baseadas nas informações que publicamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
