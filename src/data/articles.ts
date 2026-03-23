import { bitcoinArticles } from "./articles-bitcoin";
import { altcoinsArticles } from "./articles-altcoins";
import { economiaArticles } from "./articles-economia";
import { investimentosArticles } from "./articles-investimentos";
import { tecnologiaArticles } from "./articles-tecnologia";
import { rendaOnlineArticles } from "./articles-renda-online";

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
  author: string;
  date: string;
  readTime: string;
  trending?: boolean;
}

export const categories: Category[] = [
  { id: "c1", name: "Bitcoin", slug: "bitcoin", description: "Tudo sobre a maior criptomoeda do mundo." },
  { id: "c2", name: "Altcoins", slug: "altcoins", description: "Análises e notícias sobre Ethereum, Solana, Cardano e outras altcoins." },
  { id: "c3", name: "Economia", slug: "economia", description: "Impacto macroeconômico, inflação e o mercado financeiro tradicional." },
  { id: "c4", name: "Investimentos", slug: "investimentos", description: "Estratégias de portfólio, análise fundamentalista e gestão de risco." },
  { id: "c5", name: "Tecnologia", slug: "tecnologia", description: "Inovações em blockchain, IA, Web3 e segurança digital." },
  { id: "c6", name: "Renda Online", slug: "renda-online", description: "Airdrops, DeFi, staking, NFTs e oportunidades de monetização na Web3." },
  { id: "c7", name: "Notícias Urgentes", slug: "noticias-urgentes", description: "As últimas atualizações do mercado cripto em tempo real." },
];

export const articles: Article[] = [
  ...bitcoinArticles,
  ...altcoinsArticles,
  ...economiaArticles,
  ...investimentosArticles,
  ...tecnologiaArticles,
  ...rendaOnlineArticles,
];
