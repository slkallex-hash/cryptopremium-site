import { Article } from "./articles";

export const internetArticles: Article[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `internet-${i + 1}`,
  slug: `internet-artigo-${i + 1}`,
  title: [
    "A Evolução da Internet: Do 5G ao 6G",
    "Cibersegurança em 2026: Como se proteger",
    "O fim dos cookies e o futuro do marketing digital",
    "Redes Sociais: O impacto na saúde mental",
    "A internet das coisas (IoT) em nossas casas",
    "Cultura Digital: Memes e a nova linguagem",
    "O impacto da internet na democracia global",
    "Privacidade Online: O direito ao esquecimento",
    "A neutralidade da rede em debate novamente",
    "O futuro do trabalho remoto e a conectividade",
    "Internet por Satélite: Conectando o mundo",
    "A ascensão do metaverso e a vida digital",
    "Ciberataques: As maiores ameaças de hoje",
    "O papel da internet na educação a distância",
    "A economia da atenção e o design persuasivo",
    "Blockchain e a nova internet descentralizada",
    "O impacto ambiental dos data centers globais",
    "A internet como direito humano fundamental",
    "O futuro do e-commerce e as redes sociais",
    "Cibercrimes: Como as leis estão mudando"
  ][i],
  excerpt: "Uma visão abrangente sobre a rede mundial de computadores, suas tendências, desafios e o impacto profundo em nossas vidas.",
  content: `
    <p>A internet deixou de ser apenas uma ferramenta para se tornar o tecido que conecta a humanidade. De comunicações instantâneas a transações financeiras globais, tudo depende da rede.</p>
    <h2>Conectividade Global</h2>
    <p>Com o avanço de tecnologias como o 5G e a internet por satélite, estamos chegando mais perto de conectar cada pessoa no planeta. Isso traz oportunidades imensas, mas também desafios de infraestrutura e segurança.</p>
    <p>A velocidade da informação mudou a forma como consumimos notícias e interagimos com a realidade.</p>
    <blockquote>"A internet é a primeira coisa que a humanidade construiu que a humanidade não entende, o maior experimento de anarquia que já tivemos." - Eric Schmidt</blockquote>
    <h2>Segurança e Liberdade</h2>
    <p>O equilíbrio entre segurança e liberdade individual é o grande debate da nossa era. Como proteger os usuários sem comprometer a privacidade? Como combater a desinformação sem censurar o discurso?</p>
    <p>A cibersegurança tornou-se uma prioridade não apenas para empresas, mas para governos e indivíduos comuns.</p>
    <div class="my-10 border-y border-dashed border-zinc-800 py-6 flex flex-col items-center justify-center bg-zinc-900/20 rounded-xl">
      <span class="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold mb-1">Advertisement</span>
      <span class="text-sm text-zinc-500">Espaço reservado para parceiros</span>
    </div>
    <h2>Conclusão</h2>
    <p>A internet continuará a evoluir de formas que mal podemos imaginar. A chave será garantir que essa evolução beneficie a todos, promovendo a inclusão e o conhecimento.</p>
  `,
  category: "internet",
  imageUrl: `https://picsum.photos/seed/internet-${i + 1}/1200/800`,
  author: ["Sarah Chen", "Lucas Costa", "Roberto Almeida"][i % 3] + " – Diretora de Conteúdo & Cultura Digital",
  date: new Date(Date.now() - i * 86400000).toISOString(),
  readTime: `${Math.floor(Math.random() * 5) + 3} min`,
  trending: i < 3
}));
