import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Política de Privacidade | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
            <ShieldCheck className="w-8 h-8 text-cyan-400" strokeWidth={2} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introdução e Compromisso</h2>
            <p>
              A <strong>CryptoPremium</strong> leva a sua privacidade e a segurança dos seus dados extremamente a sério. Como uma plataforma de tecnologia financeira, entendemos que a confidencialidade é a base da confiança. Esta Política de Privacidade explica como coletamos, usamos, protegemos e processamos suas informações ao utilizar nossos serviços, bots de automação e plataforma de sinais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Dados que Coletamos</h2>
            <p className="mb-4">Coletamos informações estritamente necessárias para o funcionamento seguro da plataforma:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>Dados de Cadastro:</strong> Nome, e-mail, telefone e informações de faturamento ao assinar um plano.</li>
              <li><strong>Dados de Conexão (API):</strong> Chaves de API (somente leitura e execução de ordens, NUNCA permissão de saque) fornecidas por você para a automação dos bots. Estas chaves são criptografadas de ponta a ponta.</li>
              <li><strong>Dados de Uso:</strong> Logs de acesso, endereço IP, tipo de dispositivo e métricas de interação com a plataforma para fins de segurança e otimização.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Como Utilizamos seus Dados</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Para fornecer, operar e manter nossa plataforma de sinais e automação.</li>
              <li>Para processar transações e enviar avisos relacionados à sua assinatura.</li>
              <li>Para executar ordens de compra e venda em sua conta de corretora (exclusivamente via API configurada por você, conforme os parâmetros dos nossos bots).</li>
              <li>Para detectar, prevenir e resolver problemas técnicos ou de segurança (ex: prevenção a fraudes).</li>
              <li>Para enviar atualizações importantes do mercado, alertas de sinais e comunicados essenciais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Proteção e Segurança (Criptografia)</h2>
            <p>
              Empregamos infraestrutura de segurança de nível institucional. Todas as chaves de API de corretoras fornecidas pelos usuários são armazenadas utilizando criptografia AES-256. A comunicação entre nossos servidores e o seu navegador é protegida por SSL/TLS. Limitamos o acesso aos seus dados pessoais apenas a funcionários essenciais que necessitam dessas informações para operar o serviço, todos sujeitos a rigorosos acordos de confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
            <p>
              <strong>Nós não vendemos, alugamos ou comercializamos seus dados pessoais.</strong> Compartilhamos informações apenas com provedores de serviços essenciais (como gateways de pagamento como Stripe/Hotmart) estritamente para a execução do serviço contratado, ou quando exigido por lei mediante ordem judicial válida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos (LGPD)</h2>
            <p className="mb-4">
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Acessar, corrigir ou atualizar seus dados pessoais a qualquer momento pelo painel.</li>
              <li>Solicitar a exclusão completa da sua conta e de todos os dados associados (direito ao esquecimento).</li>
              <li>Revogar o consentimento para o recebimento de comunicações de marketing.</li>
              <li>Excluir ou revogar suas chaves de API da nossa plataforma instantaneamente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contato para Privacidade</h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre como tratamos seus dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail:
            </p>
            <p className="mt-4 font-bold text-cyan-400">
              privacidade@cryptopremium.space
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
