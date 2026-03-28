import { bitcoinArticles } from "./articles-bitcoin";
import { altcoinsArticles } from "./articles-altcoins";
import { economiaArticles } from "./articles-economia";
import { investimentosArticles } from "./articles-investimentos";
import { tecnologiaArticles } from "./articles-tecnologia";
import { rendaOnlineArticles } from "./articles-renda-online";
import { iaArticles } from "./articles-ia";
import { appsArticles } from "./articles-apps";
import { internetArticles } from "./articles-internet";
import { tutoriaisArticles } from "./articles-tutoriais";

import { Author, authors } from "./authors";
export { Author, authors };

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  authorId: string;
  author: string;
  date: string;
  readTime: string;
  trending?: boolean;
  tags?: string[];
}

export const categories: Category[] = [
  { id: "c1", name: "Tecnologia", slug: "tecnologia", description: "Inovações, gadgets, startups e o futuro do mercado tech." },
  { id: "c2", name: "Inteligência Artificial", slug: "ia", description: "O impacto da IA generativa, machine learning e automação." },
  { id: "c3", name: "Criptomoedas", slug: "criptomoedas", description: "Bitcoin, Ethereum, Web3 e o mercado de ativos digitais." },
  { id: "c4", name: "Apps", slug: "apps", description: "Novos aplicativos, atualizações e análises de software." },
  { id: "c5", name: "Internet", slug: "internet", description: "Redes sociais, cibersegurança, cultura digital e tendências da web." },
  { id: "c6", name: "Tutoriais", slug: "tutoriais", description: "Guias passo a passo, dicas de produtividade e como fazer." },
  { id: "c7", name: "Todas as Notícias", slug: "todas", description: "As últimas atualizações do mundo da tecnologia em tempo real." },
];

export const articles: Article[] = [
  ...tecnologiaArticles,
  ...iaArticles,
  ...bitcoinArticles,
  ...altcoinsArticles,
  ...appsArticles,
  ...internetArticles,
  ...tutoriaisArticles,
  ...economiaArticles,
  ...investimentosArticles,
  ...rendaOnlineArticles,
];
