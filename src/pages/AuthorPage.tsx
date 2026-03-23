import { useParams, Link } from "react-router-dom";
import { authors } from "@/data/authors";
import { articles } from "@/data/articles";
import { Clock, ChevronRight, Twitter, Linkedin, Instagram } from "lucide-react";
import { useEffect } from "react";

export function AuthorPage() {
  const { authorId } = useParams();
  const author = authors.find(a => a.id === authorId);

  useEffect(() => {
    if (author) {
      document.title = `${author.name} | CryptoPremium`;
      window.scrollTo(0, 0);
    }
  }, [author]);

  if (!author) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Autor não encontrado</h1>
        <p className="text-zinc-400 mb-8">O perfil que você está procurando não existe ou foi removido.</p>
        <Link to="/" className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
          Voltar para a Home
        </Link>
      </div>
    );
  }

  const authorArticles = articles.filter(a => a.author === author.name);

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": author.name,
          "jobTitle": author.role,
          "description": author.bio,
          "image": author.imageUrl,
          "url": window.location.href,
          "sameAs": [
            author.social.twitter,
            author.social.linkedin,
            author.social.instagram
          ].filter(Boolean)
        })}
      </script>

      {/* Author Header */}
      <section className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img 
            src={author.imageUrl} 
            alt={author.name}
            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover border-4 border-zinc-800 shadow-2xl"
          />
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">{author.name}</h1>
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">{author.role}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                {author.social.twitter && (
                  <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {author.social.linkedin && (
                  <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {author.social.instagram && (
                  <a href={author.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl">
              {author.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Author Articles */}
      <section>
        <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 mb-8">
          <h2 className="text-2xl font-display font-bold">Artigos de {author.name}</h2>
          <span className="text-zinc-500 text-sm font-medium">{authorArticles.length} artigos publicados</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authorArticles.map((article) => (
            <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col bg-zinc-900/30 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-emerald-500/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">
                  <span className="text-emerald-500/80">{article.category}</span>
                  <span className="mx-2 text-zinc-700">•</span>
                  <Clock className="w-3.5 h-3.5 mr-1.5" /> {article.readTime}
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <span className="text-emerald-400 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  Ler artigo <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
