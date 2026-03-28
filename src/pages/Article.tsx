import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles, categories, authors } from "@/data/articles";
import { AdSlot } from "@/components/AdSlot";
import { Clock, Share2, Twitter, Facebook, Link as LinkIcon, ChevronRight, User, Linkedin, Send } from "lucide-react";
import { useEffect } from "react";

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const author = authors.find(a => a.id === article?.authorId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <Helmet>
          <title>Artigo não encontrado | TechFront</title>
        </Helmet>
        <h1 className="text-4xl font-bold text-zinc-100">Artigo não encontrado</h1>
        <Link to="/" className="text-blue-400 hover:underline flex items-center">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Voltar para a página inicial
        </Link>
      </div>
    );
  }

  const categoryName = categories.find(c => c.slug === article.category || c.id === article.category)?.name;
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) return -1;
      if (a.category !== article.category && b.category === article.category) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{article.title} | TechFront</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.imageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`${window.location.origin}/article/${article.slug}`} />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": article.title,
          "description": article.excerpt,
          "image": [article.imageUrl],
          "datePublished": article.date,
          "dateModified": new Date().toISOString(),
          "author": [{
            "@type": "Person",
            "name": author?.name || "Redação TechFront",
            "url": author ? `${window.location.origin}/author/${author.id}` : window.location.origin
          }],
          "publisher": {
            "@type": "Organization",
            "name": "TechFront",
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/logo.png`
            }
          }
        })}
      </script>

      {/* Top Banner Ad */}
      <AdSlot id="article-top-banner" type="banner" className="mb-8 rounded-xl" mybidId="2018598" />

      {/* Breadcrumbs */}
      <nav className="flex items-center text-[11px] font-medium uppercase tracking-widest text-zinc-500 mb-8">
        <Link to="/" className="hover:text-blue-400 transition-colors">Início</Link>
        <ChevronRight className="w-3.5 h-3.5 mx-2" />
        <Link to={`/category/${article.category}`} className="hover:text-blue-400 transition-colors">{categoryName}</Link>
        <ChevronRight className="w-3.5 h-3.5 mx-2" />
        <span className="text-zinc-300 truncate max-w-[200px] md:max-w-none">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center space-x-3 mb-6">
          <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white bg-blue-600 rounded-sm">
            {categoryName}
          </span>
          <span className="text-zinc-400 text-sm flex items-center font-medium">
            <Clock className="w-4 h-4 mr-1.5" /> {article.readTime} de leitura
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed font-medium border-l-4 border-blue-500 pl-6">
          {article.excerpt}
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-y border-white/10 gap-4">
          <div className="flex items-center space-x-4">
              <Link to={author ? `/author/${author.id}` : "#"} className="w-12 h-12 rounded-full bg-zinc-900 overflow-hidden border border-white/10 hover:border-blue-500 transition-colors">
              {author ? (
                <img src={author.imageUrl} alt={author.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-5 h-5 text-zinc-500" />
                </div>
              )}
            </Link>
            <div>
              <div className="flex items-center gap-1.5">
                <Link to={author ? `/author/${author.id}` : "#"} className="text-white font-bold hover:text-blue-400 transition-colors">{author?.name || "Redação TechFront"}</Link>
                <div className="flex items-center bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter border border-blue-500/20">
                  Verificado
                </div>
              </div>
              <p className="text-zinc-500 text-sm">
                Publicado em {new Date(article.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mr-2">Compartilhar</span>
            <button className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#4267B2] hover:border-[#4267B2] transition-colors">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-colors">
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <figure className="mb-14 rounded-2xl overflow-hidden border border-white/10">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-[400px] md:h-[600px] object-cover"
          loading="lazy"
        />
        <figcaption className="p-4 text-center text-xs font-medium uppercase tracking-widest text-zinc-500 bg-zinc-900/50 border-t border-white/10">
          Imagem ilustrativa / Reprodução
        </figcaption>
      </figure>

      {/* Article Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div 
            className="prose prose-invert prose-lg max-w-none prose-p:text-zinc-300 prose-p:leading-relaxed prose-headings:font-display prose-headings:text-white prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-strong:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA In-Content (Monetização Sutil) */}
          <div className="my-12 p-8 glass rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Quer ir além das notícias?</h3>
            <p className="text-zinc-400 mb-6">
              Junte-se à nossa comunidade exclusiva e receba análises aprofundadas, relatórios de tendências e insights acionáveis sobre tecnologia e mercado cripto.
            </p>
            <a href="/premium" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors">
              Conheça o TechFront Premium
            </a>
          </div>

          {/* Author Bio */}
          {author && (
            <div className="mt-12 p-8 glass border border-white/10 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <User className="w-24 h-24 text-blue-500" />
              </div>
              <Link to={`/author/${author.id}`} className="w-24 h-24 shrink-0 rounded-2xl bg-zinc-800 overflow-hidden border-2 border-blue-500/20 hover:border-blue-500 transition-all shadow-xl">
                <img src={author.imageUrl} alt={author.name} className="w-full h-full object-cover" />
              </Link>
              <div className="text-center sm:text-left flex-1 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <Link to={`/author/${author.id}`} className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">{author.name}</Link>
                  <span className="inline-flex items-center bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border border-blue-500/20 w-fit mx-auto sm:mx-0">
                    Autor Verificado
                  </span>
                </div>
                <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-4">
                  {author.role}
                </p>
                <p className="text-zinc-400 text-base leading-relaxed mb-6 italic">
                  "{author.bio}"
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-6">
                  {author.social?.twitter && (
                    <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                      <Twitter className="w-4 h-4" /> Twitter
                    </a>
                  )}
                  {author.social?.linkedin && (
                    <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  )}
                  <Link to={`/author/${author.id}`} className="ml-auto text-blue-400 text-xs font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                    Perfil Completo <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-3">
            {article.tags?.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-zinc-900 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-blue-500 cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Sidebar Square Ad */}
          <AdSlot id="article-sidebar-square-1" type="square" className="rounded-xl sticky top-28" mybidId="2018598" />
          
          {/* Mini Newsletter */}
          <div className="glass p-8 rounded-3xl border border-white/5 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">TechFront Diário</h3>
            <p className="text-sm text-zinc-400 mb-6">Receba as principais notícias do dia no seu e-mail, todas as manhãs.</p>
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Inscrito!'); }}>
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                required
                className="w-full bg-black border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500/50 text-sm"
              />
              <button 
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors text-sm"
              >
                Assinar Grátis
              </button>
            </form>
          </div>
        </aside>
      </div>

      {/* Related Articles */}
      <section className="mt-20 pt-16 border-t border-white/10">
        <h2 className="text-3xl font-display font-bold mb-10 text-white">Leia também</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((related) => (
            <Link key={related.id} to={`/article/${related.slug}`} className="group flex flex-col glass rounded-2xl overflow-hidden border border-white/5 hover:bg-white/5 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={related.imageUrl} 
                  alt={related.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-4 line-clamp-2 leading-snug">
                  {related.title}
                </h3>
                <div className="mt-auto flex items-center text-xs font-medium uppercase tracking-widest text-zinc-500">
                  <Clock className="w-3.5 h-3.5 mr-1.5" /> {related.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
