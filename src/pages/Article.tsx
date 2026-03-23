import { useParams, Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import { AdSlot } from "@/components/AdSlot";
import { Clock, Share2, Twitter, Facebook, Link as LinkIcon, ChevronRight, User } from "lucide-react";
import { useEffect } from "react";

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} | CryptoPremium`;
    }
  }, [slug, article]);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <h1 className="text-4xl font-bold text-zinc-100">Artigo não encontrado</h1>
        <Link to="/" className="text-emerald-400 hover:underline flex items-center">
          <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Voltar para a página inicial
        </Link>
      </div>
    );
  }

  const categoryName = categories.find(c => c.slug === article.category || c.id === article.category)?.name;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Top Banner Ad */}
      <AdSlot id="article-top-banner" type="banner" className="mb-8 rounded-xl" />

      {/* Breadcrumbs */}
      <nav className="flex items-center text-[11px] font-medium uppercase tracking-widest text-zinc-500 mb-8">
        <Link to="/" className="hover:text-emerald-400 transition-colors">Início</Link>
        <ChevronRight className="w-3.5 h-3.5 mx-2" />
        <Link to={`/category/${article.category}`} className="hover:text-emerald-400 transition-colors">{categoryName}</Link>
        <ChevronRight className="w-3.5 h-3.5 mx-2" />
        <span className="text-zinc-300 truncate max-w-[200px] md:max-w-none">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center space-x-3 mb-6">
          <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-zinc-950 bg-emerald-400 rounded-sm">
            {categoryName}
          </span>
          <span className="text-zinc-400 text-sm flex items-center font-medium">
            <Clock className="w-4 h-4 mr-1.5" /> {article.readTime} de leitura
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed font-medium border-l-4 border-emerald-500 pl-6">
          {article.excerpt}
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-y border-zinc-800/50 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <User className="w-5 h-5 text-zinc-500" />
            </div>
            <div>
              <p className="text-white font-bold">{article.author}</p>
              <p className="text-zinc-500 text-sm">{new Date(article.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mr-2">Compartilhar</span>
            <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#4267B2] hover:border-[#4267B2] transition-colors">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-colors">
              <LinkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <figure className="mb-14 rounded-2xl overflow-hidden border border-zinc-800/50">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-[400px] md:h-[600px] object-cover"
          loading="lazy"
        />
        <figcaption className="p-4 text-center text-xs font-medium uppercase tracking-widest text-zinc-500 bg-[#09090b] border-t border-zinc-800/50">
          Imagem ilustrativa / Reprodução
        </figcaption>
      </figure>

      {/* Article Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div 
            className="prose prose-invert prose-lg max-w-none prose-p:text-zinc-300 prose-p:leading-relaxed prose-headings:font-display prose-headings:text-white prose-headings:font-bold prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-strong:text-white prose-strong:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-zinc-800/50 prose-h2:pb-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Middle Content Ad */}
          <AdSlot id="article-middle-banner" type="banner" className="my-12 rounded-xl" />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-emerald-500 cursor-pointer transition-colors">#Crypto</span>
            <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-emerald-500 cursor-pointer transition-colors">#Bitcoin</span>
            <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-emerald-500 cursor-pointer transition-colors">#Investimentos</span>
            <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-emerald-500 cursor-pointer transition-colors">#MercadoFinanceiro</span>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Sidebar Square Ad */}
          <AdSlot id="article-sidebar-square-1" type="square" className="rounded-xl sticky top-28" />
          
          <div className="bg-[#09090b] border border-zinc-800/50 rounded-2xl p-8 shadow-xl shadow-black/50">
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center">
              <Share2 className="w-5 h-5 mr-2 text-emerald-400" />
              Newsletter Premium
            </h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Receba análises exclusivas e sinais de mercado diretamente no seu e-mail, antes de todo mundo.
            </p>
            <input 
              type="email" 
              placeholder="Seu e-mail profissional" 
              className="w-full bg-black border border-zinc-800 text-zinc-100 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-500/50 mb-4 transition-colors"
            />
            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-4 py-3 rounded-lg transition-colors">
              Quero receber
            </button>
          </div>
        </aside>
      </div>

      {/* Bottom Banner Ad */}
      <AdSlot id="article-bottom-banner" type="banner" className="mt-20 mb-12 rounded-xl" />

      {/* Related Articles */}
      <section className="mt-20 pt-16 border-t border-zinc-800/50">
        <h2 className="text-3xl font-display font-bold mb-10">Leia também</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.filter(a => a.id !== article.id).slice(0, 3).map((related) => (
            <Link key={related.id} to={`/article/${related.slug}`} className="group flex flex-col bg-[#09090b] rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-black/50">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={related.imageUrl} 
                  alt={related.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-display font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-4 line-clamp-2 leading-snug">
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
