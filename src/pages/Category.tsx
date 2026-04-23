import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles, categories, authors } from "@/data/articles";
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
  }, [slug]);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <Helmet>
          <title>Categoria não encontrada | TechFront</title>
        </Helmet>
        <h1 className="text-4xl font-bold text-zinc-100">Categoria não encontrada</h1>
        <Link to="/" className="text-blue-400 hover:underline flex items-center">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-5xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{category.name} | TechFront</title>
        <meta name="description" content={`Últimas notícias, análises e tendências sobre ${category.name.toLowerCase()} no TechFront.`} />
        <meta property="og:title" content={`${category.name} | TechFront`} />
        <meta property="og:description" content={`Últimas notícias, análises e tendências sobre ${category.name.toLowerCase()} no TechFront.`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}/category/${category.slug}`} />
      </Helmet>
      {/* Top Banner Ad */}
      <AdSlot id="category-top-banner" type="banner" className="mb-8 rounded-xl" />

      <header className="mb-12 border-b border-white/10 pb-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight break-words">
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
        <div className="space-y-8 md:space-y-12">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {categoryArticles.slice(0, 4).map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col glass rounded-2xl overflow-hidden border border-white/5 hover:bg-white/5 transition-all">
                <div className="relative h-40 md:h-64 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center text-[8px] md:text-xs text-zinc-500 font-medium mb-2 md:mb-4 uppercase tracking-wider">
                    <Clock className="w-3 md:w-3.5 h-3 md:h-3.5 mr-1 md:mr-1.5" /> {article.readTime}
                    <span className="mx-1.5 md:mx-2 text-zinc-800">•</span>
                    {authors.find(a => a.id === article.authorId)?.name || "Redação TechFront"}
                  </div>
                  <h3 className="text-sm md:text-2xl font-display font-bold text-zinc-100 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {categoryArticles.length > 4 && (
            <>
              <AdSlot id="category-middle-banner" type="banner" className="my-12 rounded-xl" />
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {categoryArticles.slice(4).map((article) => (
                  <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col glass rounded-2xl overflow-hidden border border-white/5 hover:bg-white/5 transition-all">
                    <div className="relative h-40 md:h-64 overflow-hidden">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center text-[8px] md:text-xs text-zinc-500 font-medium mb-2 md:mb-4 uppercase tracking-wider">
                        <Clock className="w-3 md:w-3.5 h-3 md:h-3.5 mr-1 md:mr-1.5" /> {article.readTime}
                        <span className="mx-1.5 md:mx-2 text-zinc-800">•</span>
                        {authors.find(a => a.id === article.authorId)?.name || "Redação TechFront"}
                      </div>
                      <h3 className="text-sm md:text-2xl font-display font-bold text-zinc-100 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
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
