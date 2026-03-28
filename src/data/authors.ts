export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export const authors: Author[] = [
  {
    id: "roberto-almeida",
    name: "Roberto Almeida",
    role: "Editor-Chefe & Especialista em IA",
    bio: "Jornalista com mais de 15 anos de cobertura no setor de tecnologia. Ex-editor de grandes portais e especialista em inteligência artificial e políticas digitais.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Diretora de Conteúdo & Cultura Digital",
    bio: "Especialista em cultura digital e Web3. Coordena a equipe de repórteres e garante a qualidade e profundidade de todas as nossas análises e tutoriais.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "marcos-silva",
    name: "Marcos Silva",
    role: "Repórter de Hardware & Gadgets",
    bio: "Marcos é apaixonado por hardware. Ele testa e analisa os últimos lançamentos de smartphones, notebooks e dispositivos inteligentes do mercado.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "lucas-costa",
    name: "Lucas Costa",
    role: "Analista de Cibersegurança",
    bio: "Lucas é um especialista em segurança da informação. Ele traduz a complexidade técnica de vulnerabilidades e ataques em insights acionáveis para os leitores.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "ana-souza",
    name: "Ana Souza",
    role: "Especialista em Startups & Negócios",
    bio: "Ana possui vasta experiência no ecossistema de startups. Ela analisa tendências de mercado, rodadas de investimento e o impacto das novas tecnologias nos negócios.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "techfront",
    name: "Redação TechFront",
    role: "Equipe Editorial",
    bio: "Nossa equipe de jornalistas e especialistas em tecnologia que trazem as últimas notícias e análises do mundo digital.",
    imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com"
    }
  }
];
