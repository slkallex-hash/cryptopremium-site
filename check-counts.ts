import { articles } from "./src/data/articles";

const categories = [
  "tecnologia",
  "ia",
  "criptomoedas",
  "apps",
  "internet",
  "tutoriais",
  "economia",
  "investimentos",
  "renda-online"
];

const counts = categories.reduce((acc, cat) => {
  acc[cat] = articles.filter(a => a.category === cat).length;
  return acc;
}, {} as Record<string, number>);

console.log(JSON.stringify(counts, null, 2));
