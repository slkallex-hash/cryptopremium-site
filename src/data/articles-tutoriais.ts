import { Article } from "./articles";

export const tutoriaisArticles: Article[] = Array.from({ length: 19 }).map((_, i) => ({
  id: `tutoriais-${i + 1}`,
  slug: `tutoriais-artigo-${i + 1}`,
  title: [
    "Guia Completo: Como usar o ChatGPT para produtividade",
    "Tutorial: Criando seu primeiro site com IA",
    "Como configurar uma VPN segura em 5 minutos",
    "Dicas de Segurança: Como evitar golpes no WhatsApp",
    "Tutorial: Editando vídeos profissionais no celular",
    "Como otimizar o desempenho do seu Mac em 2026",
    "Guia: Como investir em criptomoedas com segurança",
    "Tutorial: Configurando sua casa inteligente (IoT)",
    "Como fazer backup automático de todos os seus dados",
    "Dicas de Produtividade: Como organizar seu e-mail",
    "Tutorial: Criando artes incríveis com Midjourney",
    "Como remover vírus e malwares do seu computador",
    "Guia: Como usar o Notion para organizar sua vida",
    "Tutorial: Configurando autenticação de dois fatores",
    "Como melhorar a velocidade do seu Wi-Fi doméstico",
    "Dicas de Fotografia: Como tirar fotos melhores no celular",
    "Tutorial: Criando um canal no YouTube do zero",
    "Como usar o Excel para finanças pessoais",
    "Guia: Como proteger seus dados em redes públicas"
  ][i],
  excerpt: "Aprenda passo a passo como dominar as ferramentas digitais mais importantes e resolver problemas comuns de tecnologia.",
  content: `
    <p>Nesta série de tutoriais, nosso objetivo é simplificar a tecnologia para você. Seja você um iniciante ou um usuário avançado, sempre há algo novo para aprender.</p>
    <h2>Passo a Passo Detalhado</h2>
    <p>Nossos guias são elaborados por especialistas que testam cada ferramenta e configuração. Acreditamos que o conhecimento deve ser acessível e fácil de seguir.</p>
    <p>Siga as instruções cuidadosamente para obter os melhores resultados e evitar erros comuns.</p>
    <blockquote>"O conhecimento é a única ferramenta que se multiplica quando compartilhada."</blockquote>
    <h2>Dicas de Especialistas</h2>
    <p>Além do básico, incluímos dicas avançadas que podem economizar horas do seu tempo. Pequenos ajustes podem fazer uma grande diferença na sua produtividade.</p>
    <p>Mantenha suas ferramentas sempre atualizadas para garantir a segurança e o acesso às novas funcionalidades.</p>
    <div class="my-10 border-y border-dashed border-zinc-800 py-6 flex flex-col items-center justify-center bg-zinc-900/20 rounded-xl">
      <span class="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold mb-1">Advertisement</span>
      <span class="text-sm text-zinc-500">Espaço reservado para parceiros</span>
    </div>
    <h2>Conclusão</h2>
    <p>Esperamos que este guia tenha sido útil. Se você tiver alguma dúvida ou sugestão de novos temas, entre em contato conosco.</p>
  `,
  category: "tutoriais",
  imageUrl: `https://picsum.photos/seed/tutoriais-${i + 1}/1200/800`,
  author: ["Ana Souza", "Marcos Silva", "Lucas Costa"][i % 3] + " – Especialista em Negócios & Startups",
  authorId: ["ana-souza", "marcos-silva", "lucas-costa"][i % 3],
  tags: ["Tutorial", "Guia", "Tecnologia", "Produtividade"],
  date: new Date(Date.now() - i * 86400000).toISOString(),
  readTime: `${Math.floor(Math.random() * 5) + 3} min`,
  trending: i < 3
}));
