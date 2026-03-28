import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { authors } from "@/data/authors";
import { articles } from "@/data/articles";
import { AdSlot } from "@/components/AdSlot";
import { Clock, ChevronRight, Twitter, Linkedin, Instagram } from "lucide-react";
import { useEffect } from "react";

export function AuthorPage() {
  const { authorId } = useParams();
  const author = authors.find(a => a.id === authorId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [authorId]);

  if (!author) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <Helmet>
          <title>Autor não encontrado | TechFront</title>
        </Helmet>
        <h1 className="text-4xl font-display font-bold text-white mb-4">Autor não encontrado</h1>
        <p className="text-zinc-400 mb-8">O perfil que você está procurando não existe ou foi removido.</p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors">
          Voltar para a Home
        </Link>
      </div>
    );
  }

  const authorArticles = articles.filter(a => a.authorId === author.id);

  return (
    <div className="max-w-5xl mx-auto space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{author.name} | TechFront</title>
        <meta name="description" content={author.bio} />
        <meta property="og:title" content={`${author.name} | TechFront`} />
        <meta property="og:description" content={author.bio} />
        <meta property="og:image" content={author.imageUrl} />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href={`${window.location.origin}/author/${author.id}`} />
      </Helmet>
      {/* Top Banner Ad */}
      <AdSlot id="author-top-banner" type="banner" className="mb-8 rounded-xl" />

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
      <section className="glass border border-white/10 rounded-3xl p-8 md:p-12">
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
                <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">{author.role}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                {author.social.twitter && (
                  <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 hover:text-white hover:bg-blue-500 transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {author.social.linkedin && (
                  <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 hover:text-white hover:bg-blue-500 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {author.social.instagram && (
                  <a href={author.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 hover:text-white hover:bg-pink-600 transition-all">
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
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <h2 className="text-2xl font-display font-bold text-white">Artigos de {author.name}</h2>
          <span className="text-zinc-500 text-sm font-medium">{authorArticles.length} artigos publicados</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authorArticles.map((article) => (
            <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col glass rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">
                  <span className="text-blue-400">{article.category}</span>
                  <span className="mx-2 text-zinc-700">•</span>
                  <Clock className="w-3.5 h-3.5 mr-1.5" /> {article.readTime}
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-100 group-hover:text-blue-400 transition-colors mb-6 line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-blue-400 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  Ler artigo <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Banner Ad */}
      <AdSlot id="author-bottom-banner" type="banner" className="mt-16 mb-8 rounded-xl" />
    </div>
  );
}
