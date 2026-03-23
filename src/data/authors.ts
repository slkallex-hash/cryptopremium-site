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
    id: "carlos-mendes",
    name: "Carlos Mendes",
    role: "Editor-chefe & Analista Macro",
    bio: "Especialista em mercados financeiros com mais de 10 anos de experiência. Carlos foca em como a macroeconomia global afeta o ecossistema das criptomoedas.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "marina-costa",
    name: "Marina Costa",
    role: "Analista On-chain & DeFi",
    bio: "Marina é apaixonada por dados. Ela utiliza análise on-chain para identificar tendências e oportunidades no setor de Finanças Descentralizadas (DeFi).",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "thiago-silva",
    name: "Thiago Silva",
    role: "Especialista em Web3 & NFTs",
    bio: "Thiago acompanha a evolução da Web3 desde o início. Seu foco está em NFTs, jogos play-to-earn e o futuro da propriedade digital.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    social: {
      linkedin: "https://linkedin.com"
    }
  }
];
