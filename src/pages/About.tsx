import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Shield, Target, TrendingUp, Zap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { authors } from "@/data/authors";

export function About() {
  const leaders = authors.slice(0, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Sobre Nós | TechFront - O Futuro da Tecnologia</title>
        <meta name="description" content="Conheça o TechFront, seu portal independente de jornalismo tecnológico, focado em IA, Criptomoedas e inovação global." />
        <meta property="og:title" content="Sobre Nós | TechFront - O Futuro da Tecnologia" />
        <meta property="og:description" content="Conheça o TechFront, seu portal independente de jornalismo tecnológico, focado em IA, Criptomoedas e inovação global." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}/sobre`} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-6 border border-blue-500/20 bg-blue-500/10">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-400">Nossa História</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Decodificando o <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">futuro da tecnologia</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Nascemos da necessidade de um jornalismo tecnológico independente, profundo e acessível. Somos a ponte entre a inovação complexa e o seu dia a dia.
          </p>
        </div>

        <div className="space-y-12">
          <section className="glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-blue-500" /> Quem Somos
            </h2>
            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
              O <strong>TechFront</strong> é formado por uma equipe de jornalistas especializados, ex-desenvolvedores e entusiastas da inovação. Após anos acompanhando o ritmo frenético do Vale do Silício e da Web3, decidimos criar um portal que vai além do "hype".
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Não publicamos apenas releases de empresas. Entregamos análises críticas, reportagens investigativas e tutoriais práticos para que você possa entender e dominar as ferramentas que estão moldando o amanhã.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Missão</h3>
              <p className="text-zinc-400 leading-relaxed">
                Democratizar o conhecimento tecnológico, fornecendo informações precisas e análises aprofundadas para leitores de todos os níveis de conhecimento.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossa Visão</h3>
              <p className="text-zinc-400 leading-relaxed">
                Ser o portal de tecnologia mais respeitado e lido do Brasil, reconhecido pela qualidade editorial, imparcialidade e fomento à inovação.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nossos Valores</h3>
              <ul className="text-zinc-400 leading-relaxed space-y-2">
                <li>• Independência editorial</li>
                <li>• Rigor jornalístico</li>
                <li>• Clareza na comunicação</li>
                <li>• Foco no impacto social</li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Nossa Liderança</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {leaders.map((leader, index) => (
                <div key={leader.id} className={`glass p-8 rounded-3xl border border-white/5 text-center hover:border-${index === 0 ? 'blue' : 'cyan'}-500/30 transition-colors`}>
                  <div className={`w-24 h-24 mx-auto rounded-full bg-zinc-900 mb-6 overflow-hidden border-2 border-${index === 0 ? 'blue' : 'cyan'}-500/20`}>
                    <img src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className={`${index === 0 ? 'text-blue-500' : 'text-cyan-400'} text-sm font-bold uppercase tracking-widest mb-4`}>{leader.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center glass p-12 rounded-3xl border border-blue-500/30 relative overflow-hidden mt-16 shadow-[0_0_40px_rgba(59,130,246,0.1)] bg-blue-500/5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Quer ir além das notícias?</h2>
            <p className="text-zinc-300 mb-8 max-w-xl mx-auto relative z-10 text-lg">
              Junte-se à nossa comunidade Premium e receba relatórios aprofundados, análises de mercado exclusivas e acesso antecipado a eventos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/premium" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">
                Conheça o TechFront Premium
              </Link>
              <Link to="/contato" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors border border-white/10">
                Fale Conosco
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
