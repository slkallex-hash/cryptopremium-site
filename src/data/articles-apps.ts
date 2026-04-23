import { Article } from "./articles";

export const appsArticles: Article[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `apps-${i + 1}`,
  slug: `aplicativos-artigo-${i + 1}`,
  title: [
    "O impacto da inteligência artificial nos apps de produtividade",
    "Como o novo app de finanças está mudando o mercado",
    "Apps de Saúde Mental: O que realmente funciona?",
    "A revolução dos apps de edição de vídeo mobile",
    "Privacidade em Apps: O que as empresas sabem sobre você?",
    "Apps de Idiomas: A fluência está a um clique?",
    "O futuro dos apps de entrega: Drones e robôs",
    "Apps de Streaming: A guerra pelo seu tempo",
    "Como criar seu próprio app sem saber programar",
    "Apps de Realidade Aumentada: O novo varejo digital",
    "Apps de Exercícios: Sua academia no bolso",
    "A volta dos apps de redes sociais de nicho",
    "Apps de Viagem: Planejamento inteligente com IA",
    "Segurança em Apps Bancários: O que você precisa saber",
    "Apps de Meditação: A busca pela paz digital",
    "O impacto dos apps de namoro na sociedade moderna",
    "Apps de Fotografia: Transformando celular em DSLR",
    "Apps de Notícias: O fim do feed algorítmico?",
    "Apps de Jogos: A ascensão do cloud gaming mobile",
    "Apps de Sustentabilidade: Como reduzir sua pegada"
  ][i],
  excerpt: "Descubra as novidades, tendências e análises dos aplicativos que estão dominando o mercado e facilitando o nosso dia a dia.",
  content: `
    <p>Os aplicativos móveis tornaram-se a interface principal através da qual interagimos com o mundo digital. De serviços bancários a entretenimento, tudo está ao alcance de um toque.</p>
    <h2>A Evolução da Experiência do Usuário</h2>
    <p>A UX (User Experience) evoluiu drasticamente. Hoje, os apps são mais rápidos, intuitivos e personalizados do que nunca, graças ao uso de inteligência artificial no backend.</p>
    <p>No entanto, o excesso de notificações e o tempo de tela tornaram-se preocupações centrais para desenvolvedores e usuários.</p>
    <blockquote>"O melhor app é aquele que resolve um problema real de forma tão simples que você nem percebe que está usando tecnologia."</blockquote>
    <h2>Segurança e Privacidade</h2>
    <p>Com tantos dados pessoais sendo processados, a segurança tornou-se o pilar fundamental. Criptografia de ponta a ponta e autenticação biométrica são agora o padrão mínimo esperado.</p>
    <p>Os usuários estão cada vez mais conscientes de seus direitos de dados, forçando as empresas a serem mais transparentes sobre suas práticas de coleta.</p>
    <div class="my-10 border-y border-dashed border-zinc-800 py-6 flex flex-col items-center justify-center bg-zinc-900/20 rounded-xl">
      <span class="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold mb-1">Advertisement</span>
      <span class="text-sm text-zinc-500">Espaço reservado para parceiros</span>
    </div>
    <h2>Conclusão</h2>
    <p>O futuro dos apps está na integração perfeita entre diferentes dispositivos e na personalização extrema. O app que você usa hoje será muito diferente do que você usará amanhã.</p>
  `,
  category: "apps",
  imageUrl: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512428559083-a40ce12b495c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512428559083-a40ce12b495c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  ][i],
  author: ["Marcos Silva", "Lucas Costa", "Ana Souza"][i % 3] + " – Repórter de Hardware & Gadgets",
  authorId: ["marcos-silva", "lucas-costa", "ana-souza"][i % 3],
  tags: ["Apps", "Aplicativos", "Mobile", "Tecnologia"],
  date: new Date(Date.now() - i * 86400000).toISOString(),
  readTime: `${Math.floor(Math.random() * 5) + 3} min`,
  trending: i < 3
}));
