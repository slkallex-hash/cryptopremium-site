import { useEffect } from "react";
import { FileText } from "lucide-react";

export function TermsOfUse() {
  useEffect(() => {
    document.title = "Termos de Uso | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20">
            <FileText className="w-8 h-8 text-yellow-500" strokeWidth={2} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            Termos de Uso
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar, assinar ou utilizar a plataforma, os sinais e os bots de automação da <strong>CryptoPremium</strong>, você concorda expressamente em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Natureza do Serviço e Isenção de Responsabilidade</h2>
            <p className="mb-4">
              A CryptoPremium fornece ferramentas de software (bots), análises de dados e sinais de mercado. <strong>Nós não somos uma corretora, não somos consultores financeiros e não gerimos o seu capital diretamente.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>O mercado de criptomoedas é altamente volátil e envolve risco substancial de perda de capital.</li>
              <li>Resultados passados (backtests ou histórico de operações) não são garantia de resultados futuros.</li>
              <li>Você é o único responsável por configurar os parâmetros de risco nos bots e por todas as decisões de investimento tomadas em sua conta de corretora.</li>
              <li>A CryptoPremium não se responsabiliza por perdas financeiras decorrentes do uso de nossos sinais, falhas de conexão com a API da sua corretora, ou volatilidade extrema do mercado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Uso da API e Segurança da Conta</h2>
            <p>
              Para utilizar nossas ferramentas de automação, você precisará fornecer chaves de API da sua corretora (ex: Binance, Bybit). <strong>Você concorda em fornecer APENAS chaves com permissão de "Leitura" e "Negociação/Trade". É estritamente proibido e de sua total responsabilidade não fornecer chaves com permissão de "Saque/Withdrawal".</strong> A CryptoPremium nunca solicitará permissão para sacar seus fundos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Assinaturas e Pagamentos</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Os serviços são cobrados de forma recorrente (mensal, trimestral ou anual), conforme o plano escolhido no momento da assinatura.</li>
              <li>Você pode cancelar a renovação automática a qualquer momento através do painel do usuário, antes do próximo ciclo de faturamento.</li>
              <li>Oferecemos uma garantia incondicional de 7 dias para novos assinantes. Após este período, não haverá reembolso proporcional por cancelamentos no meio do ciclo de faturamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Propriedade Intelectual e Confidencialidade</h2>
            <p>
              Todos os algoritmos, estratégias, códigos, sinais emitidos e conteúdos educacionais disponibilizados na plataforma ou no Grupo VIP são de propriedade exclusiva da CryptoPremium. É estritamente proibido compartilhar, revender, redistribuir ou copiar nossos sinais e configurações de bots para terceiros. A violação desta cláusula resultará no banimento imediato da plataforma sem direito a reembolso e possíveis medidas legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Disponibilidade do Serviço</h2>
            <p>
              Trabalhamos para manter a plataforma online 24/7. No entanto, não garantimos que o serviço será ininterrupto ou livre de erros. Manutenções programadas, falhas em servidores de terceiros (como a AWS ou a API das corretoras) ou eventos de força maior podem causar interrupções temporárias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Modificações dos Termos</h2>
            <p>
              A CryptoPremium reserva-se o direito de alterar estes Termos de Uso a qualquer momento. Notificaremos os usuários ativos sobre mudanças significativas via e-mail ou aviso na plataforma. O uso contínuo do serviço após as alterações constitui aceitação dos novos termos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
