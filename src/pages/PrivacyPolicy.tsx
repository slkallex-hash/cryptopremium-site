import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { AdSlot } from "@/components/AdSlot";

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Política de Privacidade | CryptoPremium";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Ad */}
      <AdSlot id="privacy-top-banner" type="banner" className="mb-12 rounded-2xl" />

      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
          <ShieldCheck className="w-8 h-8 text-zinc-950" strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
          Política de Privacidade
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none space-y-8 text-zinc-300">
        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
          <p>
            A sua privacidade é importante para o <strong>CryptoPremium</strong>. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site (cryptopremium.space). Ao utilizar nosso portal, você concorda com as práticas descritas neste documento.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Coleta de Dados</h2>
          <p>
            Coletamos informações de duas maneiras principais:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Dados fornecidos por você:</strong> Informações que você insere voluntariamente ao se inscrever em nossa newsletter ou preencher formulários de contato (como nome e e-mail).</li>
            <li><strong>Dados coletados automaticamente:</strong> Quando você acessa o site, coletamos automaticamente certas informações sobre o seu dispositivo, incluindo seu endereço IP, tipo de navegador, fuso horário e alguns dos cookies instalados no seu dispositivo. Além disso, à medida que você navega, coletamos informações sobre as páginas da web ou artigos individuais que você visualiza e como você interage com o site.</li>
          </ul>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Uso de Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Utilizamos "cookies" e tecnologias semelhantes para rastrear a atividade em nosso site e armazenar certas informações. Os cookies são arquivos com uma pequena quantidade de dados que podem incluir um identificador anônimo exclusivo.
          </p>
          <p className="mt-4">
            <strong>Cookies de Publicidade:</strong> Nossos parceiros de publicidade (redes de anúncios de terceiros) podem usar cookies e web beacons para coletar dados não pessoais sobre suas atividades neste e em outros sites para fornecer publicidade direcionada com base em seus interesses.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Redes de Anúncios e Terceiros</h2>
          <p>
            O CryptoPremium é monetizado através da exibição de anúncios. Trabalhamos com redes de publicidade de terceiros (como TrafficStars, A-ADS, entre outras) que podem utilizar tecnologias como cookies, JavaScript ou Web Beacons em seus respectivos anúncios e links que aparecem em nosso site.
          </p>
          <p className="mt-4">
            Essas tecnologias são usadas para medir a eficácia de suas campanhas publicitárias e/ou para personalizar o conteúdo publicitário que você vê em sites que visita. O CryptoPremium não tem acesso ou controle sobre esses cookies que são usados por anunciantes terceiros.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. Conformidade com a LGPD (Lei Geral de Proteção de Dados)</h2>
          <p>
            Em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) do Brasil, garantimos aos nossos usuários os seguintes direitos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Acesso:</strong> Você tem o direito de solicitar cópias de seus dados pessoais.</li>
            <li><strong>Correção:</strong> Você tem o direito de solicitar a correção de qualquer informação que acredite estar imprecisa ou incompleta.</li>
            <li><strong>Exclusão:</strong> Você tem o direito de solicitar a exclusão de seus dados pessoais, sob certas condições.</li>
            <li><strong>Restrição de processamento:</strong> Você tem o direito de solicitar a restrição do processamento de seus dados pessoais.</li>
            <li><strong>Oposição ao processamento:</strong> Você tem o direito de se opor ao nosso processamento de seus dados pessoais.</li>
          </ul>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">6. Segurança das Informações</h2>
          <p>
            Empregamos medidas de segurança administrativas, técnicas e físicas para ajudar a proteger suas informações pessoais. Embora tenhamos tomado medidas razoáveis para proteger as informações que você nos fornece, esteja ciente de que, apesar de nossos esforços, nenhuma medida de segurança é perfeita ou impenetrável, e nenhum método de transmissão de dados pode ser garantido contra qualquer interceptação ou outro tipo de uso indevido.
          </p>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
          <p>
            Se você tiver dúvidas ou sugestões sobre nossa Política de Privacidade, ou se desejar exercer seus direitos sob a LGPD, não hesite em nos contatar através do e-mail:
          </p>
          <p className="mt-4 font-bold text-emerald-400">
            contato@cryptopremium.space
          </p>
        </section>
      </div>
    </div>
  );
}
