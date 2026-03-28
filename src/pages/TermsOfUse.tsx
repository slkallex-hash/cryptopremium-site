import { useEffect } from "react";
import { FileText } from "lucide-react";

export function TermsOfUse() {
  useEffect(() => {
    document.title = "Termos de Uso | TechFront";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
            <FileText className="w-8 h-8 text-blue-500" strokeWidth={2} />
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
              Ao acessar e utilizar o portal de notícias <strong>TechFront</strong>, você concorda expressamente em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Natureza do Serviço e Conteúdo</h2>
            <p className="mb-4">
              O TechFront é um portal de jornalismo focado em tecnologia, inteligência artificial, ciência e inovação. <strong>Nosso conteúdo é estritamente informativo e educacional.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>As opiniões expressas por colunistas ou em artigos de opinião não refletem necessariamente a visão editorial do TechFront.</li>
              <li>Não fornecemos consultoria financeira, de investimentos ou jurídica. Artigos sobre criptomoedas ou mercado financeiro são apenas para fins informativos.</li>
              <li>O TechFront não se responsabiliza por decisões tomadas com base nas informações publicadas no site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Propriedade Intelectual e Direitos Autorais</h2>
            <p>
              Todo o conteúdo publicado no TechFront, incluindo textos, artigos, imagens, logotipos, vídeos e design, é protegido por leis de direitos autorais e propriedade intelectual. É estritamente proibida a reprodução, cópia, distribuição ou modificação do nosso conteúdo sem autorização prévia e expressa por escrito. Citações curtas são permitidas desde que acompanhadas do devido crédito e link (backlink) para a matéria original no TechFront.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Comentários e Conduta do Usuário</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Incentivamos o debate saudável nas áreas de comentários (quando disponíveis).</li>
              <li>Não toleramos discursos de ódio, racismo, homofobia, assédio, spam, links maliciosos ou ataques pessoais.</li>
              <li>O TechFront reserva-se o direito de moderar, editar ou excluir comentários que violem estas regras, bem como banir usuários infratores sem aviso prévio.</li>
              <li>Os comentários são de responsabilidade exclusiva de seus autores.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Links para Sites de Terceiros</h2>
            <p>
              Nossos artigos podem conter links para sites de terceiros (fontes, referências, parceiros ou anunciantes). O TechFront não tem controle sobre o conteúdo ou as práticas de privacidade desses sites e não assume qualquer responsabilidade por eles. A inclusão de um link não implica endosso do site vinculado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Disponibilidade e Alterações no Serviço</h2>
            <p>
              Trabalhamos para manter o portal acessível 24/7, mas não garantimos que o site estará livre de interrupções ou erros técnicos. O TechFront reserva-se o direito de modificar, suspender ou descontinuar qualquer parte do site ou serviço a qualquer momento, sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Modificações dos Termos</h2>
            <p>
              O TechFront reserva-se o direito de alterar estes Termos de Uso a qualquer momento. O uso contínuo do site após a publicação de alterações constitui a aceitação dos novos termos. Recomendamos que você revise esta página periodicamente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
