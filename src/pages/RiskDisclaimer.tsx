import { useEffect } from "react";
import { AlertTriangle, ShieldCheck, Info } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";

export function RiskDisclaimer() {
  useEffect(() => {
    document.title = "Aviso de Risco | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Top Ad */}
      <AdSlot id="risk-top-banner" type="banner" className="mb-12 rounded-2xl" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Aviso de Risco - CryptoPremium",
          "description": "Informações importantes sobre os riscos associados ao mercado de criptomoedas e investimentos digitais."
        })}
      </script>

      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Aviso de Risco</h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Transparência e responsabilidade são nossos pilares. Entenda os riscos antes de tomar qualquer decisão financeira.
        </p>
      </div>

      <div className="space-y-12">
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">Isenção de Responsabilidade</h2>
          </div>
          <div className="prose prose-invert max-w-none text-zinc-300 space-y-4">
            <p>
              O conteúdo publicado no <strong>CryptoPremium</strong> tem finalidade exclusivamente informativa, educacional e jornalística. Não constituímos, em nenhuma circunstância, aconselhamento financeiro, jurídico, fiscal ou recomendação de investimento.
            </p>
            <p>
              As opiniões expressas pelos autores e colaboradores são de sua inteira responsabilidade e não refletem necessariamente a opinião institucional do portal. O mercado de criptoativos é dinâmico e as informações podem se tornar obsoletas rapidamente.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-500">01.</span> Volatilidade Extrema
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Criptomoedas e ativos digitais são conhecidos por sua volatilidade extrema. Preços podem subir ou cair drasticamente em curtos períodos de tempo, resultando em ganhos significativos ou perdas totais do capital investido.
            </p>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-500">02.</span> Riscos Tecnológicos
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Investir em protocolos DeFi, NFTs e novas redes blockchain envolve riscos técnicos, incluindo falhas em contratos inteligentes (smart contracts), hacks, bugs e perda de acesso a chaves privadas.
            </p>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-500">03.</span> Incerteza Regulatória
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              O ambiente regulatório para criptoativos ainda está em evolução em muitos países. Mudanças nas leis e regulamentações podem impactar a legalidade, o valor e a liquidez dos seus ativos.
            </p>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-500">04.</span> Faça Sua Própria Pesquisa
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Encorajamos fortemente que todos os leitores realizem sua própria pesquisa (DYOR - Do Your Own Research) e consultem consultores financeiros certificados antes de realizar qualquer tipo de investimento.
            </p>
          </div>
        </section>

        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-3xl p-8 flex items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
            <Info className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Nota Final</h4>
            <p className="text-zinc-400 leading-relaxed">
              Ao utilizar este site, você reconhece que é o único responsável por suas decisões financeiras e que o CryptoPremium não será responsabilizado por quaisquer perdas ou danos decorrentes do uso das informações aqui contidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
