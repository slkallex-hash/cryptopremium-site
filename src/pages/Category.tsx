import { useParams, Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { AdSlot } from "@/components/AdSlot";
import { Clock, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug || c.id === slug);
  const categoryArticles = articles.filter(a => a.category === category?.slug || a.category === category?.id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      document.title = `${category.name} | CryptoPremium`;
    }
  }, [slug, category]);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <h1 className="text-4xl font-bold text-zinc-100">Categoria não encontrada</h1>
        <Link to="/" className="text-emerald-400 hover:underline flex items-center">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Top Banner Ad */}
      <AdSlot id="category-top-banner" type="banner" className="mb-8 rounded-xl" />

      <header className="mb-12 border-b border-zinc-800/50 pb-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
          {category.name}
        </h1>
        <p className="text-xl text-zinc-400 font-medium">
          Últimas notícias, análises e tendências sobre {category.name.toLowerCase()}.
        </p>
      </header>

      {categoryArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-500 text-lg">Nenhum artigo encontrado nesta categoria.</p>
        </div>
      ) : (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryArticles.slice(0, 4).map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col bg-[#09090b] rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-black/50">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center text-xs text-zinc-500 font-medium mb-4 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 mr-1.5" /> {article.readTime}
                    <span className="mx-2 text-zinc-800">•</span>
                    {article.author.split(' – ')[0]}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-6 line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <div className="mt-auto flex items-center text-emerald-400 text-sm font-bold uppercase tracking-wider">
                    Ler artigo <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {categoryArticles.length > 4 && (
            <>
              <AdSlot id="category-middle-banner" type="banner" className="my-12 rounded-xl" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryArticles.slice(4).map((article) => (
                  <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col bg-[#09090b] rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-black/50">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center text-xs text-zinc-500 font-medium mb-4 uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5 mr-1.5" /> {article.readTime}
                        <span className="mx-2 text-zinc-800">•</span>
                        {article.author.split(' – ')[0]}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-6 line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      <div className="mt-auto flex items-center text-emerald-400 text-sm font-bold uppercase tracking-wider">
                        Ler artigo <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Bottom Banner Ad */}
      <AdSlot id="category-bottom-banner" type="banner" className="mt-16 mb-8 rounded-xl" />
    </div>
  );
}
