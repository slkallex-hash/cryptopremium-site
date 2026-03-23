import { FileText } from "lucide-react";

export function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
          <FileText className="w-8 h-8 text-zinc-950" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
          Termos de Uso
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none space-y-8 text-zinc-300">
        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site <strong>CryptoPremium</strong> (cryptopremium.space), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não deve acessar ou usar nosso site.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Uso Apenas para Fins Informativos</h2>
          <p>
            Todo o conteúdo disponibilizado no CryptoPremium, incluindo artigos, análises, gráficos, opiniões e notícias, é fornecido <strong>exclusivamente para fins informativos e educacionais</strong>.
          </p>
          <p className="mt-4 text-emerald-400 font-medium">
            Nenhum conteúdo publicado neste site deve ser interpretado como aconselhamento financeiro, jurídico, fiscal ou recomendação de investimento.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Isenção de Responsabilidade sobre Investimentos</h2>
          <p>
            O mercado de criptomoedas, incluindo Bitcoin e altcoins, é altamente volátil e especulativo. O investimento em ativos digitais envolve um alto grau de risco, e você pode perder parte ou a totalidade do seu capital investido.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Não Garantia de Lucros:</strong> O CryptoPremium não garante lucros, rendimentos ou resultados específicos decorrentes da leitura do nosso conteúdo.</li>
            <li><strong>Responsabilidade Individual:</strong> Você é o único responsável por suas próprias decisões de investimento. Recomendamos fortemente que você faça sua própria pesquisa (DYOR - Do Your Own Research) e consulte um consultor financeiro qualificado antes de tomar qualquer decisão de investimento.</li>
            <li><strong>Isenção de Danos:</strong> Em nenhuma circunstância o CryptoPremium, seus autores, editores ou parceiros serão responsabilizados por quaisquer perdas ou danos diretos, indiretos, incidentais ou consequenciais resultantes do uso das informações contidas neste site.</li>
          </ul>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Direitos Autorais e Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo original, design, logotipos, textos, gráficos e a seleção e disposição dos mesmos no CryptoPremium são de propriedade exclusiva do site e estão protegidos pelas leis de direitos autorais e propriedade intelectual aplicáveis.
          </p>
          <p className="mt-4">
            Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material do nosso site sem o consentimento prévio por escrito do CryptoPremium, exceto para uso pessoal e não comercial.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. Regras de Uso do Site</h2>
          <p>
            Ao utilizar o CryptoPremium, você concorda em não:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Usar o site de qualquer maneira que possa desativar, sobrecarregar, danificar ou prejudicar o site ou interferir no uso de qualquer outra parte.</li>
            <li>Usar qualquer robô, spider ou outro dispositivo automático, processo ou meio para acessar o site para qualquer finalidade, incluindo monitoramento ou cópia de qualquer material.</li>
            <li>Tentar obter acesso não autorizado a, interferir, danificar ou interromper qualquer parte do site, o servidor no qual o site está armazenado ou qualquer servidor, computador ou banco de dados conectado ao site.</li>
            <li>Atacar o site por meio de um ataque de negação de serviço ou um ataque distribuído de negação de serviço.</li>
          </ul>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">6. Links de Terceiros e Anúncios</h2>
          <p>
            O CryptoPremium pode conter links para sites de terceiros e exibir anúncios fornecidos por redes de publicidade. Esses links e anúncios são fornecidos apenas para sua conveniência. Não temos controle sobre o conteúdo desses sites ou recursos e não aceitamos qualquer responsabilidade por eles ou por qualquer perda ou dano que possa surgir do seu uso.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">7. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, a nosso exclusivo critério. Todas as alterações entram em vigor imediatamente após a publicação no site. O uso contínuo do site após a publicação dos Termos de Uso revisados significa que você aceita e concorda com as alterações.
          </p>
        </section>
      </div>
    </div>
  );
}
