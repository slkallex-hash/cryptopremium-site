import { Article } from "./articles";

export const iaArticles: Article[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `ia-${i + 1}`,
  slug: `inteligencia-artificial-artigo-${i + 1}`,
  title: [
    "O Futuro da IA Generativa em 2026",
    "Como a IA está transformando a medicina moderna",
    "IA e Ética: Os desafios da regulamentação global",
    "O impacto da IA no mercado de trabalho criativo",
    "Modelos de Linguagem: O que vem depois do GPT-5?",
    "IA na Educação: Personalização do aprendizado",
    "Cibersegurança e IA: A nova corrida armamentista",
    "IA Generativa para Vídeos: A revolução do cinema",
    "O papel da IA na sustentabilidade ambiental",
    "IA e Robótica: A automação do mundo físico",
    "Deepfakes: Como identificar conteúdos sintéticos",
    "IA na Justiça: Algoritmos e decisões judiciais",
    "O custo energético do treinamento de IAs",
    "IA e Saúde Mental: Chatbots terapêuticos",
    "A democratização da IA: Ferramentas open-source",
    "IA no Marketing: Hiper-personalização de campanhas",
    "O futuro da busca: Como a IA está mudando o Google",
    "IA e Música: Composição assistida por algoritmos",
    "Visão Computacional: O fim da privacidade urbana?",
    "IA e Espaço: A exploração autônoma de Marte"
  ][i],
  excerpt: "Uma análise profunda sobre como a inteligência artificial está moldando o futuro da nossa sociedade e tecnologia.",
  content: `
    <p>A inteligência artificial não é mais uma promessa do futuro, mas uma realidade que permeia quase todos os aspectos da nossa vida digital e física. Neste artigo, exploramos as nuances desta tecnologia que está redefinindo o que é possível.</p>
    <h2>O Estado Atual da Tecnologia</h2>
    <p>Com o avanço dos modelos de fundação, vimos uma explosão de capacidades que antes eram consideradas exclusivas dos seres humanos. Da criação de arte à resolução de problemas matemáticos complexos, a IA está superando expectativas.</p>
    <p>No entanto, com grandes poderes vêm grandes responsabilidades. A questão da ética e da transparência nunca foi tão crítica.</p>
    <blockquote>"A IA é provavelmente a coisa mais importante em que a humanidade já trabalhou. É mais profunda que o fogo ou a eletricidade." - Sundar Pichai</blockquote>
    <h2>Desafios e Oportunidades</h2>
    <p>O principal desafio hoje é garantir que o desenvolvimento da IA seja alinhado com os valores humanos. A segurança dos modelos e a mitigação de vieses são prioridades para pesquisadores em todo o mundo.</p>
    <p>Por outro lado, as oportunidades são infinitas. Na medicina, a IA está ajudando a descobrir novos medicamentos em frações do tempo que levaria anteriormente. Na educação, tutores personalizados estão ajudando alunos a aprender no seu próprio ritmo.</p>
    <div class="my-10 border-y border-dashed border-zinc-800 py-6 flex flex-col items-center justify-center bg-zinc-900/20 rounded-xl">
      <span class="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold mb-1">Advertisement</span>
      <span class="text-sm text-zinc-500">Espaço reservado para parceiros</span>
    </div>
    <h2>Conclusão</h2>
    <p>Estamos apenas no começo desta jornada. O que veremos nos próximos anos provavelmente superará tudo o que vimos até agora. A colaboração entre humanos e máquinas será a chave para resolver os maiores problemas da humanidade.</p>
  `,
  category: "ia",
  imageUrl: `https://picsum.photos/seed/ia-${i + 1}/1200/800`,
  author: ["Roberto Almeida", "Sarah Chen", "Ana Souza"][i % 3] + " – Especialista em IA",
  date: new Date(Date.now() - i * 86400000).toISOString(),
  readTime: `${Math.floor(Math.random() * 5) + 3} min`,
  trending: i < 3
}));
