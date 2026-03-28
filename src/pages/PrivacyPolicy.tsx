import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Política de Privacidade | TechFront";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
            <ShieldCheck className="w-8 h-8 text-blue-400" strokeWidth={2} />
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
              O <strong>TechFront</strong> leva a sua privacidade e a segurança dos seus dados a sério. Como um portal de jornalismo de tecnologia, entendemos que a transparência é a base da confiança. Esta Política de Privacidade explica como coletamos, usamos, protegemos e processamos suas informações ao utilizar nosso site, assinar nossa newsletter ou interagir com nosso conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Dados que Coletamos</h2>
            <p className="mb-4">Coletamos informações estritamente necessárias para melhorar sua experiência:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>Dados de Cadastro:</strong> Nome e e-mail ao assinar nossa newsletter ou criar uma conta para comentar (quando aplicável).</li>
              <li><strong>Dados de Navegação:</strong> Utilizamos cookies e tecnologias semelhantes para entender como você interage com o site (páginas visitadas, tempo de leitura, cliques em anúncios).</li>
              <li><strong>Dados Técnicos:</strong> Endereço IP anonimizado, tipo de navegador, dispositivo e sistema operacional para fins de otimização e segurança.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Como Utilizamos seus Dados</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Para personalizar sua experiência de leitura e recomendar artigos relevantes.</li>
              <li>Para enviar a newsletter diária ou semanal (apenas se você optou por recebê-la).</li>
              <li>Para analisar o tráfego do site e melhorar a qualidade do nosso jornalismo.</li>
              <li>Para exibir anúncios mais relevantes através de nossos parceiros de publicidade (veja a seção sobre Cookies).</li>
              <li>Para prevenir fraudes, spam nos comentários e garantir a segurança da plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies e Publicidade</h2>
            <p>
              O TechFront é financiado em parte por publicidade. Utilizamos cookies de terceiros (como Google AdSense e Mybid) para veicular anúncios. Esses parceiros podem coletar dados não identificáveis pessoalmente sobre suas visitas a este e outros sites para fornecer anúncios sobre bens e serviços de seu interesse. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
            <p>
              <strong>Nós não vendemos seus dados pessoais.</strong> Compartilhamos informações apenas com provedores de serviços essenciais (como plataformas de envio de e-mail e ferramentas de analytics) estritamente para a operação do portal, ou quando exigido por lei mediante ordem judicial válida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos (LGPD)</h2>
            <p className="mb-4">
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Solicitar acesso aos dados que temos sobre você.</li>
              <li>Solicitar a correção de dados incompletos ou imprecisos.</li>
              <li>Solicitar a exclusão dos seus dados (direito ao esquecimento), incluindo o cancelamento da assinatura da newsletter.</li>
              <li>Revogar o consentimento para o uso de cookies não essenciais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contato para Privacidade</h2>
            <p>
              Para exercer seus direitos, cancelar assinaturas ou tirar dúvidas sobre como tratamos seus dados, entre em contato com nossa equipe através do e-mail:
            </p>
            <p className="mt-4 font-bold text-blue-400">
              privacidade@techfront.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
