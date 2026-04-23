import { bitcoinArticles } from "./articles-bitcoin";
import { altcoinsArticles } from "./articles-altcoins";
import { economiaArticles } from "./articles-economia";
import { investimentosArticles } from "./articles-investimentos";
import { rendaOnlineArticles } from "./articles-renda-online";
import { tutoriaisArticles } from "./articles-tutoriais";

import type { Author } from "./authors";
import { authors } from "./authors";
export type { Author };
export { authors };

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
  metaDescription?: string;
  keywords?: string[];
}

export const categories: Category[] = [
  { id: "c3", name: "Criptomoedas", slug: "criptomoedas", description: "Bitcoin, Ethereum, Web3 e o mercado de ativos digitais." },
  { id: "c6", name: "Tutoriais", slug: "tutoriais", description: "Guias passo a passo, dicas de produtividade e como fazer." },
  { id: "c7", name: "Todas as Notícias", slug: "todas", description: "As últimas atualizações do mundo da Cripto e tutoriais em tempo real." },
];

export const articles: Article[] = [
  ...bitcoinArticles,
  ...altcoinsArticles,
  ...tutoriaisArticles,
  ...economiaArticles,
  ...investimentosArticles,
  ...rendaOnlineArticles,
];
